// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { SuiAddress, SuiObjectData, getObjectDisplay } from '@mysten/sui.js';
import { useQuery } from '@tanstack/react-query';
import { useRpcClient } from '../api/RpcClientContext';
import { useGetOwnedObjects } from './useGetOwnedObjects';

// OriginByte contract address for mainnet
const ORIGINBYTE_OWNER_TOKEN_ADDRESS =
    '0x95a441d389b07437d00dd07e0b6f05f513d7659b13fd7c5d3923c7d9d847199b';
const ORIGINBYTE_KIOSK_OWNER_TOKEN = `${ORIGINBYTE_OWNER_TOKEN_ADDRESS}::ob_kiosk::OwnerToken`;
const RPC_LIMIT = 50;

export function useGetOriginByteKioskContents(
    address?: SuiAddress | null,
    disable?: boolean
) {
    const rpc = useRpcClient();
    const { data } = useGetOwnedObjects(
        address,
        {
            MatchAny: [{ StructType: ORIGINBYTE_KIOSK_OWNER_TOKEN }],
        },
        RPC_LIMIT
    );

    return useQuery(
        ['originbyte-kiosk', address],
        async () => {
            // find list of kiosk IDs owned by address
            const obKioskIds = data!.pages
                .flatMap((page) => page.data)
                .map(
                    (obj) =>
                        obj.data?.content &&
                        'fields' in obj.data.content &&
                        obj.data.content.fields.kiosk
                );

            if (!obKioskIds.length) return [];

            // fetch the user's kiosks
            const ownedKiosks = await rpc.multiGetObjects({
                ids: obKioskIds,
                options: {
                    showContent: true,
                    showDisplay: true,
                },
            });

            // find object IDs within a kiosk
            const kioskObjectIds = await Promise.all(
                ownedKiosks.map(async (kiosk) => {
                    if (!kiosk.data?.objectId) return [];
                    const objects = await rpc.getDynamicFields({
                        parentId: kiosk.data.objectId,
                    });
                    return objects.data.map((obj) => obj.objectId);
                })
            );

            // fetch the contents of the objects within a kiosk
            const kioskContent = await rpc.multiGetObjects({
                ids: kioskObjectIds.flat(),
                options: {
                    showType: true,
                    showContent: true,
                    showDisplay: true,
                },
            });

            return kioskContent;
        },
        { enabled: !!data?.pages.length && !disable }
    );
}

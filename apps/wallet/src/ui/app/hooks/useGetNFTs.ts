import {
    useGetOwnedObjects,
    useGetOriginByteKioskContents,
} from '@mysten/core';
import {
    getObjectDisplay,
    type SuiObjectData,
    type SuiAddress,
    type SuiObjectResponse,
} from '@mysten/sui.js';

import useAppSelector from './useAppSelector';

const MAX_FETCH_LIMIT = 50;

const hasDisplayData = (obj: SuiObjectResponse) => !!getObjectDisplay(obj).data;

export function useGetNFTs(address?: SuiAddress | null) {
    const {
        data,
        isLoading,
        error,
        isError,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
        isInitialLoading,
    } = useGetOwnedObjects(
        address,
        {
            MatchNone: [{ StructType: '0x2::coin::Coin' }],
        },
        MAX_FETCH_LIMIT
    );
    const { apiEnv } = useAppSelector((state) => state.app);

    const { data: obKioskContents } = useGetOriginByteKioskContents(
        '0x83074b74d9df7657d563549201de0932cdccfab0daebf1ce4f966e082bf3e7da',
        apiEnv !== 'mainnet'
    );

    const filtered =
        obKioskContents
            ?.filter(hasDisplayData)
            .map(({ data }) => data as SuiObjectData) || [];

    const nfts = [
        ...(data?.pages
            .flatMap((page) => page.data)
            .filter(hasDisplayData)
            .map(({ data }) => data as SuiObjectData) || []),
        ...filtered,
    ];

    return {
        data: nfts,
        isInitialLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
        isLoading,
        isError,
        error,
    };
}

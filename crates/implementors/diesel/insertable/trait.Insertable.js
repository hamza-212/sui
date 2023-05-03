(function() {var implementors = {
"sui_indexer":[["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.Transaction.html\" title=\"struct sui_indexer::models::transactions::Transaction\">Transaction</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/input_objects/struct.table.html\" title=\"struct sui_indexer::schema::input_objects::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/transaction_index/struct.InputObject.html\" title=\"struct sui_indexer::models::transaction_index::InputObject\">InputObject</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.Object.html\" title=\"struct sui_indexer::models::objects::Object\">Object</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/system_states/struct.table.html\" title=\"struct sui_indexer::schema::system_states::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/system_states/struct.table.html\" title=\"struct sui_indexer::schema::system_states::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/system_states/struct.table.html\" title=\"struct sui_indexer::schema::system_states::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/system_state/struct.DBSystemStateSummary.html\" title=\"struct sui_indexer::models::system_state::DBSystemStateSummary\">DBSystemStateSummary</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/checkpoints/struct.Checkpoint.html\" title=\"struct sui_indexer::models::checkpoints::Checkpoint\">Checkpoint</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/checkpoints/struct.Checkpoint.html\" title=\"struct sui_indexer::models::checkpoints::Checkpoint\">Checkpoint</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/events/struct.Event.html\" title=\"struct sui_indexer::models::events::Event\">Event</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/addresses/struct.Address.html\" title=\"struct sui_indexer::models::addresses::Address\">Address</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.Transaction.html\" title=\"struct sui_indexer::models::transactions::Transaction\">Transaction</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/transaction_index/struct.MoveCall.html\" title=\"struct sui_indexer::models::transaction_index::MoveCall\">MoveCall</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/system_states/struct.table.html\" title=\"struct sui_indexer::schema::system_states::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/system_state/struct.DBSystemStateSummary.html\" title=\"struct sui_indexer::models::system_state::DBSystemStateSummary\">DBSystemStateSummary</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/transaction_index/struct.Recipient.html\" title=\"struct sui_indexer::models::transaction_index::Recipient\">Recipient</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/transaction_index/struct.MoveCall.html\" title=\"struct sui_indexer::models::transaction_index::MoveCall\">MoveCall</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/at_risk_validators/struct.table.html\" title=\"struct sui_indexer::schema::at_risk_validators::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/at_risk_validators/struct.table.html\" title=\"struct sui_indexer::schema::at_risk_validators::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/events/struct.Event.html\" title=\"struct sui_indexer::models::events::Event\">Event</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/addresses/struct.Address.html\" title=\"struct sui_indexer::models::addresses::Address\">Address</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/at_risk_validators/struct.table.html\" title=\"struct sui_indexer::schema::at_risk_validators::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/system_state/struct.DBAtRiskValidator.html\" title=\"struct sui_indexer::models::system_state::DBAtRiskValidator\">DBAtRiskValidator</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/at_risk_validators/struct.table.html\" title=\"struct sui_indexer::schema::at_risk_validators::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/system_state/struct.DBAtRiskValidator.html\" title=\"struct sui_indexer::models::system_state::DBAtRiskValidator\">DBAtRiskValidator</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/packages/struct.Package.html\" title=\"struct sui_indexer::models::packages::Package\">Package</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/packages/struct.Package.html\" title=\"struct sui_indexer::models::packages::Package\">Package</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/objects/struct.Object.html\" title=\"struct sui_indexer::models::objects::Object\">Object</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/validators/struct.table.html\" title=\"struct sui_indexer::schema::validators::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/system_state/struct.DBValidatorSummary.html\" title=\"struct sui_indexer::models::system_state::DBValidatorSummary\">DBValidatorSummary</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/epoch/struct.DBEpochInfo.html\" title=\"struct sui_indexer::models::epoch::DBEpochInfo\">DBEpochInfo</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/validators/struct.table.html\" title=\"struct sui_indexer::schema::validators::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/system_state/struct.DBValidatorSummary.html\" title=\"struct sui_indexer::models::system_state::DBValidatorSummary\">DBValidatorSummary</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/validators/struct.table.html\" title=\"struct sui_indexer::schema::validators::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/validators/struct.table.html\" title=\"struct sui_indexer::schema::validators::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/input_objects/struct.table.html\" title=\"struct sui_indexer::schema::input_objects::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/input_objects/struct.table.html\" title=\"struct sui_indexer::schema::input_objects::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/input_objects/struct.table.html\" title=\"struct sui_indexer::schema::input_objects::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/transaction_index/struct.InputObject.html\" title=\"struct sui_indexer::models::transaction_index::InputObject\">InputObject</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/at_risk_validators/struct.table.html\" title=\"struct sui_indexer::schema::at_risk_validators::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/at_risk_validators/struct.table.html\" title=\"struct sui_indexer::schema::at_risk_validators::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/validators/struct.table.html\" title=\"struct sui_indexer::schema::validators::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/validators/struct.table.html\" title=\"struct sui_indexer::schema::validators::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/system_states/struct.table.html\" title=\"struct sui_indexer::schema::system_states::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/system_states/struct.table.html\" title=\"struct sui_indexer::schema::system_states::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/transaction_index/struct.Recipient.html\" title=\"struct sui_indexer::models::transaction_index::Recipient\">Recipient</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/input_objects/struct.table.html\" title=\"struct sui_indexer::schema::input_objects::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/input_objects/struct.table.html\" title=\"struct sui_indexer::schema::input_objects::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/epoch/struct.DBEpochInfo.html\" title=\"struct sui_indexer::models::epoch::DBEpochInfo\">DBEpochInfo</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
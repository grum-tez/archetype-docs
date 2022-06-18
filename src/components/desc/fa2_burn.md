import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry burn(tid : nat) {
  require { r2 : is_not_paused() }
  effect {
    const token_owner ?= ledger[tid]?.lowner : FA2_TOKEN_UNDEFINED;
    do_require(token_owner = caller, FA2_INSUFFICIENT_BALANCE);
    ledger.remove(tid);
    token_metadata.remove(tid);
    royalties.remove(tid)
  }
}
```
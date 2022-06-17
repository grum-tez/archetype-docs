import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry burn(tid : nat) {
  require { r2 : is_not_paused() }
  effect {
    do_require(ledger.contains(tid), FA2_TOKEN_UNDEFINED);
    do_require(ledger[tid].lowner = caller, FA2_INSUFFICIENT_BALANCE);
    ledger.remove(tid);
    token_metadata.remove(tid);
    royalties.remove(tid)
  }
}
```
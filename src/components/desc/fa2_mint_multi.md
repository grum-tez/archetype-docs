```archetype
entry mint (tow : address, tid : nat, nbt : nat) {
  called by owner
  require { fa2_r5: is_not_paused() }
  effect {
    ledger.add_update((tow, tid), { lamount += nbt });
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`require`](/docs/reference/declarations/entrypoint#require) [`effect`](/docs/reference/declarations/entrypoint#effect) [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-)

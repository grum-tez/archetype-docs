```archetype
entry burn(nbt : nat) {
  constant {
    amount ?is ledger[caller]?.lamount otherwise FA2_INSUFFICIENT_BALANCE
  }
  require {
    fa2_r6: is_not_paused();
    fa2_r7: amount >= nbt otherwise FA2_INSUFFICIENT_BALANCE
  }
  effect {
    if (amount > nbt) then
      ledger.update(caller, { lamount -= nbt })
    else ledger.remove(caller)
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`nat`](/docs/reference/types#nat) [`constant`](/docs/reference/declarations/entrypoint#constant) [`?.`](/docs/reference/expressions/asset#ak--asset_keyaf-1) [`require`](/docs/reference/declarations/entrypoint#require) [`>=`](/docs/reference/expressions/operators/arithmetic#a--b-12) [`effect`](/docs/reference/declarations/entrypoint#effect) [`caller`](/docs/reference/expressions/constants#caller) [`update`](/docs/reference/instructions/asset#aupdatek--u-) [`remove`](/docs/reference/instructions/asset#aremovek)

import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry burn(tid : nat) {
  constant {
    token_owner ?is ledger[tid]?.lowner otherwise FA2_TOKEN_UNDEFINED;
  }
  require {
    r2 : is_not_paused();
    r3 : token_owner = caller otherwise FA2_INSUFFICIENT_BALANCE
  }
  effect {
    ledger.remove(tid);
    token_metadata.remove(tid);
    royalties.remove(tid)
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`nat`](/docs/reference/types#nat) [`constant`](/docs/reference/declarations/entrypoint#constant) [`?.`](/docs/reference/expressions/asset#ak--asset_keyaf-1) [`require`](/docs/reference/declarations/entrypoint#require) [`=`](/docs/reference/expressions/operators/arithmetic#a--b-7) [`caller`](/docs/reference/expressions/constants#caller) [`effect`](/docs/reference/declarations/entrypoint#effect) [`remove`](/docs/reference/instructions/asset#aremovek)
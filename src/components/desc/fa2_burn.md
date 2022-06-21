import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>


<Tabs defaultValue="NFT" >

<TabItem value="NFT">

```archetype
entry burn(tid : nat) {
  constant {
    token_owner ?is ledger[tid]?.lowner otherwise FA2_TOKEN_UNDEFINED;
  }
  require {
    fa2_r6: is_not_paused();
    fa2_r7: token_owner = caller otherwise FA2_INSUFFICIENT_BALANCE
  }
  effect {
    ledger.remove(tid);
    token_metadata.remove(tid);
    royalties.remove(tid)
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`nat`](/docs/reference/types#nat) [`constant`](/docs/reference/declarations/entrypoint#constant) [`?.`](/docs/reference/expressions/asset#ak--asset_keyaf-1) [`require`](/docs/reference/declarations/entrypoint#require) [`=`](/docs/reference/expressions/operators/arithmetic#a--b-7) [`caller`](/docs/reference/expressions/constants#caller) [`effect`](/docs/reference/declarations/entrypoint#effect) [`remove`](/docs/reference/instructions/asset#aremovek)

</TabItem>

<TabItem value="Fungible">

```archetype
entry burn(iamount : nat) {
  constant {
    amount ?is ledger[caller]?.lamount otherwise FA2_INSUFFICIENT_BALANCE
  }
  require {
    fa2_r6: is_not_paused();
    fa2_r7: amount >= iamount otherwise FA2_INSUFFICIENT_BALANCE
  }
  effect {
    if (amount > iamount) then
      ledger.update(caller, { lamount -= iamount })
    else ledger.remove(caller)
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`nat`](/docs/reference/types#nat) [`constant`](/docs/reference/declarations/entrypoint#constant) [`?.`](/docs/reference/expressions/asset#ak--asset_keyaf-1) [`require`](/docs/reference/declarations/entrypoint#require) [`>=`](/docs/reference/expressions/operators/arithmetic#a--b-12) [`effect`](/docs/reference/declarations/entrypoint#effect) [`caller`](/docs/reference/expressions/constants#caller) [`update`](/docs/reference/instructions/asset#aupdatek--u-) [`remove`](/docs/reference/instructions/asset#aremovek)


</TabItem>

<TabItem value="Multi asset">

```archetype
entry burn(tid : nat, iamount : nat) {
  constant {
    amount ?is ledger[(caller, tid)]?.lamount otherwise FA2_INSUFFICIENT_BALANCE
  }
  require {
    fa2_r6: is_not_paused();
    fa2_r7: amount >= iamount otherwise FA2_INSUFFICIENT_BALANCE
  }
  effect {
    if (amount > iamount) then
      ledger.update((caller, tid), { lamount -= iamount })
    else ledger.remove((caller, tid))
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`nat`](/docs/reference/types#nat) [`constant`](/docs/reference/declarations/entrypoint#constant) [`?.`](/docs/reference/expressions/asset#ak--asset_keyaf-1) [`require`](/docs/reference/declarations/entrypoint#require) [`>=`](/docs/reference/expressions/operators/arithmetic#a--b-12) [`effect`](/docs/reference/declarations/entrypoint#effect) [`caller`](/docs/reference/expressions/constants#caller) [`update`](/docs/reference/instructions/asset#aupdatek--u-) [`remove`](/docs/reference/instructions/asset#aremovek)

</TabItem>

</Tabs>
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Transfers `value` tokens from `from` to `to`.

If the caller is not equal to `from`, then [`caller`](/docs/reference/expressions/constants#caller) must have been allowed by from to transfer this amount to `to`

Approved amount is decreased by `value` if applicable.

<Tabs defaultValue="code">

<TabItem value="code" label="Code">

```archetype
entry %transfer (%from : address, %to : address, value : nat) {
  require {
    r1 : ledger[%from].tokens >= value otherwise "NotEnoughBalance";
  }
  effect {
    if caller <> %from then begin
      const current = ledger[%from].allowance[caller] ? the : 0;
      const new_value ?=
        int_to_nat(current - value) : ("NotEnoughAllowance", ((value, current)));
      ledger[%from].allowance.put(caller, new_value);
    end;
    ledger.update(%from,   { tokens -= value });
    ledger.add_update(%to, { tokens += value });
  }
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`require`](/docs/reference/declarations/entrypoint#require) [`[].`](/docs/reference/expressions/asset#ak--asset_keyaf) [`>=`](/docs/reference/expressions/operators/arithmetic#a--b-12) [`effect`](/docs/reference/declarations/entrypoint#effect) [`if`](/docs/reference/instructions/control#if) [`caller`](/docs/reference/expressions/constants#caller) [`<>`](/docs/reference/expressions/operators/arithmetic#a--b-8) [`begin`](/docs/reference/instructions/sequence) [`const`](/docs/reference/instructions/localvariable#const) [`?:`](/docs/reference/expressions/controls#a--b--c) [`?=`](/docs/reference/instructions/localvariable#) [`into_to_nat`](/docs/reference/expressions/builtins#int_to_nat(i%20:%20int)) [`put`](/docs/reference/instructions/containers#mputk-v) [`update`](/docs/reference/instructions/asset#aupdatek--u-) [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-)

</TabItem>


</Tabs>





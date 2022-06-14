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
    if caller <> %from then (
      const current = ledger[%from].allowance[caller] ? the : 0;
      const new_value ?= int_to_nat(current - value) : ("NotEnoughAllowance", ((value, current)));
      ledger[%from].allowance.put(caller, new_value);
    );
    ledger.update(%from, { tokens -= value });
    ledger.add_update(%to, { tokens += value });
  }
}
```

</TabItem>


</Tabs>





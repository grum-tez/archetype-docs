import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Approves `spender` to transfer `value` tokens owned by [`caller`](/docs/reference/expressions/constants#caller).

<Tabs defaultValue="code">

<TabItem value="code" label="Code">

```archetype
entry approve(spender : address, value : nat) {
  const previous = ledger[caller] ? (the.allowance[spender] ? the : 0) : 0;
  do_fail_if(previous > 0 and value > 0, (("UnsafeAllowanceChange", previous)));
  ledger[caller].allowance.put(spender, value);
}
```

</TabItem>

</Tabs>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[`getter`](/docs/reference/declarations/entrypoint#getter) of the allowed value `spender` can transfer on behalf of `owner`.


<Tabs defaultValue="code">

<TabItem value="code" label="Code">

```archetype
getter getAllowance (owner : address, spender : address) : nat {
  return (ledger[owner] ? (the.allowance[spender] ? the : 0) : 0)
}
```

</TabItem>

</Tabs>
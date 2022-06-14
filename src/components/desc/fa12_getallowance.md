import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Getter of the allowed value `spender` can transfer on behalf of `owner`.


<Tabs defaultValue="code">

<TabItem value="code" label="Code">

```archetype
getter getAllowance (owner : address, spender : address) : nat {
  return (ledger[owner] ? (the.allowance[spender] ? the : 0) : 0)
}
```

[`getter`](/docs/reference/declarations/entrypoint#getter) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`?:`](/docs/reference/expressions/controls#a--b--c)

</TabItem>

</Tabs>
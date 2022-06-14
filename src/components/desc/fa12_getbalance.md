import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


[`getter`](/docs/reference/declarations/entrypoint#getter) of the number of tokens owned by `owner`.


<Tabs defaultValue="code">

<TabItem value="code" label="Code">

```archetype
getter getBalance (owner : address) : nat {
  return (ledger[owner] ? the.tokens : 0)
}
```

</TabItem>

</Tabs>
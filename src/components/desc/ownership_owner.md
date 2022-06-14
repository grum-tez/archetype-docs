import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract [parameter](/docs/reference/declarations/contract#parameters) for the contract owner.

It is typically used to protect an entrypoint against other callers with a [`called by`](/docs/reference/declarations/entrypoint#called-by) section:

```archetype
entry exec() {
  called by owner
  /* ... */
}
```

<Tabs defaultValue="code">

<TabItem value="code" label="Code">

```archetype
archetype my_contract(owner : address)
```
[`archetype`](/docs/reference/declarations/contract) [`address`](/docs/reference/types#address)

</TabItem>

</Tabs>

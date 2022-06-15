import NamedDivider from '@site/src/components/NamedDivider.js';

Contract [parameter](/docs/reference/declarations/contract#parameters) for the contract owner.

It is typically used to protect an entrypoint against other callers with a [`called by`](/docs/reference/declarations/entrypoint#called-by) section:


```archetype
entry exec() {
  called by owner
  /* ... */
}
```

<NamedDivider title="Code" width="1.5"/>

```archetype
archetype my_contract(owner : address)
```
[`archetype`](/docs/reference/declarations/contract) [`address`](/docs/reference/types#address)

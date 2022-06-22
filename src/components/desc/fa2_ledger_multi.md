
`ledger` associates an account *and* a token id to the number of tokens it owns.
```archetype
asset ledger identified by lowner ltokenid to big_map {
  lowner     : address;
  ltokenid   : nat;
  lamount    : nat = 0;
}
```
[`asset`](/docs/asset) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat)

:::info
Note that the asset is identified by the owner account *and* token id.
:::
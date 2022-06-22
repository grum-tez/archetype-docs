`ledger` associates an NFT id to its owner (*not* the other way round).
```archetype
asset ledger to big_map {
  ltokenid   : nat;
  lowner     : address;
}
```
[`asset`](/docs/asset) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat)

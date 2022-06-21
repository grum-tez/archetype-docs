
```archetype
asset ledger to big_map {
  lowner     : address;
  lamount    : nat = 0;
} initialized by {
  {owner; INITIAL_TOTAL_SUPPLY}
}
```
[`asset`](/docs/asset) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat)

Accesses field `f` of asset with key `k` in collection `A`.

For example, consider the `ledger` asset:
```archetype
asset ledger {
  holder : address;
  amount : nat;
}
```

The following retrieves the value of `amount` field of `caller` address:
```archetype
var a = ledger[caller].amount;
```
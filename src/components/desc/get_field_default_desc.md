Accesses field `f` of asset with key `k` in collection `A`. It returns value `d` when asset `k` is not found in collection `A`.

For example, consider the `ledger` asset:
```archetype
asset ledger {
  holder : address;
  amount : nat;
}
```

The following retrieves the value of `amount` field of `caller` address and assigns value `0` to `a` when `caller` is not found in `ledger` collection:
```archetype
const a : option<nat> = ledger[caller]? amount : 0;
```

It is equivalent to:
```archetype
const a : option<nat> =
  match ledger.getopt(caller) with
  | some av -> av.amount
  | none    -> 0
  end
```
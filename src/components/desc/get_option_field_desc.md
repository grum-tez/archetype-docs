Accesses field `f` of asset with key `k` in collection `A`. It returns an option of field value, which is `none` when asset `k` is not found in collection `A`.

For example, consider the `ledger` asset:
```archetype
asset ledger {
  holder : address;
  amount : nat;
}
```

The following retrieves the value of `amount` field of `caller` address:
```archetype
const a : option<nat> = ledger[caller]?amount;
```

It is equivalent to:
```archetype
const a : option<nat> = match ledger.getopt(caller) with
 | some ar -> some(ar.amount)
 | none    -> none
end
```
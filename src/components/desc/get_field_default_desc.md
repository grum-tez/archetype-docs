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
const a = ledger[caller].? amount : 0;
```

It is equivalent to:
```archetype
const a =
  match ledger.getopt(caller) with
  | some av -> av.amount
  | none    -> 0
  end
```

:::info
When accessing several fields' values of the same asset, it is better gas-wise to retrieve first the [`asset_value`](/docs/reference/types#asset_value<A>) locally with [`[]`](/docs/reference/expressions/asset#ak--asset_keya) or [`getopt`](/docs/reference/expressions/asset#agetoptk--asset_keya) operators, and then access a field value with the `.` operator.
:::
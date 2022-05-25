Evaluates expression `e` when asset with key `k` is found in collection `A`. It returns value `d` when asset `k` is not found in collection `A`.

When asset is found, asset field `f` in expression `e` is accessed with the `the.f` syntax.

For example, consider the `ledger` asset:
```archetype
asset ledger {
  holder : address;
  amount : nat;
}
```

The following determines whether the [`caller`](/docs/reference/expressions/constants#caller) has a positive balance or not:
```archetype
const pos_balance = ledger[caller].? the.amount > 0 : false;
```

It is equivalent to:
```archetype
const pos_balance =
  match ledger.getopt(caller) with
  | some av -> av.amount > 0
  | none    -> false
  end
```

:::info
When accessing several fields' values of the same asset, it is better gas-wise to retrieve first the [`asset_value`](/docs/reference/types#asset_value<A>) locally with [`[]`](/docs/reference/expressions/asset#ak--asset_keya) or [`getopt`](/docs/reference/expressions/asset#agetoptk--asset_keya) operators, and then access a field value with the `.` operator.
:::
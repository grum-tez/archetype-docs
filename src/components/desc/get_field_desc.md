Returns the value of field `f` of asset `k` in collection `A`, or fails if `k` is not found in `A`.

For example, consider the ledger asset:

```archetype
asset ledger {
  holder : address;
  amount : nat;
}
```

The following retrieves the value of `amount` field for `caller` asset:

```archetype
const a : nat = ledger[caller].amount;
```

It is equivalent to:

```archetype
const a : option<nat> =
  match ledger[caller] with
  | some av -> av.amount
  | none    -> fail(("ASSET_NOT_FOUND", "ledger"))
  end
```

:::info
When accessing several fields' values of the same asset, it is better gas-wise to retrieve first the [`asset_value`](/docs/reference/types#asset_value<A>) locally with [`[]`](/docs/reference/expressions/asset#ak--asset_keya) operator, and then access a field value with the `.` operator.
:::
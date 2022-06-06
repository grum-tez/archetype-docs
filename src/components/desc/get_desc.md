Returns an [`asset_value`](/docs/reference/types#asset_value<A>) value from key `k` in collection `A`, and fails if `k` is not found in collection `A`.

For example, consider the `ledger` asset:
```archetype
asset ledger {
  holder : address;
  amount : nat;
}
```

The following returns the record value associated with `caller` address:
```archetype
const h = ledger[caller];
```

It is equivalent to:
```archetype
const h =
  match ledger.get(caller) with
  | some av -> av
  | none    -> fail(("ledger","ASSET_NOT_FOUND"))
  end
```
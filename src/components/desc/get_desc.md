Returns an [`asset_record`](/docs/reference/types#asset_record<A>) value from key `k` in collection `A`, and fails if `k` is not found in collection `A`.

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
const h = match ledger.getopt(caller) with
 | some ar -> ar
 | none    -> fail(("ledger","AssetNotFound")
 end
 ```
Removes asset with key `k` from collection `A`.

For example, consider the following declaration:
```archetype
asset ledger {
  owner  : address;
  amount : nat;
}
```

The following instruction removes entry for address `tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb`:
```archetype
ledger.remove(tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb);
```

Note that it does *not* fail when the asset is not in the collection.

#### Partition

A partitioned asset may be removed only through the [partition](/docs/reference/types#partition<A>) field of the partitioning asset, that is that it is not possible to straighforwardly add an asset in a partitioned asset.

For example, consider the following declarations where a `mile` belongs to one and only one `flyer` through the `miles` partition field:
```archetype
asset mile identified by k {
  k          : string;
  expiration : date
}

asset flyer identified by a {
  a     : address;
  miles : partition<mile>
}
```

The following instruction removes the mile asset with key `"#1"` owned by flyer `a`:
```archetype
flyer[a].miles.remove("#1")
```
Note that the effect of above instruction is to:
* remove the asset in the partitioned asset (so that `mile.contains("#1")` returns `false`)
* remove the reference `"#1"` to the partition field `assets` (so that `flyer[a].miles.contains("#1")` returns `false` )

The following instruction is *rejected* by the compiler:
```archetype
mile.remove("#1")
```
with the following error:
```
Cannot access asset collection: asset partitioned is partitionned by field(s) (miles).
```

#### Aggregate

The `remove` instruction on an [aggregate](/docs/reference/types#aggregate<A>) field removes the reference to the asset.

For example, consider the following declarations where a `vehicle` may be referenced by several `driver` assets through the `drives` aggregate field:
```archetype
asset vehicle identified by vin {
  vin     : string;
  nbdoors : nat
}

asset driver identified by id {
  id     : address;
  drives : aggregate<vehicle>
}
```

The following instruction removes the reference to vehicle `"1G1AF1F57A7192174"`:
```archetype
driver[caller].drives.remove("1G1AF1F57A7192174");
```
:::info
The instruction above does not fail if vehicle `"1G1AF1F57A7192174"` is not referenced by `drives`.
:::

#### Asset view

As a *read-only* set of asset references, an [asset_view](/docs/reference/types#asset_view<A>) does *not* provide the `remove` instruction.


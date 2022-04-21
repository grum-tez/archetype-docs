Adds a new asset `a` in collection `A`.

For example, given the following asset declaration with 5 fields:
```archetype
asset loan {
  id         : string;
  subscriber : address;
  principal  : tez;
  interest   : rational = 2%;
  time       : duration = 10w; /* 10 weeks */
}
```

The following instruction adds a new loan to the collection of loans:
```archetype
loan.add({
  id         = "1a3245";
  subscriber = tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg;
  interest   = 5%;
  time       = 50w;
})
```

When all fields are specified, it is possible to omit fields label:
```archetype
loan.add({ "1a3245"; tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg; 5%; 50w5d })
```

Fields with default values (like `interest` and `time`) may be omitted in asset literal; other fields labels must then be present:
```archetype
loan.add({
  id         = "1a3245";
  subscriber = tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg;
})  /* interest and time are defaulted to 2% and 10 weeks respectively */
```

#### Partition

A partitioned asset may be added only through the [partition](/docs/reference/types#partition<A>) field of the partitioning asset, that is that it is not possible to straighforwardly add an asset in a partitioned asset.

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

The proper way to add the mile asset `{ "#1", now }` is with the following instruction on the partition field of flyer `a`:
```archetype
flyer[a].miles.add({ "#1"; (now + 30d) })
```
Note that the effect of above instruction is to:
* add the asset in the partitioned asset (so that `mile.contains("#1")` returns `true`)
* add the reference `"#1"` to the partition field `assets` (so that `flyer[a].miles.contains("#1")` returns `true` )

The following instruction is *rejected* by the compiler:
```archetype
mile.add({ "#1"; (now + 30d) })
```
with the following error:
```
Cannot access asset collection: asset partitioned is partitionned by field(s) (miles).
```

#### Aggregate

The `add` instruction on an [aggregate](/docs/reference/types#aggregate<A>) field only takes the key to the referenced asset.

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

The following instruction adds the reference to vehicle `"1G1AF1F57A7192174"` to driver `caller`:
```archetype
driver[caller].drives.add("1G1AF1F57A7192174");
```
:::info
The instruction above fails if vehicle `"1G1AF1F57A7192174"` does not exist.
:::

#### Asset view

As a *read-only* set of asset references, an [asset_view](/docs/reference/types#asset_view<A>) does *not* provide the `add` instruction.




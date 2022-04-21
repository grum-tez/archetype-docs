Updates one or several fields of asset with key `k` in collection `A`.

For example, consider the `car` asset:
```archetype
asset car {
  vin       : string;
  nbdoors   : nat;
  nbrepairs : nat;
  owner     : address;
}
```

The following instruction increments `nbrepairs` and assigns `owner`:
```archetype
car.update("1G1AF1F57A7192174", {
  nbrepairs += 1;
  owner     := tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg
})
```

An "*inlined*" syntax for *update* is available; for example the *update* instruction above is equivalent to:
```archetype
var k = "1G1AF1F57A7192174";
car[k].nbrepairs += 1;
car[k].owner := tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg;
```

#### Aggregate and partition

A partition or aggregate field does *not* provide the `update` instruction, as it does not impact the reference to the asset. The `update` instruction is done straightorwardly on the (partitioned or aggregated) asset collection.

#### Asset view

As a *read-only* set of asset references, an [asset_view](/docs/reference/types#asset_view<A>) does *not* provide the `update` instruction.
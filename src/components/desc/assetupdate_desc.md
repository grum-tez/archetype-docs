Updates one or several fields of asset with key `k` in collection `A`, and *fails* when `k`is not found in `A`.

For example, consider the `car` asset:
```archetype
asset car {
  vin        : string;
  nb_doors   : nat;
  nb_repairs : nat;
  owner      : address;
}
```

The following instruction increments `nbrepairs` and assigns `owner`:
```archetype
car.update("1G1AF1F57A7192174", {
  nb_repairs += 1;
  owner     := tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg
})
```

An "*inlined*" syntax for *update* is available; for example the *update* instruction above is equivalent to:
```archetype
var k = "1G1AF1F57A7192174";
car[k].nb_repairs += 1;
car[k].owner := tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg;
```

#### Basic containers

[Maps](/docs/language-basics/container#map) and [sets](/docs/language-basics/container#set) fieds may be updated with `:=` `+=` and `-=` update instructions.

For example, consider the following asset declaration:
```archetype
asset my_asset {
  id : nat;
  m  : map<string, bytes>;
} initialized with {
  {0; []}
}
```

The following associates 3 values to `"k"` `"l"` and `"m"` keys in map field `m` of asset `0`:

```archetype
my_asset.update(0, { m += [("k", 0x00); ("l", 0x01); ("m", 0x02)] });
```

The `+=` instruction overwrites any previous association.

The following removes key `"k"` in `m` of asset `0`:
```archetype
my_asset.add_update(0, { m -= ["k"] });
```


#### Aggregate and partition

A partition or aggregate field does *not* provide the `update` instruction, as it does not impact the reference to the asset. The `update` instruction is done straightorwardly on the (partitioned or aggregated) asset collection.

#### Asset view

As a *read-only* set of asset references, an [asset_view](/docs/reference/types#asset_view<A>) does *not* provide the `update` instruction.
Adds a new asset or updates asset with key `k` in collection `A` (does *not* fail):
* it adds a new asset if asset `k` is not in `A`
* it updates asset `k` is in `A`

For example, consider the `ledger` asset:
```archetype
asset ledger identified by holder to big_map {
  holder     : address;
  tokens     : nat = 0;
}
```

Consider the following *add_update* instruction:
```archetype
ledger.add_update(%to, { tokens += value });
```
* if `%to` holder is not in the `ledger` collection, this adds asset `{ %to; value }` to it
* if `%to` is in `ledger` collection, this increments the `tokens` field by `value`

:::info
Note that it is possible to use the `+=` assignment instruction on field `tokens` because `tokens` has a *default value* specified (`0`) in asset declaration.
:::

#### Basic containers

[Maps](/docs/language-basics/container#map) and [sets](/docs/language-basics/container#set) fieds may be updated with `:=` `+=` and `-=` update instructions.

For example, consider the following asset declaration:
```archetype
asset my_asset {
  id : nat;
  m  : map<string, bytes>;
}
```

The following creates asset `0` and associates 3 values to `"k"` `"l"` and `"m"` keys in map field `m`:

```archetype
my_asset.add_update(0, { m += [("k", 0x00); ("l", 0x01); ("m", 0x02)] });
```

The `+=` instruction overwrites any previous association.

The following removes key `"k"` in `m` of asset `0`:
```archetype
my_asset.add_update(0, { m -= ["k"] });
```

#### Partition

As for the `add` instruction, the `add_update` instruction is available for [partition](/docs/reference/types#partition<A>) field.

For example, the following instruction adds or updates the expiration date of mile `"#1"` of flyer `caller`:
```archetype
flyer[caller].miles.add_update("#1", { expiration := (now + 40d) })
```

See the [paritition](/docs/reference/instructions/asset#partition) section above for more information.

#### Aggregate

An [aggregate](/docs/reference/types#aggregate<A>) field does *not* provide the `add_update` instruction.

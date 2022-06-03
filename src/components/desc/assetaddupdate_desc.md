Adds a new asset or updates asset with key `k` in collection `A`:
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

#### Partition

As for the `add` instruction, the `add_update` instruction is available for [partition](/docs/reference/types#partition<A>) field.

For example, the following instruction adds or updates the expiration date of mile `"#1"` of flyer `caller`:
```archetype
flyer[caller].miles.add_update("#1", { expiration := (now + 40d) })
```

See the [paritition](/docs/reference/instructions/asset#partition) section above for more information.

#### Aggregate

An [aggregate](/docs/reference/types#aggregate<A>) field does *not* provide the `add_update` instruction.

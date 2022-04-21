Removes assets from collection `A` that verify predicate `p`.

For example, consider the following declaration:
```archetype
asset loan {
  id         : string;
  subscriber : address;
  principal  : tez;
  interest   : rational = 2%;
  creation   : date = now;
  time       : duration = 10w; /* 10 weeks */
}
```

The following instruction removes any expired loan:
```archetype
loan.removeif(the.creation + the.time < now);
```

The `the` keyword refers to the asset being evaluated; all asset fields are available in predicates.

This is equivalent to the following code:
```archetype
for k in loan do
 if loan[k].creation + loan[k].time < now then
    loan.remove(l)
done
```

:::info
As iteration is not available on big maps, `removeif` is not available for `asset to big_map` type.
:::

#### Partition

The `removeif` instruction is available for [partition](/docs/reference/types#partition<A>) fields.

For example, the following instruction removes expired miles for flyer `caller`:
```archetype
flyer[caller].miles.removeif(the.expiration < now);
```
See the [paritition](/docs/reference/instructions#partition) section above for more information.

The effect of the above instruction is to:
* remove all expired miles belonging to `caller`
* remove all references to these expired miles from `flyer[caller].miles`

:::info
`removeif` is not available if the partitioned asset is declared as `big_map`.
:::

#### Aggregate

The `removeif` instruction is available for [aggregate](/docs/reference/types#aggregate<A>) fields.

For example, the following instruction removes vehicles referenced by `caller` and whose number of doors is equal to `3`:
```archetype
driver[caller].drives.removeif(the.nbdoors = 3);
```

See the [Aggregate](/docs/reference/instructions#aggregate) section above for more information.

:::info
`removeif` is not available on aggregate fields if the aggregated asset is declared as `big_map`.
:::

#### Asset view

An [asset_view](/docs/reference/types#asset_view<A>) does *not* provide the `removeif` instruction.


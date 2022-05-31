Removes elements from container `A`, `A` being an asset collection, an [aggregate](/docs/asset#aggregate) or a [partition](/docs/asset#partition) field.

For example, to remove all [`loan`](/docs/reference/instructions/asset#aadda) assets:
```archetype
loan.remove_all();
```

:::info
As iteration is not available on big maps, `remove_all` is not available for `asset to big_map` type.
:::

#### Partition

The `remove_all` instruction on a [partition](/docs/reference/types#partition<A>) field removes all references in the partition field *and* also removes assets from the partiotioned asset collection.

For example, the following instruction removes all miles owned by `caller` [flyer](/docs/reference/instructions/asset#partition):
```archetype
flyer[caller].miles.remove_all();
```

The effect of above instruction is to:
* remove all miles from `mile` collection owner by `caller`
* remove all reference to these miles so that `flyer[caller].miles.count() = 0` stands true afterwards

:::info
Note that the above instruction is equivalent to [`remove_if(true)`](/docs/reference/instructions/asset#aremove_ifp) instruction because a partition *synchronizes* the existence of the reference towards the asset.
:::

#### Aggregate

The `remove_all` instruction on an [aggregate](/docs/reference/types#aggregate<A>) field removes all references in the aggregate fields.

For example, the following instruction removes all references from driver `caller` to [`vehicle`](/docs/reference/instructions/asset#aggregate) assets:
```archetype
driver[caller].drives.remove_all()
```

The only effect of above instruction is to empty the list of vehicles driven by driver `caller` so that `driver[caller].drives.count() = 0` stands true afterwards. The collection of vehicles is left unchanged.


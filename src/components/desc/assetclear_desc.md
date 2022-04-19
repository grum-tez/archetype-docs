Removes all assets from collection.

For example, to remove all *loan* assets:
```archetype
loan.clear();
```

See [add](/docs/reference/instructions#aadda) section above for more information.

:::info
As iteration is not available on big maps, `clear` is not available for `asset to big_map` type.
:::

#### Partition

The `clear` instruction on a [partition](/docs/reference/types#partition<A>) field removes all references in the partition field and also removes assets from the partiotioned asset collection.

For example, the following instruction removes all miles owned by `caller` flyer:
```archetype
flyer[caller].miles.clear();
```

The effect of above instruction is to:
* remove all miles from `mile` collection owner by `caller`
* remove all reference to these miles so that `flyer[caller].miles.count() = 0` stands true afterwards

See [partition](/docs/reference/instructions#partition) section above for more information.

:::info
`clear` is not available on partition fields if partitioned asset is declared as `big_map`.
:::

#### Aggregate

The `clear` instruction on an [aggregate](/docs/reference/types#aggregate<A>) field removes all references in the aggregate fields.

For example, the following instruction removes all references from driver `caller` to `vehicle` assets:
```archetype
driver[caller].drives.clear()
```

The only effect of above instruction is to empty the list of vehicles driven by driver `caller` so that `driver[caller].drives.count() = 0` stands true afterwards. The collection of vehicles is left unchanged.

See [aggregate](/docs/reference/instructions#aggregate) section above for more information.

#### View

The `clear` instruction on a [view](/docs/reference/types#view<A>) removes all assets referenced by the view.

For example, the following instruction removes vehicles with number of doors equal to 3:
```archetype
vehicle.select(the.nbdoors = 3).clear()
```

The view itself is left unchanged as a view is a *read-only* list of references to assets.

Note that the above instruction is equivalent to a [`removeif`](/docs/reference/instructions#aremoveifp) instruction.

:::info
`clear` is not available on view if referenced asset is declared as `big_map`.
:::

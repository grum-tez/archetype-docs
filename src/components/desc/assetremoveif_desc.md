Removes assets *referenced by* an [aggregate](/docs/asset#aggregate) or [partition](/docs/asset#partition) field `A` and that verify predicate `p`.

For example, consider the following declarations:
```archetype
asset vehicle identified by vin {
  vin      : string;
  nb_doors : nat
}

asset driver identified by id {
  id     : address;
  drives : aggregate<vehicle>
}
```

For example the following instruction removes all vehicles driven by driver `caller` with `nb_doors` equal to `0`:
```archetype
driver[caller].drives.remove_if(the.nb_doors = 0)
```

The `the` keyword refers to the asset being evaluated; all asset fields are available in predicates.

:::caution
When used on a [partition](/docs/asset#partition) field, references in the parititon field *are also removed* for consistency reason, as the partition ensures that any reference points to an existing asset.
:::


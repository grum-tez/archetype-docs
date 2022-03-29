Type of asset field to *reference* assets from another collection `A`, so that each asset from `A` is referenced by exactly one asset from this collection.

For example, field `drives` references assets from the `car` asset collection:
```archetype
asset car {
  vin     : string;
  nbdoors : nat = 0
}

asset driver {
  id     : address;
  drives : partition<car>
}
```

Notes:
* a `car` asset may only be added via the `drives` partition with for example:
```archetype
driver[a].drives.add({ vin : "1G1AF1F57A7192174" })
```
* straightforwardly adding in `car` collection fails at compilation
* two drivers cannot reference the same car

Creates an asset from identifier and data (key and value).

It is typically convenient when an asset data is provided as an entry point parameter.

Consider for example the following asset declaration:

```archetype
asset vehicle {
  vin          : string;
  nbrepairs    : nat  = 0;
  dateofrepair : date = now;
}
```

The `add_vehicle` entry point below provides a vehicle data as a record:

```archetype
entry add_vehicle(k : asset_key<vehicle>, d : asset_value<vehicle>) {
  vehicle.put(make_asset(k, d))
}
```

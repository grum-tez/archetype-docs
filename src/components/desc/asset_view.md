Read-only view on asset collection returned by asset methods: [`sort`](/docs/reference/expressions/asset#asortf) [`select`](/docs/reference/expressions/asset#aselectp) [`head`](/docs/reference/expressions/asset#aheadi--nat) [`tail`](/docs/reference/expressions/asset#ataili--nat)

Consider for example the following asset declaration:
```archetype
asset vehicle {
  vin: string;
  nbdoors : nat = 0
}
```

The asset view of vehicles with 5 doors is created with method `select`:
```archetype
const sedan = vehicle.select(the.nbdoors = 5)
```

It is possible to iterate on an `asset_view` with the [`for`](/docs/reference/instructions/control#for) instruction.

For example:
```archetype
for v in sedan do
 /* ... */
done
```

(See the *Related* section below for the `asset_view` API)
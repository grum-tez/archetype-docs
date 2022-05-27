---
sidebar_position: 2
---

# Storage


## Parameter

A contract parameter is a storage element whose value is set at deployment (origination) time. It is defined by an [identifier](/docs/reference/declarations/identifier) and a [type](/docs/reference/types). The list of parameters follows the contract's identifier between parenthesis and separated by comma.

For example:
```archetype
archetype escrow(seller : address, buyer : address)

/* ... */
```

The `seller` and `buyer` [addresses](/docs/reference/types#address) then need to be set at deployment time with the completium CLI's `deploy` command; for example:
```bash
completium-cli deploy escrow.arl --parameters '{ "seller" : "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb", "buyer" : "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6" }'
```

The value of a contract parameter may be modified by [assignement](/docs/reference/instructions/assignment) instructions in [entrypoints](/docs/reference/declarations/entrypoint).

## Variable

A contract variable is a storage element whose value is set at declaration time. It is declared with the `variable` keyword followed by an [identifier](/docs/reference/declarations/identifier), a [type](/docs/reference/types) and the initial value.

For example:
```archetype
variable counter : nat = 0
```

```archetype
variable admin_candidate : option<address> = none
```

The value of a storage variable may be modified by [assignement](/docs/reference/instructions/assignment) instructions in [entrypoints](/docs/reference/declarations/entrypoint).

## Asset

An [asset](/docs/asset) collection is declared with the `asset` keyword followed by the asset collection [identifier](/docs/reference/declarations/identifier) and the list of fields (identifier and type).

For example, the following declares the `vehicle` asset:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  release      : date;
  nbdoors      : nat;
}
```

### Asset key

By default, the first field serves as the asset key. Any comparable field of the asset may be declared as the asset key with the `identified by` modifier; hence the declaration above is equivalent to:
```archetype
asset vehicle identified by vin {
  vin          : string;
  /* ... */
}
```
Several fields may be declared to form the asset key; for example the `liquidity` asset is identified by two fields:
```archetype
asset liquidity identified by token_id owner {
  token_id : string;
  owner    : address;
  amount   : nat;
}
```

The key is then the [tuple](/docs/reference/types#tuple) of fields' value, which is in Michelson the right comb of pairs of values; for example, the expression to retrieve the amount of token `0` of `tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb` is:
```archetype
var a = liquidity[(0,tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb)].amount;
```

See access operator [`[]`](/docs/reference/expressions/asset#ak--asset_keyaf) for more information.

### Default value

It is possible to define a default value for an asset field; for example:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  release      : date    = now;
  nbdoors      : nat     = 5;
}
```

Fields with default value are not required when adding a new asset in collection; for example, the following instruction adds a new `vehicle` asset with release date equal to `now` and nbdoors equal to `5`:
```archetype
vehicle.add({ vin = "1G1AF1F57A7192174"; manufacturer = "Renault" })
```

See the [`add`](/docs/reference/instructions/asset#aadda) instruction for more information.

### Big map

The `to big_map` modifier compiles the collection as a [`big_map`](/docs/reference/types#big_map<K,%20V>).

For example:
```archetype
asset vehicle to big_map {
  vin          : string;
  /* ... */
}
```

### Iterable big map

The `to iterable_big_map` modifier compiles the collection as an [`iterable_big_map`](/docs/reference/types#iterable_big_map<K,%20V>).

For example:
```archetype
asset vehicle to iterable_big_map {
  vin          : string;
  /* ... */
}
```

### Initial collection

It is possible to specify the initial value of the asset collection at origination with the `initialized by` modifier followed by the collection literal: a set of asset definitions.

For example, the following declaration initializes the vehicle asset with 2 assets:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  release      : date;
  nbdoors      : nat;
} initialized by {
  { "1G1AF1F57A7192174"; "Renault"; 2021-06-28; 5 };
  { "JNKCV61E49M014581"; "Peugeot"; 2021-07-12; 3 }
}
```

The initial value of an asset collection is interpreted by the completium CLI's `deploy` command to set the initial storage Michelson value.

### Michelson representation

The asset collection is compiled to Michelson as a [map](/docs/reference/types#map<K,%20V>) (or [big_map](/docs/reference/types#big_map<K,%20V>)) of records (right comb of pairs of annotated data).

An asset with only one field is compiled to a Michelson [set](/docs/reference/types#set<T>).

For example, the declaration above is quasi equivalent to the following lower-level code:

```archetype
record vehicle_data {
  manufacturer : string;
  release      : date;
  nbdoors      : nat;
}

variable vehicle : map<string, vehicle_data> = [
  ("1G1AF1F57A7192174", { "Renault"; 2021-06-28; 5 });
  ("JNKCV61E49M014581", { "Peugeot"; 2021-07-12; 3 })
]
```

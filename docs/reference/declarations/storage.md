---
sidebar_position: 2
---

# Storage


## Contract parameter

A [contract parameter](/docs/reference/declarations/contract#parameters) is a storage element whose value is set at deployment (origination) time.

## Variable

A contract variable is a storage element whose value is set at declaration time. It is declared with the `variable` keyword followed by an [identifier](/docs/reference/declarations/identifier), a [type](/docs/reference/types) and the initial value.

For example:
```archetype
variable counter : nat = 0
```

```archetype
variable admin_candidate : option<address> = none
```

The value of a storage variable may be modified by [assignment](/docs/reference/instructions/assignment) instructions in [entrypoints](/docs/reference/declarations/entrypoint).

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

### Default field value

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

It is possible to specify the initial value of the asset collection at origination.

#### Inlined

Initialize the collection with the `initialized with` modifier followed by the collection literal: a set of asset definitions.

For example, the following declaration initializes the vehicle asset with 2 assets:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  release      : date;
  nbdoors      : nat;
} initialized with {
  { "1G1AF1F57A7192174"; "Renault"; 2021-06-28; 5 };
  { "JNKCV61E49M014581"; "Peugeot"; 2021-07-12; 3 }
}
```

The initial value of an asset collection is interpreted by the completium CLI's `deploy` command to set the initial storage Michelson value.

#### Constant parameter

It is also possible to parameter the initial collection value with a [constant parameter](/docs/reference/declarations/contract#constant):

```archetype
archetype sample_vehicle(const initial_collection : map<string, (string * date * nat)>)

asset vehicle {
  vin          : string;
  manufacturer : string;
  release      : date;
  nbdoors      : nat;
} initialized with initial_collection

```


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

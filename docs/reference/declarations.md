---
sidebar_position: 0
---

# Declarations

import { Grid } from '@mui/material';
import { keywords } from './keywords.js'

## Identifier

The identifier of a contract element ([parameter](/docs/reference/declarations#parameter), [variable](/docs/reference/declarations#variable), [entrypoint](/docs/reference/declarations#entrypoints), ...) is a string that starts with an alphabetic character (lower or upper case) followed by alphanumeric characters (lower or upper case) or underscores. That is to say that an identifier verifies the following regular expression:

`[A-Za-z][A-Za-z0-9_]*`

### Keywords

A keyword is an reserved identifier that cannot be used as identifier, unless it is prefixed by the `%` character.

For example, [`transfer`](/docs/reference/instructions#transfer) is the builtin instruction to call an external contract; in order to declare an entrypoint named `transfer`, prefix it with `%`:

```archetype
entry %transfer() {
  /* ... */
}
```

Below is the list of the language keywords.

<Grid container spacing={2}>
{ keywords.map((k,i) => {
    return <Grid item key={'kw'+i}><code>{k.id}</code></Grid>
}) }
</Grid>

## Contract

An archetype contract starts with the `archetype` keyword followed by a contract [identifier](/docs/reference/declarations#identifier).

For example:
```archetype
archetype escrow

/* ... */
```

## Storage

### Parameter

A contract parameter is a storage element whose value is set at deployment (origination) time. It is defined by an [identifier](/docs/reference/declarations#identifier) and a [type](/docs/reference/types). The list of parameters follows the contract's identifier between parenthesis and separated by comma.

For example:
```archetype
archetype escrow(seller : address, buyer : address)

/* ... */
```

The `seller` and `buyer` addresses then need to be set at deployment time with the completium CLI's `deploy` command; for example:
```bash
completium-cli deploy escrow.arl --parameters '{ "seller" : "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb", "buyer" : "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6" }'
```

The value of a contract parameter may be modified by [assignement](/docs/reference/instructions#assignment) instructions in [entrypoints](/docs/reference/declarations#entrypoints).

### Variable

A contract variable is a storage element whose value is set at declaration time. It is declared with the `variable` keyword followed by an [identifier](/docs/reference/declarations#identifier), a [type](/docs/reference/types) and the initial value.

For example:
```archetype
variable counter : nat = 0
```

```archetype
variable admin_candidate : option<address> = none
```

The value of a storage variable may be modified by [assignement](/docs/reference/instructions#assignment) instructions in [entrypoints](/docs/reference/declarations#entrypoints).

### Asset

An [asset](/docs/asset) collection is declared with the `asset` keyword followed by the asset collection [identifier](/docs/reference/declarations#identifier) and the list of fields (identifier and type).

For example, the following declares the `vehicle` asset:
```archetype
asset vehicle {
  vin          : string;
  manufacturer : string;
  release      : date;
  nbdoors      : nat;
}
```

#### Asset key

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

See access operator [`[]`](/docs/reference/expressions/asset#ak--pkeyaf) for more information.

#### Default value

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
vehicle.add({ vin : "1G1AF1F57A7192174"; manufacturer : "Renault" })
```

See the [`add`](/docs/reference/instructions#aadda) instruction for more information.

#### Big map

The `to big_map` modifier compiles the collection as a Michelson [big_map](/docs/reference/types#big_map<K,%20V>).

For example:
```archetype
asset vehicle to big_map {
  vin          : string;
  /* ... */
}
```

#### Initial collection

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

## Types

record

enum

states

event

## Inlined

constant

## Entrypoints

entry

transition from [to when {} with effect {}]+

getter

### Sections

refuse transfer

sourced by

called by

state is

require

failif

specification

effect

## Functions

function

## Views

view




---
sidebar_position: 1
sidebar_label: TS Types
toc_max_heading_level: 2
---
import Builtin from '@site/src/components/Builtin.js';
import TsType from "@site/src/components/TsType.js"
import { types, types_functions as F } from "./types.js"

# TS Types

This section presents types and functions exported by the [`@completium/archetype-ts-types`](https://www.npmjs.com/package/@completium/archetype-ts-types) package and used by contracts' bindings interface (storage, entry points, views).

## `A B`

### `Address`

<TsType data={types.address} />

### `annotated_mich_to_array(x, t)`

<Builtin data={F['annotated_mich_to_array']} />

### `Bls12_381_fr`

<TsType data={types.bls12_381_fr} />

### `Bls12_381_g1`

<TsType data={types.bls12_381_g1} />

### `Bls12_381_g2`

<TsType data={types.bls12_381_g2} />

### `Bytes`

<TsType data={types.bytes} />

### `bool_to_mich(v)`

<Builtin data={F['bool_to_mich']} />

## `C D`

### `Chain_id`

<TsType data={types.chain_id} />

### `CallParameter`

### `Chest`

<TsType data={types.chest} />

### `Chest_key`

<TsType data={types.chest_key} />

### `cmp_date(a, b)`

<Builtin data={F['cmp_date']} />


### `date_to_mich(v)`

<Builtin data={F[`date_to_mich`]} />

### `Duration`

<TsType data={types.duration} />

## `E F`

### `elt_to_mich(a, b)`

<Builtin data={F['elt_to_mich']} />

### `Entrypoint`

<TsType data={types.entrypoint} />

### `Enum`

<TsType data={types.enum} />

## `I J`

### `Int`

<TsType data={types.int} />

### `is_left(v)`

<Builtin data={F['is_left']} />

### `is_right(v)`

<Builtin data={F['is_right']} />

## `K L`

### `Key`

<TsType data={types.key} />

### `Key_hash`

<TsType data={types.key_hash} />

### `left_to_mich(v)`

<Builtin data={F['left_to_mich']} />

### `list_to_mich(l, toMich)`

<Builtin data={F['list_to_mich']} />

### `list_annots_to_mich_type(mt, annots)`

<Builtin data={F['list_annots_to_mich_type']} />

### `list_to_mich_type(mt)`

<Builtin data={F['list_to_mich_type']} />


## `M N`

### `mich_array_to_mich(l)`

<Builtin data={F['mich_array_to_mich']} />

### `mich_to_bool(x)`

<Builtin data={F['mich_to_bool']} />

### `mich_to_date(x)`

<Builtin data={F['mich_to_date']} />

### `mich_to_map(l, f)`

<Builtin data={F['mich_to_map']} />


### `Micheline`

Micheline refers here to the *JSON* format of a [Michelson](https://tezos.gitlab.io/active/michelson.html) literal. It is *in fine* the format used to interact with the Tezos blockchain: entry point parameters, contract storage and so on, are exchanged in Micheline format.

The goal of the [contract binding](/docs/tests/binding) is to provide a native TypeScript interface that translates to Micheline values. Hence in most cases, thanks to contract binding, you should not deal with Micheline values.

The type provided here is a full-featured Typescript implementation of a Micheline value, such that a Micheline-typed value is ensured to be a valid Micheline value.

### `MichelineType`

Micheline type refers here to the *JSON* format of a [Michelson](https://tezos.gitlab.io/active/michelson.html) literal's type.

The type provided here is a full-featured Typescript implementation of a Micheline type value, such that a MichelineType-typed value is ensured to be a valid Micheline type value.

### `Nat`

<TsType data={types.nat} />

## `O P`

### `Option`

<TsType data={types.option} />

### `option_annot_to_mich_type(a, annots)`

<Builtin data={F['option_annot_to_mich_type']} />

### `option_to_mich_type(a)`

<Builtin data={F['option_to_mich_type']} />

### `Or`

<TsType data={types.or} />

### `or_to_mich_type(l, r, a)`

<Builtin data={F['or_to_mich_type']} />

### `pair_to_mich(l)`

<Builtin data={F['or_to_mich_type']} />

### `pair_annot_to_mich_type(p, a, b, annots)`

<Builtin data={F['pair_annot_to_mich_type']} />

### `pair_array_to_mich_type(l, annots)`

<Builtin data={F['pair_array_to_mich_type']} />

### `pair_to_mich_type(p, a, b)`

<Builtin data={F['pair_to_mich_type']} />

### `prim_annot_to_mich_type(p, a)`

<Builtin data={F['prim_annot_to_mich_type']} />

### `prim_to_mich_type(p)`

<Builtin data={F['prim_to_mich_type']} />


## `Q R`

### `Rational`

<TsType data={types.rational} />

### `right_to_mich(v)`

<Builtin data={F['right_to_mich']} />


## `S T`

### `Sapling_state`

<TsType data={types.sapling_state} />

### `Sapling_transaction`

<TsType data={types.sapling_transaction} />

### `set_annot_to_mich_type(mt, annots)`

<Builtin data={F['set_annot_to_mich_type']} />

### `set_to_mich_type(mt)`

<Builtin data={F['set_to_mich_type']} />


### `Signature`

<TsType data={types.signature} />

### `string_cmp(a, b)`

<Builtin data={F['string_cmp']} />

### `Tez`

<TsType data={types.tez} />

### `Ticket`

<TsType data={types.ticket} />

### `ticket_annots_to_mich_type(mt, annots)`

<Builtin data={F['ticket_annots_to_mich_type']} />

### `ticket_to_mich_type(mt)`

<Builtin data={F['ticket_to_mich_type']} />

### `Tx_rollup_l2_address`

<TsType data={types.tx_rollup_l2_address} />

## `U V`

### `Unit`

<TsType data={types.unit} />

### `unit_to_mich()`

<Builtin data={F['unit_to_mich']} />


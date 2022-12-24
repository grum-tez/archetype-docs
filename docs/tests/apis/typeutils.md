---
sidebar_position: 1.5
sidebar_label: Types Utils
toc_max_heading_level: 2
---
import Builtin from '@site/src/components/Builtin.js';
import { types_functions as F } from './types.js';

# Type utils

This section presents functions exported by the [`@completium/archetype-ts-types`](https://www.npmjs.com/package/@completium/archetype-ts-types) package and used by contracts' bindings interface (storage, entry points, views).

## `A B`

### `annotated_mich_to_array(x, t)`

<Builtin data={F['annotated_mich_to_array']} />

### `bool_to_mich(v)`

<Builtin data={F['bool_to_mich']} />

## `C D`

### `cmp_date(a, b)`

<Builtin data={F['cmp_date']} />

## `E F`

### `elt_to_mich(a, b)`

<Builtin data={F['elt_to_mich']} />

## `I J`

### `is_left(v)`

<Builtin data={F['is_left']} />

### `is_right(v)`

<Builtin data={F['is_right']} />

## `K L`

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

### `mich_to_address(x)`

<Builtin data={F['mich_to_address']} />

### `mich_to_bls12_381_fr(x)`

<Builtin data={F['mich_to_bls12_381_fr']} />

### `mich_to_bls12_381_g1(x)`

<Builtin data={F['mich_to_bls12_381_g1']} />

### `mich_to_bls12_381_g2(x)`

<Builtin data={F['mich_to_bls12_381_g2']} />

### `mich_to_bool(x)`

<Builtin data={F['mich_to_bool']} />

### `mich_to_bytes(x)`

<Builtin data={F['mich_to_bytes']} />

### `mich_to_chain_id(x)`

<Builtin data={F['mich_to_chain_id']} />

### `mich_to_chest(x)`

<Builtin data={F['mich_to_chest']} />

### `mich_to_chest_key(x)`

<Builtin data={F['mich_to_chest_key']} />

### `mich_to_date(x)`

<Builtin data={F['mich_to_date']} />

### `mich_to_duration(x)`

<Builtin data={F['mich_to_duration']} />

### `mich_to_int(x)`

<Builtin data={F['mich_to_int']} />

### `mich_to_key(x)`

<Builtin data={F['mich_to_key']} />

### `mich_to_key_hash(x)`

<Builtin data={F['mich_to_key_hash']} />

### `mich_to_map(l, f)`

<Builtin data={F['mich_to_map']} />

### `mich_to_nat(x)`

<Builtin data={F['mich_to_nat']} />

### `mich_to_option(x, michTo)`

<Builtin data={F['mich_to_option']} />

### `mich_to_or(x, mtl, mtr)`

<Builtin data={F['mich_to_or']} />

### `mich_to_rational(x)`

<Builtin data={F['mich_to_rational']} />

### `mich_to_signature(x)`

<Builtin data={F['mich_to_signature']} />

### `mich_to_sapling_state(x)`

<Builtin data={F['mich_to_sapling_state']} />

### `mich_to_sapling_tansaction(x)`

<Builtin data={F['mich_to_sapling_transaction']} />

### `mich_to_tez(x)`

<Builtin data={F['mich_to_tez']} />

### `mich_to_ticket(x)`

<Builtin data={F['mich_to_ticket']} />

### `mich_to_tx_rollup_l2_address(x)`

<Builtin data={F['mich_to_tx_rollup_l2_address']} />

### `mich_to_unit(x)`

<Builtin data={F['mich_to_unit']} />

## `O P`

### `option_annot_to_mich_type(a, annots)`

<Builtin data={F['option_annot_to_mich_type']} />

### `option_to_mich_type(a)`

<Builtin data={F['option_to_mich_type']} />

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

### `right_to_mich(v)`

<Builtin data={F['right_to_mich']} />

## `S T`

### `set_annot_to_mich_type(mt, annots)`

<Builtin data={F['set_annot_to_mich_type']} />

### `set_to_mich(v, toMich)`

<Builtin data={F['set_to_mich']} />

### `set_to_mich_type(mt)`

<Builtin data={F['set_to_mich_type']} />

### `string_cmp(a, b)`

<Builtin data={F['string_cmp']} />

### `ticket_annots_to_mich_type(a, annots)`

<Builtin data={F['ticket_annots_to_mich_type']} />

### `ticket_to_mich_type(a)`

<Builtin data={F['ticket_to_mich_type']} />

## `U V`

### `unit_to_mich()`

<Builtin data={F['unit_to_mich']} />



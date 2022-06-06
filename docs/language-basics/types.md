---
sidebar_position: 1
---
import { Grid } from '@mui/material';
import ThemedDivider from '@site/src/components/Divider.js'

import { types } from './types.js';
import Api from '../../src/components/Api.js';

# Types

## Basic types

<Api title="" data={types.basic} />
<br/>

List of all [available types](/docs/reference/#types).

## Conversion

List of conversion functions

<Api title="" data={types.conversions} />
<br/>

## Properties

<Grid container>
<Grid xs={12} sm={12} md={3}>

#### Comparable

</Grid>

<Grid xs={12} sm={12} md={9}>

Comparable values have a natural *order* used to order elements in [containers](/docs/language-basics/container) (set and map's key). Comparison operators [`<`](/docs/reference/expressions/operators/arithmetic#a--b-9) [`<=`](/docs/reference/expressions/operators/arithmetic#a--b-10) [`>`](/docs/reference/expressions/operators/arithmetic#a--b-11) and [`>=`](/docs/reference/expressions/operators/arithmetic#a--b-12)  are available the order of two value.

All types are comparable except: [`big_map`](/docs/reference/types#big_map<K,%20V>) [`iterable_big_map`](/docs/reference/types#iterable_big_map<K,%20V>) [`bls12_381_fr`](/docs/reference/types#bls12_381_fr) [`bls12_381_g1`](/docs/reference/types#bls12_381_g1) [`bls12_381_g2`](/docs/reference/types#bls12_381_g2) [`contract`](/docs/reference/types#contract<T>) [`lambda`](/docs/reference/types#lambda<T,%20R>) [`list`](/docs/reference/types#list<T>) [`map`](/docs/reference/types#map<K,%20V>) [`operation`](/docs/reference/types#operation) [`sapling_state`](/docs/reference/types#sapling_state(n)) [`sapling_transaction`](/docs/reference/types#sapling_transaction(n)) [`set`](/docs/reference/types#set<T>) [`ticket`](/docs/reference/types#ticket<T>)

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>

<Grid xs={12} sm={12} md={3}>

#### Packable

</Grid>

<Grid xs={12} sm={12} md={9}>

A packable value can be *serialised* with [`pack`](/docs/reference/expressions/builtins#pack(o%20:%20T)) and deserialised with [`unpack`](/docs/reference/expressions/builtins#unpack<T>(b%20:%20bytes)).

All types are packable except: [`big_map`](/docs/reference/types#big_map<K,%20V>) [`iterable_big_map`](/docs/reference/types#iterable_big_map<K,%20V>) [`operation`](/docs/reference/types#operation) [`sapling_state`](/docs/reference/types#sapling_state(n)) [`ticket`](/docs/reference/types#ticket<T>)

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>

<Grid xs={12} sm={12} md={3}>

#### Passable

</Grid>
<Grid xs={12} sm={12} md={9}>

A passable value can be the parameter of an [entrypoint](/docs/reference/declarations/entrypoint), a [lambda](/docs/reference/types#lambda<T,%20R>) and (not inlined) [function](/docs/reference/declarations/function).

All types are passable except: [`operation`](/docs/reference/types#operation)

</Grid>
</Grid>

<ThemedDivider />

<Grid container style={{ marginTop: '18px' }}>

<Grid xs={12} sm={12} md={3}>

#### Storable

</Grid>
<Grid xs={12} sm={12} md={9}>

A storable value may be a contract's storage element.

All types are storable except: [`contract`](/docs/reference/types#contract<T>) [`operation`](/docs/reference/types#operation)

</Grid>

</Grid>


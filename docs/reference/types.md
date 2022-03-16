---
sidebar_position: 1
hide_table_of_contents: false
---

# Types

<!-- Custom component -->

import Type from "@site/src/components/Type.js";
import { types } from "./types.js";
import { MDXProvider } from "@mdx-js/react";
import NoH2 from "@site/src/components/NoH2.js";
import H3 from "@site/src/components/H3.js";

<MDXProvider components={{ h2: NoH2 }}>

## `A ... C`

<H3 value="address" />

<Type data={types["address"]} />

<H3 value="asset" />

<Type data={types["asset"]} />

<H3 value="big_map" />

<Type data={types["big_map"]} />

<H3 value="bls12_381_fr" />

<Type data={types["bls12_381_fr"]} />

<H3 value="bls12_381_g1" />

<Type data={types["bls12_381_g1"]} />

<H3 value="bls12_381_g2" />

<Type data={types["bls12_381_g2"]} />

<H3 value="bool" />

<Type data={types["bool"]} />

<H3 value="bytes" />

<Type data={types["bytes"]} />

<H3 value="chain_id" />

<Type data={types["chain_id"]} />

<H3 value="chest" />

<Type data={types["chest"]} />

<H3 value="chest_key" />

<Type data={types["chest_key"]} />

<H3 value="contract" />

<Type data={types["contract"]} />

## `D ... F`

<H3 value="date" />

<Type data={types["date"]} />

<H3 value="duration" />

<Type data={types["duration"]} />

<H3 value="enum" />

<Type data={types["enum"]} />

<H3 value="event" />

<Type data={types["event"]} />

## `G ... I`

<H3 value="int" />

<Type data={types["int"]} />

## `J ... L`

<H3 value="key" />

<Type data={types["key"]} />

<H3 value="key_hash" />

<Type data={types["key_hash"]} />

<H3 value="lambda" />

<Type data={types["lambda"]} />

<H3 value="list<T>" />

<Type data={types["list"]} />

## `M ... O`

<H3 value="map<K, V>" />

<Type data={types["map"]} />

<H3 value="nat" />

<Type data={types["nat"]} />

<H3 value="never" />

<Type data={types["never"]} />

<H3 value="operation" />

<Type data={types["operation"]} />

<H3 value="option<T>" />

<Type data={types["option"]} />

<H3 value="or<T1, T2>" />

<Type data={types["or"]} />

## `P ... R`

<H3 value="rational" />

<Type data={types["rational"]} />

<H3 value="record" />

<Type data={types["record"]} />

## `S ... U`

<H3 value="sapling_state(n)" />

<Type data={types["sapling_state"]} />

<H3 value="sapling_transaction(n)" />

<Type data={types["sapling_transaction"]} />

<H3 value="set" />

<Type data={types["set"]} />

<H3 value="signature" />

<Type data={types["signature"]} />

<H3 value="string" />

<Type data={types["string"]} />

<H3 value="tez" />

<Type data={types["tez"]} />

<H3 value="ticket<T>" />

<Type data={types["ticket"]} />

<H3 value="tuple" />

<Type data={types["tuple"]} />

<H3 value="unit" />

<Type data={types["unit"]} />

</MDXProvider>

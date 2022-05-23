---
sidebar_position: 2
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

## `A B C`

<H3 page="types" value="address" />

<Type data={types["address"]} />

<H3 page="types" value="aggregate<A>" />

<Type data={types["aggregate"]} />

<H3 page="types" value="asset_key<A>" />

<Type data={types["asset_key"]} />

<H3 page="types" value="asset_value<A>" />

<Type data={types["asset_value"]} />

<H3 page="types" value="asset_view<A>" />

<Type data={types["asset_view"]} />

<H3 page="types" value="big_map<K, V>" />

<Type data={types["big_map"]} />

<H3 page="types" value="bls12_381_fr" />

<Type data={types["bls12_381_fr"]} />

<H3 page="types" value="bls12_381_g1" />

<Type data={types["bls12_381_g1"]} />

<H3 page="types" value="bls12_381_g2" />

<Type data={types["bls12_381_g2"]} />

<H3 page="types" value="bool" />

<Type data={types["bool"]} />

<H3 page="types" value="bytes" />

<Type data={types["bytes"]} />

<H3 page="types" value="chain_id" />

<Type data={types["chain_id"]} />

<H3 page="types" value="chest" />

<Type data={types["chest"]} />

<H3 page="types" value="chest_key" />

<Type data={types["chest_key"]} />

<H3 page="types" value="contract" />

<Type data={types["contract"]} />

## `D E F`

<H3 page="types" value="date" />

<Type data={types["date"]} />

<H3 page="types" value="duration" />

<Type data={types["duration"]} />

<H3 page="types" value="enum" />

<Type data={types["enum"]} />

<H3 page="types" value="event" />

<Type data={types["event"]} />

## `G H I`

<H3 page="types" value="int" />

<Type data={types["int"]} />

<H3 page="types" value="iterable_big_map<K, V>" />

<Type data={types["iterable_big_map"]} />

## `J K L`

<H3 page="types" value="key" />

<Type data={types["key"]} />

<H3 page="types" value="key_hash" />

<Type data={types["key_hash"]} />

<H3 page="types" value="lambda" />

<Type data={types["lambda"]} />

<H3 page="types" value="list<T>" />

<Type data={types["list"]} />

## `M N O`

<H3 page="types" value="map<K, V>" />

<Type data={types["map"]} />

<H3 page="types" value="nat" />

<Type data={types["nat"]} />

<H3 page="types" value="never" />

<Type data={types["never"]} />

<H3 page="types" value="operation" />

<Type data={types["operation"]} />

<H3 page="types" value="option<T>" />

<Type data={types["option"]} />

<H3 page="types" value="or<T1, T2>" />

<Type data={types["or"]} />

## `P Q R`

<H3 page="types" value="partition<A>" />

<Type data={types["partition"]} />

<H3 page="types" value="rational" />

<Type data={types["rational"]} />

<H3 page="types" value="record" />

<Type data={types["record"]} />

## `S T U`

<H3 page="types" value="sapling_state(n)" />

<Type data={types["sapling_state"]} />

<H3 page="types" value="sapling_transaction(n)" />

<Type data={types["sapling_transaction"]} />

<H3 page="types" value="set<T>" />

<Type data={types["set"]} />

<H3 page="types" value="signature" />

<Type data={types["signature"]} />

<H3 page="types" value="string" />

<Type data={types["string"]} />

<H3 page="types" value="tez" />

<Type data={types["tez"]} />

<H3 page="types" value="ticket<T>" />

<Type data={types["ticket"]} />

<H3 page="types" value="tuple" />

<Type data={types["tuple"]} />

<H3 page="types" value="unit" />

<Type data={types["unit"]} />

</MDXProvider>

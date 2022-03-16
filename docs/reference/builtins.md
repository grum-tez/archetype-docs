---
sidebar_position: 4
---

# Builtins

import Builtin from '@site/src/components/Builtin.js';
import { builtins } from './builtins.js';
import { MDXProvider } from "@mdx-js/react";
import NoH2 from "@site/src/components/NoH2.js";
import H3 from "@site/src/components/H3.js";

<MDXProvider components={{ h2: NoH2 }}>

## `A ... C`

<H3 value="blake2b(b : bytes)" />

<Builtin data={builtins['blake2b']} />

<H3 value="callview<T>(a : address, id : string, arg : X)"/>

<Builtin data={builtins['callview']} />

<H3 value="check_signature(k : key, s : signature, b : bytes)" />

<Builtin data={builtins['check_signature']} />

<H3 value="contract_address(c : contract<T>)" />

<Builtin data={builtins['contract_address']} />

<H3 value="create_ticket(s : T, n : nat)" />

<Builtin data={builtins['create_ticket']} />

## `G ... I`

<H3 value="hash_key(k : key)" />

<Builtin data={builtins['hash_key']} />

<H3 value="implicit_account(pkh : key_hash)" />

<Builtin data={builtins['implicit_account']} />

## `J ... L`

<H3 value="join_tickets(t1 : ticket<T>, t2 : ticket<T>)" />

<Builtin data={builtins['join_tickets']} />

<H3 value="keccak(b : bytes)" />

<Builtin data={builtins['keccak']} />

<H3 value="key_address(k : key)" />

<Builtin data={builtins['key_address']} />

## `M ... 0`

<H3 value="mkoperation(a : tez, c : contract<T>, arg : T)" />

<Builtin data={builtins['mkoperation']} />

<H3 value="open_chest(k : chest_key, c : chest, t : nat)" />

<Builtin data={builtins['open_chest']} />

<H3 value="mutez_to_nat(v : tez)" />

<Builtin data={builtins['mutez_to_nat']} />

<H3 value="date_from_timestamp(i : int)" />

<Builtin data={builtins['date_from_timestamp']} />

<H3 value="opt_get(o : option<T>)" />

<Builtin data={builtins['opt_get']} />

## `P ... R`

<H3 value="pairing_check(l : list<bls12_381_g1 * bls12_381_g2>)" />

<Builtin data={builtins['pairing_check']} />

<H3 value="read_ticket(t : ticket<T>)" />

<Builtin data={builtins['read_ticket']} />

## `S ... U`

<H3 value="sapling_empty_state(k : key_hash)" />

<Builtin data={builtins['sapling_empty_state']} />

<H3 value="sapling_verify_update(s : sapling_state(n), t : sapling_transaction(n))" />

<Builtin data={builtins['sapling_verify_update']} />

<H3 value="sha256(b : bytes)" />

<Builtin data={builtins['sha256']} />

<H3 value="sha3(b : bytes)" />

<Builtin data={builtins['sha3']} />

<H3 value="sha512(b : bytes)" />

<Builtin data={builtins['sha512']} />

<H3 value="split_ticket(t : ticket<T>, n1 : nat, n2 : nat)" />

<Builtin data={builtins['split_ticket']} />

## `V ... X`

<H3 value="voting_power(k : key_hash)" />

<Builtin data={builtins['voting_power']} />














</MDXProvider>
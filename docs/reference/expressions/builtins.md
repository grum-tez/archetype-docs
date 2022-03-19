---
sidebar_position: 5
---

# Builtins

import Builtin from '@site/src/components/Builtin.js';
import { builtins } from './builtins.js';
import { MDXProvider } from "@mdx-js/react";
import NoH2 from "@site/src/components/NoH2.js";
import H3 from "@site/src/components/H3.js";

<MDXProvider components={{ h2: NoH2 }}>

## `A B C`

<H3 page="builtins" value="address_to_contract(a : address)" />

<Builtin data={builtins['addresscontract']} />

<H3 page="builtins" value="blake2b(b : bytes)" />

<Builtin data={builtins['blake2b']} />

<H3 page="builtins" value="callview<T>(a : address, id : string, arg : X)"/>

<Builtin data={builtins['callview']} />

<H3 page="builtins" value="check_signature(k : key, s : signature, b : bytes)" />

<Builtin data={builtins['check_signature']} />

<H3 page="builtins" value="contract_address(c : contract<T>)" />

<Builtin data={builtins['contract_address']} />

<H3 page="builtins" value="create_ticket(s : T, n : nat)" />

<Builtin data={builtins['create_ticket']} />

## `G H I`

<H3 page="builtins" value="hash_key(k : key)" />

<Builtin data={builtins['hash_key']} />

<H3 page="builtins" value="implicit_account(pkh : key_hash)" />

<Builtin data={builtins['implicit_account']} />

## `J K L`

<H3 page="builtins" value="join_tickets(t1 : ticket<T>, t2 : ticket<T>)" />

<Builtin data={builtins['join_tickets']} />

<H3 page="builtins" value="keccak(b : bytes)" />

<Builtin data={builtins['keccak']} />

<H3 page="builtins" value="key_address(k : key)" />

<Builtin data={builtins['key_address']} />

## `M N O`

<H3 page="builtins" value="mkoperation(a : tez, c : contract<T>, arg : T)" />

<Builtin data={builtins['mkoperation']} />

<H3 page="builtins" value="open_chest(k : chest_key, c : chest, t : nat)" />

<Builtin data={builtins['open_chest']} />

<H3 page="builtins" value="mutez_to_nat(v : tez)" />

<Builtin data={builtins['mutez_to_nat']} />

<H3 page="builtins" value="date_from_timestamp(i : int)" />

<Builtin data={builtins['date_from_timestamp']} />

<H3 page="builtins" value="opt_get(o : option<T>)" />

<Builtin data={builtins['opt_get']} />

## `P Q R`

<H3 page="builtins" value="pairing_check(l : list<bls12_381_g1 * bls12_381_g2>)" />

<Builtin data={builtins['pairing_check']} />

<H3 page="builtins" value="read_ticket(t : ticket<T>)" />

<Builtin data={builtins['read_ticket']} />

<H3 page="builtins" value="require_some(o : option<T>, s : S)" />

<Builtin data={builtins['requiresome']} />

## `S T U`

<H3 page="builtins" value="sapling_empty_state(k : key_hash)" />

<Builtin data={builtins['sapling_empty_state']} />

<H3 page="builtins" value="sapling_verify_update">
    sapling_verify_update(<br/>&nbsp;&nbsp;s : sapling_state(n),<br/>&nbsp;&nbsp;t : sapling_transaction(n)<br/>)
</H3>

<Builtin data={builtins['sapling_verify_update']} />

<H3 page="builtins" value="set_delegate(opkh : option<key_hash>)" />

<Builtin data={builtins['setdelegate']} />

<H3 page="builtins" value="sha256(b : bytes)" />

<Builtin data={builtins['sha256']} />

<H3 page="builtins" value="sha3(b : bytes)" />

<Builtin data={builtins['sha3']} />

<H3 page="builtins" value="sha512(b : bytes)" />

<Builtin data={builtins['sha512']} />

<H3 page="builtins" value="split_ticket(t : ticket<T>, n1 : nat, n2 : nat)" />

<Builtin data={builtins['split_ticket']} />

## `V W X`

<H3 page="builtins" value="voting_power(k : key_hash)" />

<Builtin data={builtins['voting_power']} />














</MDXProvider>
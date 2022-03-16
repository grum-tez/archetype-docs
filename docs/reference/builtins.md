---
sidebar_position: 4
---

# Builtins

import Builtin from '@site/src/components/Builtin.js';
import { builtins } from './builtins.js';

### `callview<T>(a : address, id : string, arg : X)`

<Builtin data={builtins['callview']} />

### `mkoperation(a : tez, c : contract<T>, arg : T)`

<Builtin data={builtins['mkoperation']} />

### `blake2b(b : bytes)`

<Builtin data={builtins['blake2b']} />

### `sha256(b : bytes)`

<Builtin data={builtins['sha256']} />

### `sha512(b : bytes)`

<Builtin data={builtins['sha512']} />

### `sha3(b : bytes)`

<Builtin data={builtins['sha3']} />

### `keccak(b : bytes)`

<Builtin data={builtins['keccak']} />

### `hash_key(k : key)`

<Builtin data={builtins['hash_key']} />

### `implicit_account(pkh : key_hash)`

<Builtin data={builtins['implicit_account']} />

### `key_address(k : key)`

<Builtin data={builtins['key_address']} />

### `contract_address(c : contract<T>)`

<Builtin data={builtins['contract_address']} />

### `check_signature(k : key, s : signature, b : bytes)`

<Builtin data={builtins['check_signature']} />

### `voting_power(k : key_hash)`

<Builtin data={builtins['voting_power']} />

### `create_ticket(s : T, n : nat)`

<Builtin data={builtins['create_ticket']} />

### `read_ticket(t : ticket<T>)`

<Builtin data={builtins['read_ticket']} />

### `split_ticket(t : ticket<T>, n1 : nat, n2 : nat)`

<Builtin data={builtins['split_ticket']} />

### `join_tickets(t1 : ticket<T>, t2 : ticket<T>)`

<Builtin data={builtins['join_tickets']} />

### `sapling_empty_state(n : nat)`

<Builtin data={builtins['sapling_empty_state']} />

### `sapling_verify_update(s : sapling_state(n), t : sapling_transaction(n))`

<Builtin data={builtins['sapling_verify_update']} />

### `pairing_check(l : list<bls12_381_g1 * bls12_381_g2>)`

<Builtin data={builtins['pairing_check']} />

### `open_chest(k : chest_key, c : chest, t : nat)`

<Builtin data={builtins['open_chest']} />

### `mutez_to_nat(v : tez)`

<Builtin data={builtins['mutez_to_nat']} />

### `date_from_timestamp(i : int)`

<Builtin data={builtins['date_from_timestamp']} />

### `opt_get(o : option<T>)`

<Builtin data={builtins['opt_get']} />


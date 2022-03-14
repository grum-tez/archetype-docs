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

### `opt_get(o : option<T>)`

<Builtin data={builtins['opt_get']} />


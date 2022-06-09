---
sidebar_position: 14
---
import { elliptic } from './elliptic.js';
import { hash } from './hash.js';
import { sapling } from './sapling.js';
import { sign } from './sign.js';
import { timelock } from './timelock.js';
import Api from '../../src/components/Api.js';

# Cryptography

## Hash

A hash *function* maps an [`bytes`](/docs/reference/types#bytes) value of arbitrary length to a fixed-length [`bytes`](/docs/reference/types#bytes) value, such that it is not possible to compute the input from a hashed value.

<Api title="Builtins" data={hash} />
<br/>

## Signature

An *asymetric* signature pattern allows the *off-chain* signing of some data with the the secret key, and check *on-chain* the identity of the signer with its public [key](/docs/reference/types#key).

<Api title="Types" data={sign.types} />
<br/>
<Api title="Builtins" data={sign.builtins} />
<br/>

## Timelock

A *timelocked* value is encrypted strongly enough so that it will take more than a certain amount of time to crack it with a powerful computer, but weakly enough so that given some more time, this computer will manage to crack it. That is to say that, beyond a certain amount of time, a timelocked value may be considered public.

Learn more with this contract [example](https://opentezos.com/archetype/raffle-example/raffle-contract).

<Api title="Types" data={timelock.types} />
<br/>
<Api title="Builtins" data={timelock.builtins} />
<br/>

## Sapling

Sapling allows *anonymity* when transacting with fungible tokens.

> Sapling requires a set of additional keys, similar to the public and private keys of your Tezos blockchain wallet. There is the viewing key and sending key. The viewing key is similar to the public key, where it allows you to see private transactions sent in and out. *[more](https://medium.com/tezos-israel/sapling-and-shielded-transactions-on-tezos-35b9d53103da)* ...

<Api title="Types" data={sapling.types} />
<br/>
<Api title="Builtins" data={sapling.builtins} />
<br/>

## Elliptic curves

Elliptic curves provide a fast and efficient asymetric encryption pattern.

<Api title="Types" data={elliptic.types} />
<br/>
<Api title="Builtins" data={elliptic.builtins} />
<br/>
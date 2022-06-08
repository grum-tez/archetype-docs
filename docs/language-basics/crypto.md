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

<Api title="Builtins" data={hash} />
<br/>

## Signature

<Api title="Builtins" data={sign} />
<br/>

## Timelock

<Api title="Types" data={timelock.types} />
<br/>
<Api title="Builtins" data={timelock.builtins} />
<br/>

## Sapling

<Api title="Types" data={sapling.types} />
<br/>
<Api title="Builtins" data={sapling.builtins} />
<br/>

## Elliptic curves

<Api title="Types" data={elliptic.types} />
<br/>
<Api title="Builtins" data={elliptic.builtins} />
<br/>
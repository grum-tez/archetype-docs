---
sidebar_position: 3.6
---

import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Permits

Implements [TZIP-17](https://tzip.tezosagora.org/proposal/tzip-17/) norm for fee-less operations.

<TemplateInfo data={templates.permits.info} />

## Errors

```archetype
constant EXPIRY_TOO_BIG        : string = "EXPIRY_TOO_BIG"
constant PERMIT_USER_NOT_FOUND : string = "PERMIT_USER_NOT_FOUND"
constant PERMIT_NOT_FOUND      : string = "PERMIT_NOT_FOUND"
constant MISSIGNED             : string = "MISSIGNED"
constant PERMIT_EXPIRED        : string = "PERMIT_EXPIRED"
```
[`constant`](/docs/reference/declarations/inlined) [`string`](/docs/reference/types#string)

## Storage

### `consumer`

<Constant data={templates.permits.consumer} />

### `permits`

<Constant data={templates.permits.permits} />

### `default_expiry`

<Constant data={templates.permits.default_expiry} />

## Functions

### `get_default_expiry(addr)`

<Builtin data={templates.permits.get_default_expiry} />

### `get_expiry(addr, permitkey)`

<Builtin data={templates.permits.get_expiry} />

### `has_expired(userp, expiry)`

<Builtin data={templates.permits.has_expired} />

## Entrypoints

### `manage_consumer(op)`

<Builtin data={templates.permits.manage_consumer} />

### `set_expiry(v, p)`

<Builtin data={templates.permits.set_expiry} />

### `set_default_expiry(v)`

<Builtin data={templates.permits.set_default_expiry} />

### `permit(pk, sig, data)`

<Builtin data={templates.permits.permit} />

### `consume(from, data, err)`

<Builtin data={templates.permits.consume_permit} />

### `check(signer, sig, data)`

<Builtin data={templates.permits.check_permit} />
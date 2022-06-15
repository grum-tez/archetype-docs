---
sidebar_position: 3.6
---

import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Permits

Implements [TZIP-17](https://tzip.tezosagora.org/proposal/tzip-17/) norm for fee-less operations.

:::info
It is required to copy this template in the created contract to benefit from the permits pattern.
:::

<TemplateInfo data={templates.permits.info} />

## Storage

### `permits`

<Constant data={templates.permits.permits} />

### `default_expiry`

<Constant data={templates.permits.default_expiry} />

## Functions

### `get_default_expiry(addr)`

### `get_expiry(addr, permitkey)`

### `has_expired(userp, expiry)`

## Entrypoints

### `set_expiry(v, p)`

### `set_default_expiry(v)`

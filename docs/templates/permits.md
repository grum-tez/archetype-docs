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

<p/>

# Disclaimers

### Permits

User permits are stored as a (blake2b) hash of the transaction data (e.g. source, destination, token_id, and amount for a FA2 token transfer). These hashes of registered permits may be guessed e.g. based on previously performed transactions and the corresponding permit can be consumed.
Thus, users of permits have to be aware that they should never register a permit of a transaction which they actually do not want to be executed. Users of permits have to think about registered permits as when these transactions were already executed.

### Counter

The permit implementation is using a counter to protect against signature reply attacks. Thus, each permit and one-step permit using the check entrypoint have to use the counter value in order to create the hash which is signed by the user.

However, due to this counter variable permits have also to be strictly sent in the order of expected counter values to the permit contract. If not sent in this order, the permit is rejected and permits have to be resend.

### Gas exhaustion

Admin of these template contracts should get familiar with the smart contract code and assess whether the template is appropriate for their purpose. With regards to the template please especially note that:
* only a few consumer should be registered as “consumers”, since the more consumer you registered the more gas is used with each call. In the case the list of consumers gets huge, the entire contract could even break.
* this template limits the size of metadata. This limit is basically given by the blockchain’s constant `max_operation_data_length`

## Errors

```archetype
constant EXPIRY_TOO_BIG        : string = "EXPIRY_TOO_BIG"
constant USER_PERMIT_NOT_FOUND : string = "USER_PERMIT_NOT_FOUND"
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
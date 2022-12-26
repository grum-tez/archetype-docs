
import { dapp, event } from './api.js'
import Builtin from '@site/src/components/Builtin.js';

# Packages API

The Dapp relies on 3 packages:
* [`@completium/archetype-ts-types`](https://www.npmjs.com/package/@completium/archetype-ts-types) provides TypeScript types used by contract binding
* [`@completium/dapp-ts`](https://www.npmjs.com/package/@completium/dapp-ts) provides generic functions used by contract binding
* [`@completium/event-listener`](https://www.npmjs.com/package/@completium/event-listener) provides a client-side event indexer

## `@completium/archetype-ts-types`

The `@completium/archetype-ts-types` package is presented [here](/docs/tests/apis/#completiumarchetype-ts-types).

## `@completium/dapp-ts`

### `call(c, e, a, p)`

<Builtin data={dapp['call']} />

### `deploy(path, params, p)`

<Builtin data={dapp['deploy']} />

### `exec_batch(cps, p)`

<Builtin data={dapp['exec_batch']} />

### `exec_getter(c, e, a, p)`

<Builtin data={dapp['exec_getter']} />

### `exec_view(c, e, a, p)`

<Builtin data={dapp['exec_view']} />

### `get_balance()`

<Builtin data={dapp['get_balance']} />

### `get_big_map_value(id, key, kv, kt)`

<Builtin data={dapp['get_big_map_value']} />

### `get_call_param(c, e, a, p)`

<Builtin data={dapp['get_call_param']} />

### `get_storage(a)`

<Builtin data={dapp['get_storage']} />

### `set_binder_tezos_toolkit(ttk)`

<Builtin data={dapp['set_binder_tezos_toolkit']} />

## `@completium/event-listener`

### `run_listener(o)`

<Builtin data={event['run_listener']} />

### `stop_listener()`

<Builtin data={event['stop_listener']} />



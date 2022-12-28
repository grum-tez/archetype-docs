---
sidebar_position: 2
sidebar_label: Experiment
toc_max_heading_level: 2
---
import Builtin from '@site/src/components/Builtin.js';
import TsType from "@site/src/components/TsType.js"
import { experiment, exp_types } from './types.js';

# Experiment

This section presents types and functions exported by the [`@completium/experiment-ts`](https://www.npmjs.com/package/@completium/experiment-ts) package and used by contracts' bindings interface (storage, entry points, views).

## `A B`

### `Account`

<TsType data={exp_types.account} />

### `blake2b(b)`

<Builtin data={experiment['blake2b']} />

## `C D`

### `call(c, e, a, p)`

<Builtin data={experiment['call']} />

### `CallResult`

<TsType data={exp_types.callresult} />

### `delay_mockup_now_by_day(v)`

<Builtin data={experiment['delay_mockup_now_by_day']} />

### `delay_mockup_now_by_minute(v)`

<Builtin data={experiment['delay_mockup_now_by_minute']} />

### `delay_mockup_now_by_hour(v)`

<Builtin data={experiment['delay_mockup_now_by_hour']} />

### `delay_mockup_now_by_second(v)`

<Builtin data={experiment['delay_mockup_now_by_second']} />

### `delay_mockup_now_by_week(v)`

<Builtin data={experiment['delay_mockup_now_by_week']} />

### `deploy(path, params, p)`

<Builtin data={experiment['deploy']} />

### `deploy_from_json(name, code, storage, p)`

<Builtin data={experiment['deploy_from_json']} />

### `deploy_callback(name, code, mt, p)`

<Builtin data={experiment['deploy_callback']} />

## `E F`

### `exec_batch(cps, p)`

<Builtin data={experiment['exec_batch']} />

### `exec_getter(c, e, a, p)`

<Builtin data={experiment['exec_getter']} />

### `exec_view(c, e, a, p)`

<Builtin data={experiment['exec_view']} />

### `expect_to_fail(f, e)`

<Builtin data={experiment['expect_to_fail']} />

### `expr_micheline_to_json(i)`

<Builtin data={experiment['expr_micheline_to_json']} />

## `G H`

### `get_account(a)`

<Builtin data={experiment['get_account']} />

### `get_balance()`

<Builtin data={experiment['get_balance']} />

### `get_big_map_value(id, key, kv, kt)`

<Builtin data={experiment['get_big_map_value']} />

### `get_call_param(c, e, a, p)`

<Builtin data={experiment['get_call_param']} />

### `get_callback_view(ca, mt)`

<Builtin data={experiment['get_callback_view']} />

### `get_chain_id()`

<Builtin data={experiment['get_chain_id']} />

### `get_endpoint()`

<Builtin data={experiment['get_endpoint']} />

### `get_mockup_now()`

<Builtin data={experiment['get_mockup_now']} />

### `get_raw_storage(a)`

<Builtin data={experiment['get_raw_storage']} />

### `get_storage(a)`

<Builtin data={experiment['get_storage']} />

## `I J`

### `is_mockup()`

<Builtin data={experiment['is_mockup']} />

### `json_micheline_to_expr(i)`

<Builtin data={experiment['json_micheline_to_expr']} />

## `O P`

### `originate(path, storage, p)`

<Builtin data={experiment['originate']} />

### `pack(o, t)`

<Builtin data={experiment['pack']} />

## `S T`

### `set_endpoint(e)`

<Builtin data={experiment['set_endpoint']} />

### `set_mockup()`

<Builtin data={experiment['set_mockup']} />

### `set_mockup_chain_id(c)`

<Builtin data={experiment['set_mockup_chain_id']} />

### `set_mockup_now(d)`

<Builtin data={experiment['set_mockup_now']} />

### `set_quiet(b)`

<Builtin data={experiment['set_quiet']} />

### `sign(a, b)`

<Builtin data={experiment['sign']} />

### `transfer(f, a, t)`

<Builtin data={experiment['transfer']} />

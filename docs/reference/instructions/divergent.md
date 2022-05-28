---
sidebar_position: 4
---

# Divergent

import { divergent } from '../divergent.js';
import Builtin from '@site/src/components/Builtin.js';

A divergent instruction is an instruction that *fails*. The effect of a failing instruction is to cancel all modifications (storage, operations) executed by the entrypoint so far. Hence a failing operation does **not** change anything on the contract state.

The only effect of a failing injected operation is that the operation fee is spent and not paid back. That's why the correct process is to *simulate* (dry run) the entrypoint before injection to make sure the entrypoint does not fail (as wallets do for example).

### `fail(e)`

<Builtin data={divergent['fail']} />

### `do_require(t, e)`

<Builtin data={divergent['do_require']} />

### `do_fail_if(t, e)`

<Builtin data={divergent['do_fail_if']} />


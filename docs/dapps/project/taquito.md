---
sidebar_position: 2
sidebar_label: Taquito.tsx
---

# Taquito.tsx

```
└── src
    └── store
        ├── Taquito.tsx
```

The `Taquito` [constate](/docs/dapps/project/#store) context provides Taquito's Tezos Toolkit to all components. It is created once at context creation.

## Code

:::info
The code below can be copied/pasted in your project as is (*constate* can coexist with *redux*)
:::

```tsx
import { TezosToolkit } from '@taquito/taquito';
import { useState } from 'react';

import constate from 'constate';
import { useEndpoint } from './Settings';

export const [
  TaquitoProvider,
  useTezosToolkit
] = constate(
  () => {
    const endpoint = useEndpoint()
    const [taquito] = useState(() : { tezos : TezosToolkit } => ({
      ttk: new TezosToolkit(endpoint),
    }));
    return taquito;
  },
  (v) => v.ttk,
);
```

## Usage

When a component needs to use Taquito's Tezos Toolkit, it retrieves it with the `useTezosToolkit` hook:

```tsx
import { useTezosToolkit } from '../store/Taquito'

const ttk = useTezosToolkit()
const balance = await ttk.tz.getBalance('tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P');
```
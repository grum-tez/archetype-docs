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

The `Taquito` [constate](/docs/dapps/dappuiproject/#store) hooks provides the Taquito's Tezos Toolkit to all components. It is created once at hook creation and stored in the hook's state.

## Code

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

const tkk = useTezosToolkit()
```
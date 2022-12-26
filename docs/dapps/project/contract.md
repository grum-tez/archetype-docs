---
sidebar_position: 4
sidebar_label: Contract.tsx
---

# Contract.tsx

```
└── src
    └── contexts
        ├── Contract.tsx
```

This `Contract` context template provides the contract binding to components.

## Code

```tsx
import { set_binder_tezos_toolkit } from '@completium/dapp-ts';
import constate from 'constate';
import { useState } from 'react';

import { FIXME as Contract } from '../bindings/FIXME'; // replace FIXME
import { useContractAddress } from './Settings';
import { useTezosToolkit } from './Taquito';

export const [
  ContractProvider,
  useContract
] = constate(
  () => {
    const tezos = useTezosToolkit()
    const address = useContractAddress()
    const [contract] = useState({
      contract: new Contract(address),
    });
    set_binder_tezos_toolkit(tezos)
    return contract;
  },
  (v) => v.contract
)
```
Comments:
* replace `FIXME` with contract name; for example in the [Poll DApp](/docs/dapps/example/) example:
```ts
import { Poll as Contract } from '../bindings/poll';
```
* `set_binder_tezos_toolkit` provides `dapp-ts` package with the Tezos toolkit

## Usage

```ts
import { useContract } from '../store/contract'

const contract = useContract()
```

See example DApp's detailed [contract integration](/docs/dapps/example/interaction) explanations.

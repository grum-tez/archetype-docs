---
sidebar_position: 1
sidebar_label: Settings.tsx
---

# Settings.tsx

```
└── src
    └── store
        ├── Settings.tsx
```

The `Settings` context provides components (and other contexts) with access to the main blockchain settings required by Taquito and Beacon:
* `endpoint` URL used by Taquito's constructor
* `network` type used by beacon constructor

## Code

```tsx
import { NetworkType } from "@airgap/beacon-sdk";
import constate from "constate";
import { useState } from 'react';

export const [
  SettingsProvider,
  useAppName,
  useEndpoint,
  useNetwork,
  useContractAddress
] = constate(
  () => {
    const [settingState] = useState({
      app_name        : 'My DApp',
      endpoint        : 'https://ghostnet.ecadinfra.com',
      network         :  NetworkType.GHOSTNET,
      contract        : 'KT1...',
    });
    return settings;
  },
  v => v.app_name,
  v => v.endpoint,
  v => v.network,
  v => v.contract
);
```

## Usage

When a component needs a settings, it imports the hook and calls it to retrieve the value:

```tsx
import { useAppName, useEndpoint, useNetwork } from '../store/Settings'

const network = useNetwork()
const endpoint = useEndpoint()
const name = useAppName()
```

See the [Beacon.tsx](/docs/dapps/project/beacon) constate hook for an example.
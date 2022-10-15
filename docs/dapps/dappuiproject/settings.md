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

The `Settings` constate hook provides components (and other hooks) with access to the main blockchain settings required by Taquito and Beacon:
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
] = constate(
  () => {
    const [settingState] = useState({
      app_name        : 'My Dapp',
      endpoint        : 'https://ghostnet.ecadinfra.com',
      network         :  NetworkType.GHOSTNET,
    });
    return settings;
  },
  v => v.app_name,
  v => v.endpoint,
  v => v.network
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

See the [Beacon.tsx](/docs/dapps/dappuiproject/beacon) constate hook for an example.
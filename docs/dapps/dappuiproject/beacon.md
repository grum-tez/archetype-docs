---
sidebar_position: 3
sidebar_label: Beacon.tsx
---

# Beacon.tsx

```
└── src
    └── store
        ├── Beacon.tsx
```

The `Beacon` constate hook provides:
* the wallet address (if connected, `undefined` otherwise)
* the wallet name (for example `Temple - Tezos Wallet` if connected, `undefined` otherwise)
* Beacon's connection utils:
  * `connect` to connect to a wallet
  * `disconnet` to disconnect
  * `is_connected` returns `true` if connected, `false` otherwise

## Code

```tsx
import { BeaconWallet } from '@taquito/beacon-wallet';
import React from 'react';
import { useTezosToolkit } from "./Taquito";
import { useAppName, useEndpoint, useNetwork } from "./Settings";

import constate from 'constate';

export const [
  BeaconProvider,
  useWalletAddress,
  useWalletName,
  useBeaconUtils,
] = constate(
  MakeBeacon,
  (v) => v.state.user_address,
  (v) => v.state.wallet,
  (v) => v.utils
);

function MakeBeacon() {
  const network = useNetwork()
  const endpoint = useEndpoint()
  const name = useAppName()
  const ttk = useTezosToolkit()

  const [state, setState] = React.useState(() : {
    beacon       : undefined | BeaconWallet,
    user_address : undefined | string,
    wallet       : undefined | string,
  } => ({
    beacon       : new BeaconWallet({ name : name, preferredNetwork : network }),
    user_address : undefined,
    wallet       : undefined
  }));

  React.useEffect(() => {
    // to be executed on mount
    ttk.setWalletProvider(state.beacon)
    const on_mount = async () => {
      const account = await state.beacon?.client.getActiveAccount();
      const address = account?.address;
      const peers = await state.beacon?.client?.getPeers();
      const wallet_name = peers !== undefined ? peers[0].name : undefined;
      setState(s => { return { ...s, user_address : address, wallet : wallet_name }})
    }
    on_mount()
  }, []);

  const connect = async () => {
    try {
      let beacon : BeaconWallet | undefined = undefined
      if (state.beacon) {
        beacon = state.beacon
        ttk.setWalletProvider(beacon);
        await beacon.requestPermissions({
          network : {
            type : network,
            rpcUrl : endpoint
          }
        })
        const address = await beacon.getPKH();
        const peers = await beacon.client.getPeers()
        const wallet_name = peers[0].name
        setState(s => { return { ...s, user_address : address, wallet : wallet_name }})
      } else {
        throw new Error("Beacon Not Initialized")
      }
    } catch(e) {
      console.log(e)
    }
  }

  const disconnect = async () => {
    state.beacon?.client.disconnect()
    setState(s => { return { ...s,
      user_address : undefined
    }})
  }

  const is_connected = () => {
    return state.user_address !== undefined
  }

  return { state, utils : { connect, disconnect, is_connected } };
}
```

## Usage

For example, the `Login` component providing the button to login to a wallet would code:

```tsx
import { useBeaconUtils } from '../store/Beacon'

const LoginButton = () => {
  const connect = useBeaconUtils().connect
  return <Button onClick={connect} />
}
```
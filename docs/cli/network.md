---
sidebar_position: 2
sidebar_label: Network
---
import Link from '@docusaurus/Link';

# Network

The Tezos blockchain provides serveral networks:
* a main network which is the real operating network where *real* cryptocurrency are exchanged
* several test networks:
  * one in the same version (to test current network)
  * one(s) in the future main net version(s) (to test/preprare future version of smart contracts)
  * optionally several in older versions

Each version of the blockchain is given the name of a city whose first letter is the next one to the previous.

An endpoint is an entry node to the network. You interact with the blockchain through an endpoint. You need to specify the endpoint's URL when interacting with the blockchain.

`completium-cli` offers a convenient network management system to register, show and switch networks.

### `show endpoint`

Display the endpoint completium is currently using:

```completium
completium-cli show endpoint
```

For example:

```completium
$ completium-cli show endpoint
Current network: granada
Current endpoint: https://testnet-tezos.giganode.io
```
### `switch endpoint`

Select the current endpoint from menu with the following command:

```completium
completium-cli switch endpoint
```

`completium-cli` comes with a set of pre-configured endpoints:

```completium
$ completium-cli switch endpoint
Current network: ghost
Current endpoint: https://ghostnet.ecadinfra.com
? Switch endpoint …
❯ main       https://mainnet.api.tez.ie
  main       https://mainnet-tezos.giganode.io
  main       https://rpc.tzbeta.net
  ghost      https://ghostnet.ecadinfra.com
...
```
Use up/down arrows to select the required endpoint.

### `add endpoint`

```completium
completium-cli add endpoint (main|ghost|kathmandu) <ENDPOINT_URL>
```
### `set endpoint`

```completium
completium-cli set endpoint <ENDPOINT_URL>
```
The command fails if the endpoint is not registered (see `add endpoint` above).

### `remove endpoint`

```completium
completium-cli remove endpoint <ENDPOINT_URL>
```

### `mockup init`

The mockup mode is used to [test smart contracts](/docs/tests/introduction). It runs smart contracts locally without the need to interact with a network.

The following command initialises a new mockup (erases previous one) :
```completium
completium-cli mockup init
```
This command makes all registered accounts available in the mockup mode and tansfers 1000 XTZ to each.

To turn mockup mode on, use the following command:
```completium
completium-cli set endpoint mockup
```

:::info
The mockup mode requires the Tezos client to be installed and executed with the command `tezos-client`. Please refer to [this page](https://assets.tqtezos.com/docs/setup/1-tezos-client/) for installation instructions.
:::

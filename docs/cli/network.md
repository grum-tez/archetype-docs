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

:::warning
The mockup mode requires the Tezos client to be installed and executed with the command `octez-client`. Please refer to [this page](https://assets.tqtezos.com/docs/setup/1-tezos-client/) for installation instructions. See instructions below to configure `completium-cli` to use the Tezos client.
:::

The following command must be run the first time and every time you need to reinitialise it:
```completium
completium-cli mockup init
```
The command above also sets the current endpoint to `mockup`. The `set endpoint` and `switch endpoint` commands can also be used:
```completium
$ completium-cli set endpoint mockup
```

The effect of the `mockup init` command is to make all registered accounts available to the mockup mode, and to initialise each account balance to 1000XTZ. By default, 8 accounts are available to the mockup mode:
```
alice      : tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb
bob        : tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6
carl       : tz1aGDrJ58LbcnD47CkwSk3myfTxJxipYJyk
bootstrap1 : tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx
bootstrap2 : tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN
bootstrap3 : tz1faswCTDciRzE4oJ9jn2Vm2dvjeyA9fUzU
bootstrap4 : tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv
bootstrap5 : tz1ddb9NMYHZi5UzPdzTZMYQQZoMub195zgv
```

It is possible to specify the protocol for mockup mode. For example:
```completium
$ completium-cli mockup init --protocol PtLimaPtLMwfNinJi9rCfDPWea8dFgTZ1MeJ9f1m2SRic6ayiwW
```

#### Octez client

Once the Tezos client is [installed](https://assets.tqtezos.com/docs/setup/1-tezos-client/), the `set binary path` command tells `completium-cli` how to invoke it:
```completium
completium-cli set binary path tezos-client <PATH>
```

`PATH` is the absolute path to the Tezos client binary.

The `show binary path` command displays the path.

For example:
```completium
$ completium-cli show binary path tezos-client
tezos-client binary path: /Users/user1/nomadiclabs/tezos/octez-client
```
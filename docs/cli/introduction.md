---
sidebar_position: 0
sidebar_label: Introduction
---
import Link from '@docusaurus/Link';

# Introduction

`completium-cli` is a command line interface to interact (orginate, call, ...) with Archetype and Michelson smart contracts on the <Link to='/docs/dapp-tools/tezos'>Tezos</Link> blockchain.

The list of available commands is displayed with:

```completium
completium-cli help
```

## Install

It is distributed as a npm [package](https://www.npmjs.com/package/@completium/completium-cli). Install it with the following command:

```completium
npm install -g @completium/completium-cli
```

Once installed, run the `init` command:

```completium
completium-cli init
```

:::info
Run `completium-cli init` every time a new version of Completium CLI is installed.
:::

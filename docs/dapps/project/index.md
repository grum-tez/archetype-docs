import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import { Grid } from '@mui/material';

# DApp UI

This section presents how to create and setup a DApp's User Interface (UI) project using React and Beacon's DApp/wallet interaction.

## Technical stack

### JS Runtime

The use of [Nodejs](https://nodejs.org/en/) as the javascript execution environment is a no brainer. It is best installed with [`nvm`](https://github.com/nvm-sh/nvm).

### UI Framework

Any UI framework is suitable to create a web DApp interface (Angular, Vue, Svelte, ...). We present here how to create a DApp UI project with [React](https://reactjs.org/).

### Language

It is *strongly* recommended to use [Typescript](https://www.typescriptlang.org/) language as it will greatly shorten and ease up the development cycle. Its typed aspect makes that many errors are detected at compilation time (ie. at the time of writing code) rather than later at execution. It just doesn't make sense to developp with untyped languages when you think of it ...

Project templates configured with typescript are available with most UI frameworks. The following command uses `create-react-app` template with typescript:

```
npx create-react-app my-dapp --template typescript
```

This creates the `my-dapp` project. More information may be found [here](https://create-react-app.dev/docs/adding-typescript/)

### Tezos library

While it is always possible to interact directly with the [Tezos endpoint's RPC API](https://tezos.gitlab.io/active/rpc.html), it is more than recommended to use a dedicated library that will wrap all services in high-level development services and take care of all the low-level Tezos protocol details.

In the context of web DApps for Tezos, the main library is [Taquito](https://tezostaquito.io/):

```
npm install @taquito/taquito
```

Taquito uses official cryptographic packages (aka libraries). Some of these packages relies on nodejs packages designed to run on the back-end side (server side, not in a browser). These packages are `crypto`, `stream`, `assert`, `http`, `https`, `os`. As a result, the default build process fails; it is then necessary to map these packages to their front-end counterparts in the build process:

:::info
Follow instructions available [here](https://web3auth.io/docs/troubleshooting/webpack-issues) to solve build issues.
:::

As a side note, `create-react-app` uses [webpack](https://webpack.js.org/) (version 5) to bundle all resources as static web assets. It is then necessary to use the `react-app-rewired` package as described in [instructions](https://web3auth.io/docs/troubleshooting/webpack-issues) above, to be able to provide a customized webpack configuration without ejecting the react app.

### Wallets

A DApp needs to interact with a wallet to *sign* operations (transfers, calls to a smart contract, ...). Many wallets are available on Tezos ([Temple](https://templewallet.com/download/), [Kukai](https://wallet.kukai.app), [Umami](https://umamiwallet.com/), ...). It is common practice to interact with them all via [Beacon](https://docs.walletbeacon.io/) that implements the interaction standard [TZIP-10](https://tzip.tezosagora.org/proposal/tzip-10/) between a wallet and a dApp, as it greatly reduces the integration effort with wallets.

```
npm install @taquito/beacon-wallet @airgap/beacon-sdk
```

The main drawback of Beacon is the lack of control over the UI elements (typically the wallet selection popup), which can be a no-go if you want a tight control of the DApp L&F. In that case, each wallet needs to be integrated separately.

A constate hook for Beacon services `connect` and `disconnect` is available `here`.

### Contracts bindings

When interacting with a contract (read and write), it is *strongly* recommended to use its generated typescript bindings, that is a typed high-level typescript interface. It greatly reduces the effort to call a contract, read its storage and the number of runtime errors, as the compilier and LSP guides you through the contract interface.

Typescript bindings may be obtained with [Completium CLI](https://completium.com/docs/cli) with the `generate binding-ts` command. In the poll DApp example, the bindings of the `poll` contract is obtained with the following command:

```
completium-cli generate binding-ts ./contract/poll.arl > ./bindings/poll.ts
```

:::info
Bindings generation is also available for Michelson (.tz) files.
:::

The generated binding interface relies on two packages:
```
npm install @completium/dapp-ts @completium/archetype-ts-types
```

### Store

With React applications, it is *strongly* recommended to setup a centralised store of application data (settings, UI states, ...) in read/write modes with a dedicated package like [constate](https://www.npmjs.com/package/constate) or [redux](https://react-redux.js.org/). This is preventing from awkward spaghetti code of passing components states and data through large hierarchy of components.

The DApp example presented here is using *constate* for its lightweight aspect. Note that *Taquito* and *Beacon* must be *singletons*, hence there are wrapped with *constate* as React [Contexts](https://reactjs.org/docs/context.html) to make them available to UI components.

```
npm install constate
```

## Architecture

Schema below illustrates the module and package architecture of the DApp and their interactions:

<Grid container>
<Grid md={1} xs={0} />
<Grid item md={7} xs={12}>
<ThemedImage
  alt="Buld DApp"
  width="100%"
  sources={{
    light: useBaseUrl('img/tutorial/dapp/dapp-light.svg'),
    dark: useBaseUrl('img/tutorial/dapp/dapp-dark.svg'),
  }}
/>
</Grid>
</Grid>

* Changes in `Store` redraw `UI` components (React + constate hook mecanism)
* `UI` stores DApp's states in `Store`
* `Store` and `UI` interacts with contract via `Binding`
* `Store` uses `Beacon`'s services to connect to a wallet
* `Taquito`'s Tezos toolkit uses `Beacon` as transaction signer
* `Binding` uses `@completium/dapp-ts` package services to interact with blockchain
* `@completium/dapp-ts` uses `@completium/event-listener` to listen to emitted events

## File structure

The typical file structure of the react project is presented below:

<div style={{ lineHeight : '20px', fontFamily: 'Roboto Mono' }}>

├── README.md<br/>
├── config-overrides.js<br/>
├── package.json<br/>
├── tsconfig.json<br/>
├── `public`<br/>
│   &ensp;&ensp;├── favicon.ico<br/>
│   &ensp;&ensp;├── index.html<br/>
│   &ensp;&ensp;├── manifest.json<br/>
│   &ensp;&ensp;└── robots.txt<br/>
└── `src`<br/>
    &ensp;&ensp;&ensp;&ensp;├── App.css<br/>
    &ensp;&ensp;&ensp;&ensp;├── App.test.tsx<br/>
    &ensp;&ensp;&ensp;&ensp;├── [App.tsx](/docs/dapps/project/app)<br/>
    &ensp;&ensp;&ensp;&ensp;├── index.css<br/>
    &ensp;&ensp;&ensp;&ensp;├── index.tsx<br/>
    &ensp;&ensp;&ensp;&ensp;├── react-app-env.d.ts<br/>
    &ensp;&ensp;&ensp;&ensp;├── reportWebVitals.ts<br/>
    &ensp;&ensp;&ensp;&ensp;├── setupTests.ts<br/>
    &ensp;&ensp;&ensp;&ensp;├── `bindings`<br/>
    &ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;└── ...<br/>
    &ensp;&ensp;&ensp;&ensp;├── `components`<br/>
    &ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;└── ...<br/>
    &ensp;&ensp;&ensp;&ensp;└── `store`<br/>
    &ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── [Beacon.tsx](/docs/dapps/project/beacon)<br/>
    &ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── [Taquito.tsx](/docs/dapps/project/taquito)<br/>
    &ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── Contract.tsx<br/>
    &ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── [Settings.tsx](/docs/dapps/project/settings)<br/>
    &ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;└── ...<br/>

</div>

Note that 3 directories are created under `src`:
1. `bindings` for generated contracts bindings
2. `components` for UI components
3. `store` for *constate* hooks

*Taquito* and *Beacon* hooks are presented in details.


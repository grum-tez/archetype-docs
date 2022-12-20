---
sidebar_position: 1
sidebar_label: Framework
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Grid } from '@mui/material';
import ThemedImage from '@theme/ThemedImage';

# Framework

This presents the technical framework for testing a smart contract (written in Archetype or Michelson): tests are written in [Typescript](https://www.typescriptlang.org/) and executed with [Node.js](https://nodejs.org/en/).

## Runtime and language

The benefits of [Node.js](https://nodejs.org/en/) and the [npm](https://www.npmjs.com/) (yarn) packaging system is the access to a huge ecosystem of tools and utilities to implement tests.

The choice of [Typescript](https://www.typescriptlang.org/) (TS) language is motivated by its *strongly-typed* aspect. A typed language helps validating the code at compilation time and reduce the effort and time to production.

Moreover it is one of the best-equipped languages in IDEs (like [VSCode](https://code.visualstudio.com/), [IntelliJ](https://www.jetbrains.com/help/idea/typescript-support.html), ...) as they provide with inlined code information (function docs and signatures, code navigation and refactoring, ...) and powerful [linters](https://www.testim.io/blog/what-is-a-linter-heres-a-definition-and-quick-start-guide/) to help detect issues at the time of coding, rather than at test execution, or even worse, after the contract is deployed.

## Contract Binding

The key feature of this test framework is the automatic contract's binding generation. The binding represents the contract in the Typescript world and provides the same API as the contract (storage, entry points, views). Hence invoking the contract is done via the contract's binding.

For example, consider the following Archetype contract:

```archetype title="bind_demo.arl"
archetype bind_demo

variable total : nat = 0

entry increase(values : list<bool * nat>) {
  for p in values do
    total += p[0] ? p[1] : 0
  done
}
```

The generated binding object provides, among other utilities, provides the following Typescript methods:
* `deploy(params: Partial<ex.Parameters>): Promise<void>`
* `increase(values: Array<[ boolean, Nat]>, params: Partial<Parameters>): Promise<any>`
* `get_total(): Promise<Nat>`

These methods may be called by the test:
```ts title="test.ts"
import { bind_demo }   from './binding/bind_hello'
import { Nat }         from "@completium/archetype-ts-types";
import { get_account } from "@completium/experiment-ts";
const assert = require('assert')

const alice = get_account('alice');
/* Deploy contract */
await bind_demo.deploy({ as: alice })
/* Invoke 'increase' entry point */
await bind_demo.increase([[ true, new Nat(2) ], [ false, new Nat(3) ]])
/* Retrieve storage's total value */
const total = await bind_demo.get_total()
/* Assert retrieved value */
assert(total.equals(new Nat(2)))
```

The main benefit of the binding interface is that the contract interface is known at *coding* time.

For example, if the wrong type of argument is passed to the `increase` method, an error is thrown instantly in the IDE:

<Grid container>
<Grid item md={10} xs={12}>
<ThemedImage
  alt="Buld DApp"
  width="100%"
  sources={{
    light: useBaseUrl('img/binding/bind1_light.png'),
    dark: useBaseUrl('img/binding/bind1.png'),
  }}
/>
</Grid>
</Grid>

It is then possible to display the expected type of argument by hovering the method:

<Grid container>
<Grid item md={11} xs={12}>
<ThemedImage
  alt="Buld DApp"
  width="100%"
  sources={{
    light: useBaseUrl('img/binding/bind2_light.png'),
    dark: useBaseUrl('img/binding/bind2.png'),
  }}
/>
</Grid>
</Grid>

See the binding section for a detailed presentation.

## Michelson execution

In a test environement, the contract is executed locally with the *mockup* mode of the [Octez](https://research-development.nomadic-labs.com/announcing-octez.html) distribution's client (named `tezos-client`, see install [instructions](https://assets.tqtezos.com/docs/setup/1-tezos-client/)). It is hence *necessary* to install it and [inform](https://completium.com/docs/cli/network#mockup) Completium CLI about its path.

The benefit of the mockup mode is that it is uses the same execution engine as the tezos node. This removes the risk of a difference of exectuion semantics between test and production.

:::info
Note that it is also possible to use a sandbox or to connect to the testnet. See [here](https://completium.com/docs/cli/network) for more information.
:::

## Test library

It is best practise, and recommended, to use a generic purpose test library like [Mocha](https://mochajs.org/) or [Jest](https://jestjs.io/).

It helps structuring test scenarios in units and sequence of units; it provides a clear output of which tests are passing and which are not, with corresponding errors.

It can be combined with a code covering package to check whether all binding services are covered by tests.

See the Mocha section for more information.

## Completium packages

The framework relies on several packages:

* [`@completium/archetype-ts-types`](https://www.npmjs.com/package/@completium/archetype-ts-types) provides all bindings types (see types section)
* [`@completium/experiment-ts`](https://www.npmjs.com/package/@completium/experiment-ts) provides generic calls (to invoke the mockup mode) used by the binding, plus completium account utils (see API section)

There is no need to install these packages manually when the `create project` command is used. See here for more info.

Note that it is also possible to use the binding generation in a *DApp*. See [here](http://localhost:3000/docs/dapps/example/) for a full DApp example.
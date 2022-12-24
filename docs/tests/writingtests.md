---
sidebar_position: 2
sidebar_label: Writing Tests
---

# Writing Tests

This section presents the main technical elements to setup, write and run tests.

## Project

### Create project

[Completium CLI](https://completium.com/docs/cli) provides the `create project` command to set up a simple project with contracts and tests.

The command below creates a project named `myproject`:

```sh
completium-cli create project myproject
```

This creates the `myproject` directory with the following structure:

```
myproject
├── contracts
│   └── hello.arl
├── package.json
├── tests
│   └── 00-test-hello.ts
└── tsconfig.json
```

The project comes with a default contract `hello.arl` and its test `00-test-hello.ts`.

The `package.json` contains the declaration of required packages. They are installed with:

```sh
$ cd myproject
$ npm i
```

Note that there are 2 directories of interest:
* `contracts` to store smart contracts (Archetype or Michelson)
* `tests` to store tests (Typescript)

### Generate binding

A contract's [binding](/docs/tests/framework#contract-binding) is generated automatically for each contract found in `contracts` directory. A binding is a typescript object that reflects the contract interface to interact with it in read/write modes.

The following command generates one binding file per contract (Archetype or Michelson) found in `contracts` directory:

```sh
npm run gen-binding
```

In the default setup, this generates the file `hello.ts` in `tests/binding/` directory from `hello.arl` in `contracts` directory.

These values are defined in the `"completium"` section of the `package.json` file:

```json title="package.json"
"completium": {
  "binding_path": "./tests/binding/",
  "build_path": "./build/",
  "contracts_path": "./contracts/",
  "tests_path": "./tests/"
}
```

Modify these values to adapt to your setup.

:::warning
Bindings need to be generated with the above command everytime the contract interface is modified (storage, entries, views, error messages)
:::

### Run tests

The following command executes tests found in `tests` directory:

```
npm run test
```

This executes tests in `00-test-hello.ts` file and generates the following output:

```
> ts-mocha --timeout 0 --slow 99999999 ./tests/*.ts

  [HELLO] Contract deployment
    ✔ Deploy test_binding

  [HELLO] Call entry
    ✔ Call 'myentry'

  2 passing (2s)
```

The `test` command is defined in `package.json` as:

```json
"scripts" : {
  "test": "ts-mocha --timeout 0 --slow 99999999 ./tests/*.ts"
}
```

Note that It is possible to create a new rule in the `scripts` section to run a specific test file.

:::info
The *mockup* mode must be initialised with the `completium-cli mockup init` command for the `test` command to run. More information [here](https://completium.com/docs/cli/network#mockup).
:::

## Configuration

By default, the global Completium CLI configuration (network, account, quiet mode, ...) is used by a test. It is possible to overwrite the configuration with dedicated functions from `@completium/experiment-ts` package.

### Network

The `set_mockup` function set the mockup mode.

```ts
import { set_mockup } from "@completium/experiment-ts"

set_mockup()
```

Another network (sandbox, test) may be set with the `set_network` function.

### Account

Calling a contract's entry point require to specify the caller account. An account is declared with Completium CLI (see [here](https://completium.com/docs/cli/account) for information). An account is referred to with an alias.

The `get_account` function returns a Completium account from its alias.

```ts
import { get_account } from "@completium/experiment-ts"

const alice = get_account('alice')
```

:::info
The mockup mode comes with a set of 8 predefined accounts ready to use for test purposes:
`alice` `bob` `carl` `bootstrap1` `bootstrap2` `bootstrap3` `bootstrap4` `bootstrap5`
:::

### Quiet mode

The `set_quiet` function switchs on or off the quiet mode. When set to `false`, the output of the tezos-client (in mockup mode) is displayed with detailed information, like gas consumption and storage diffs.

```ts
import { set_quiet } from "@completium/experiment-ts"

set_quiet(true)
```

## Test structure

The default project created with [`create project`](/docs/tests/writingtests#create-project) command uses the [Mocha](https://mochajs.org/) test package. You are free to install and use any other testing framework, like [Jest](https://jestjs.io/docs/getting-started).

In the Mocha testing framework, the `describe` function is used to group together related tests. It takes two arguments: a string description of the test group, and a callback function that contains the individual tests or further nested `describe` blocks.

Here is an example of how `describe` is used:

```ts
describe('A group of tests', function() {
  // Test cases go here
})
```

The `it` function is used to define a single test case within a `describe` block. It takes two arguments: a string description of the test, and a callback function containing the code for the test.

Here is an example of how `it` is used:

```ts
describe('A group of tests', function() {
  it('should do something', function() {
    // Test code goes here
  })
})
```

Together, `describe` and `it` are used to structure and organize your tests in Mocha. The `describe` function is used to group together related tests, while the `it` function is used to define individual test cases.

For example, the following example from `00-test-hello.ts` :

```ts
describe('[HELLO] Call entries', async () => {
  it("Call 'exec'", async () => {
    await hello.exec({ as : alice })
    const s_after = await hello.get_s()
    assert(s_after === "Hello Archetype World!")
  })
  it("Call 'exec2'", async () => {
    await hello.exec2({ as : alice })
    const s_after = await hello.get_s()
    assert(s_after === "Hello TS Binding World!")
  })
})
```

Then the output looks like:

```
[HELLO] Call entry
    ✔ Call 'exec'
    ✔ Call 'exec2'
```

## Failing test

When the call to a contract's entry point is expected to fail, the function `expect_to_fail` catches the contract error and compares it to the expected one passed in parameter. It fails if the actual error is different from the expected one, or if the contract does not fail.

The `expect_to_fail` function takes two arguments: a callback function that executes the call to the entry point expected to fail, and the expected error.

For example, consider the following `mint` entry point of `fa2_nft` contract:

```archetype
entry mint(tow : address, tid : nat, tmd: map<string, bytes>) {
  called by owner
  effect {
    /* ... */
  }
}
```

The following expects the call to `mint` as `bob` to fail with error `INVALID_CALLER`:

```ts {12}
import { expect_to_fail } from '@completium/experiment-ts'

// ...

it('Mint tokens on FA2 as non owner should fail', async () => {
  await expect_to_fail(async () => {
    await fa2_nft.mint(
      bob.get_address(),      // owner
      token_id,               // token id
      [['', new Bytes('')]],  // metadata
    { as: bob });
  }, fa2_nft.errors.INVALID_CALLER);
});
```

Note that the `errors` field of contract's binding interface is the list of possible errors (here `fa2_nft.errors`).

## Batch execution

## Experiment utils
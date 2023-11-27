---
sidebar_position: 6
sidebar_label: Debugging
---

# Debugging

The [Archetype extension](https://marketplace.visualstudio.com/items?itemName=edukera.archetype) for VSCode provides  debugging capabilities for developers working with Archetype. This tool streamlines the debugging process, making it easier to identify and resolve issues in an Archetype contract. It often becomes indispensable for swift issue identification and resolution.

## Requirements

Ensure you have the necessary utilities installed for a seamless debugging experience.

### Octez client

Rather than relying on an adhoc Archetype interpreter, the debugging process integrates with the official [octez-client](https://tezos.gitlab.io/introduction/howtoget.html) binary. This ensures tracing the execution of the compiled Michelson code, adding an extra layer of *safety* to the process.

- **Installation**: Follow the guidelines on the official site to install the `octez-client`.

- **Configuration**: Post-installation, configure the path to the `octez-client` binary within the extension parameters. The default path is set to `"octez-client"`.

### Octez codec

Decode generated operations with precision using the [octez-codec](https://tezos.gitlab.io/introduction/howtouse.html?highlight=octez%20codec) utility. While it's an *optional* tool, having it installed will offer more granular insights into the operations.

- **Installation**: Obtain the `octez-codec` binary as outlined in the provided link.

- **Configuration**: Once installed, specify the path to the `octez-codec` binary in the extension settings. It defaults to `"octez-codec"`.

## Getting Started

Follow this step-by-step guide to initiate a debug session with ease.

### Start a Debug Session

1. Open Archetype contract in VSCode.
2. Access the debug view by clicking on the bug icon on the sidebar.
3. Click on the "Create a launch.json file" (the first time only); this creates locally and displays the default `.vscode/launch.json` file; focus back on the Archetype contract.
4. Click on the green arrow on the left of between "RUN AND DEBUG" and "Archetype : debug".

### Entrypoint Selections

1. If the contract has several entrypoints, select the entrypoint to debug in the drop menu.
2. If the entrypoint has parameters, set the value of each parameter.
3. If the contract has storage elements, set the value of each element.

The expected format for parameters and storage elements is **Michelson**.

### Execute Code

The process pauses at the beginning of the entrypoint execution:

1. Utilize the debug controls for 'Step Over', 'Step back', or 'Stop' as per your needs.
2. Observe the changes in the storage, local variables, and operations.

Note that you can also hover storage and local variables to display values *in situ*.

The process stops when the end of entrypoint execution is reached.

## Features

Dive deep into the specifics:

### Local Variables

Examine the values of local variables during execution, allowing for a comprehensive understanding of the logic flow.

### Storage Elements

Track changes and values within your contract's storage, offering insights into the state persistence.

### Operations

Witness in real-time the generated operations and, with the help of the `octez-codec`, get detailed interpretations of each operation.

### Gas Information

Consumed gas is displayed as code decoration on every instruction. The delta information tells the gas of the instruction.

## `launch.json`

Contract developpement often requires a high number of test/debug iterations. Entering the storage and input values at each iteration may be tedious. In order to speed up the process, it is possible to set the default values in the `launch.json` file.

### Contract context

Entrypoint and contract execution context may be set in the `env` section of the `launch.json` file:
* [`caller`](/docs/reference/expressions/constants#caller)
* [`transferred`](/docs/reference/expressions/constants#transferred)
* [`balance`](/docs/reference/expressions/constants#balance)
* [`level`](/docs/reference/expressions/constants#level)
* [`now`](/docs/reference/expressions/constants#now)
* [`source`](/docs/reference/expressions/constants#source)

Below is the default context values:
```json
"env": {
  "now": "2023-10-27 09:25:11",
  "level": "10000",
  "caller": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
  "source": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
  "transferred": "0",
  "balance": "1000000"
}
```

### Default inputs

It is possible to specify default input values in the `inputs` section in the `env` section. For example:

```json
"env": {
  "inputs": {
    "spender": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
    "from": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
    "to": "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6",
    "value": "50
  }
}
```

### Default storage

It is possible to set the default values in the `storage` section in the `env` section of the `launch.json` file. For example:

```json
"storage": {
  "ledger": "{ Elt \"tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb\" (Pair 1000 {  }) }",
  "token_metadata": "{ Elt 0 (Pair 0 { Elt \"\" 0x00 }) }"
}
```

It is possible to specify only some specific storage elements.

### Default constant parameter

A constant parameter may be specified in the `const_params` section in the `env` section of the `launch.json` file. For example:

```json
 "const_params": {
  "initial_holder": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
  "total_supply": "1000",
  "metadata_coin": "0x00"
},
```

### Example

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "archetype",
      "request": "launch",
      "name": "Archetype : debug",
      "program": "${file}",
      "env": {
        "now": "2023-10-27 09:25:11",
        "level": "10000",
        "caller": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
        "source": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
        "transferred": "0",
        "balance": "1000000",
        "inputs": {
          "spender": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
          "from": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
          "to": "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6",
          "value": "500"
        },
        "const_params": {
          "initial_holder": "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
          "total_supply": "1000",
          "metadata_coin": "0x00"
        },
        "storage": {
          "ledger": "{ Elt \"tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb\" (Pair 1000 {  }) }",
          "token_metadata": "{ Elt 0 (Pair 0 { Elt \"\" 0x00 }) }"
        }
      }
    }
  ]
}
```
---
sidebar_position: 6
sidebar_label: Debugging
---

# Debugging

The [Archetype extension](https://marketplace.visualstudio.com/items?itemName=edukera.archetype) for VSCode provides  debugging capabilities for developers working with Archetype. This tool streamlines the debugging process, making it easier to identify and resolve issues in an Archetype contract. It often becomes indispensable for swift issue identification and resolution.

## Requirements

Ensure you have the necessary utilities installed for a seamless debugging experience.

### Octez client

Rather than relying on an adhoc Archetype interpreter, our debugging process integrates with the official [octez-client](https://tezos.gitlab.io/introduction/howtoget.html) binary. This ensures tracing the execution of the compiled Michelson code, adding an extra layer of *safety* to the process.

- **Installation**: Follow the guidelines on the official site to install the `octez-client`.

- **Configuration**: Post-installation, configure the path to the `octez-client` binary within the extension parameters. The default path is set to `octez-client`.

### Octez codec

Decode generated operations with precision using the [octez-codec](https://tezos.gitlab.io/introduction/howtouse.html?highlight=octez%20codec) utility. While it's an *optional* tool, having it installed will offer more granular insights into the operations.

- **Installation**: Obtain the `octez-codec` binary as outlined in the provided link.

- **Configuration**: Once installed, specify the path to the `octez-codec` binary in the extension settings. It defaults to `octez-codec`.

## Getting Started

Follow this step-by-step guide to initiate a debug session with ease.

### Start a Debug Session

1. Open your Archetype contract in VSCode.
2. Access the debug view by clicking on the bug icon on the sidebar.
3. Choose the Archetype configuration and press the 'Start Debugging' button or `F5`.

### Entrypoint Selections

Ensure you're targeting the right entry point:

1. Navigate to the 'Entrypoint' section in your debug view.
2. From the dropdown, select the desired entry point for your contract.

### Execute Code

To step through your contract:

1. Utilize the debug controls for 'Step Over', 'Step Into', or 'Step Out' as per your needs.
2. Observe the changes in the state, variables, and operations.

## Features

Dive deep into the specifics:

### Local Variables

Examine the state and values of all local variables during execution, allowing for a comprehensive understanding of the logic flow.

### Storage Elements

Track changes and values within your contract's storage, offering insights into the state persistence.

### Operations

Witness in real-time the generated operations and, with the help of the `octez-codec`, get detailed interpretations of each operation.

### Gas Information

Stay informed about the gas consumption for every contract call, ensuring optimal contract performance.

### Contract Context

Understand the surrounding environment of the contract like the caller, timestamp, and more.

## Limits

Presently, the debugging tool doesn't support setting breakpoints. The debugging experience follows the code execution from start to finish without manual interruptions.

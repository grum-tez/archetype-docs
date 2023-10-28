---
sidebar_position: 6
sidebar_label: Debugging
---

# Debugging

The [Archetype extension](https://marketplace.visualstudio.com/items?itemName=edukera.archetype) for VSCode provides  debugging capabilities for developers working with Archetype. This tool streamlines the debugging process, making it easier to identify and resolve issues in an Archetype contract.

## Requirements

### Octez client

For *safety* reasons, the debugging process does not rely on an adhoc archetype interpreter, but on the official [octez-client](https://tezos.gitlab.io/introduction/howtoget.html) binary, that traces the execution of the compiled Michelson code. It is then required to install it.

Once installed, you can set the *path* to the `octez-client` binary in the extension parameter (defaulted to `octez-client`).

### Octez codec

The [octez-codec](https://tezos.gitlab.io/introduction/howtouse.html?highlight=octez%20codec) utility is used to decode generated operations. While *optional*, it is recommended to install the octez codec binary to get details on generated operations.

Once installed, you can set the *path* to the `octez-codec` binary in the extension parameter (defaulted to `octez-codec`)

## Getting started

### Start a debug session

### Entrypoint selections

## Features

### Local variables

### Storage elements

### Operations

### Gas information

### Contract context

## Limits
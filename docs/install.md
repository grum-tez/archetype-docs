---
sidebar_position: 2
---

# Installation

## Completium CLI

[Completium CLI](https://www.npmjs.com/package/@completium/completium-cli) is the command line utility to install Archetype compiler and manage contracts (deploy, call).

Install it and init its configuration:
```
npm i -g @completium/completium-cli
completium-cli init
```

### Docker

Install Archetype compiler:
```
completium-cli install archetype
```

This requires [docker](https://www.docker.com/) to be installed, and will download the [latest version](https://hub.docker.com/r/completium/archetype) (displayed in the right corner of the top bar) of Archetype compiler .

Print installed Archetype version:
```
completium-cli archetype version
```

### JS compiler

Completium-CLI comes with a JS version of the compiler.

Switch to JS compiler:
```
completium-cli set archetype js
```
(`docker` is the argument to switch to docker mode)

:::caution
The current JS version of Archetype compiler comes with a limit in the size of the contract. It is well adapted for smaller contracts in node.js only environment.
:::

Print Archetype's install 'mode':
```bash
completium-cli show archetype mode
```

## Binary

It is possible to configure Completium CLI to use a binary version of the Archetype compiler.

Switch to binary compiler:
```
completium-cli set archetype path <PATH_TO_ARCHETYPE_BIN>
completium-cli set archetype binary
```

There are 3 ways to get the binary compiler.

### Download

Download the binary compiler from the github [release](https://github.com/edukera/archetype-lang/releases/latest) page. It is available for the following platform:
* Linux (x64)
* Macos (arm64)

### Opam

Install with [opam](https://opam.ocaml.org/):
```
opam install archetype
```

### From source

```
git clone git@github.com:edukera/archetype-lang.git
cd archetype-lang
make build-deps
make all
```


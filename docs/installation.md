# Installation

## Completium CLI

[Completium CLI](https://completium.com/docs/cli) is the command line utility to install Archetype compiler and manage contracts (deploy, call).

Install it and initialize its configuration:
```
npm i -g @completium/completium-cli
completium-cli init
```
### Docker

Install Archetype compiler:
```
completium-cli install archetype
```

This requires [docker](https://www.docker.com/products/docker-desktop/) to be installed, and will download the [latest version](https://hub.docker.com/r/completium/archetype) (displayed in the right corner of the top bar) of Archetype compiler .

Print installed Archetype version:
```
completium-cli archetype version
```

### JS

Completium-CLI comes with a JS version of the compiler.

Switch to JS compiler:
```
completium-cli set mode archetype js
```

:::caution
The current JS version of Archetype compiler comes with a limit in the size of the contract. It is well adapted for smaller contracts in node.js only environment.
:::

### Binary

It is possible to configure Completium CLI to use a [binary version](/docs/installation#install-binary) of the Archetype compiler.

Switch to binary compiler:
```
completium-cli set binary path archetype <PATH_TO_ARCHETYPE_BIN>
completium-cli set mode archetype binary
```

### Switch install mode

It is possible to open a menu to switch archetype install 'mode':
```bash
$ completium-cli switch mode archetype
Current archetype mode: binary
? Switch archetype mode …
  js
▸ docker
  binary
```

Select mode with up/down arrows, then press enter.

Print Archetype's install 'mode' with:
```bash
completium-cli show mode archetype
```

## Install Binary

There are 3 ways to install the binary compiler.

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

Requires [opam](https://opam.ocaml.org/) to be installed:

```
git clone git@github.com:edukera/archetype-lang.git
cd archetype-lang
make build-deps
eval $(opam env)
make all
```

## VS code extension

It is recommended to develop Archetype contracts with [VS Code](https://code.visualstudio.com) and the [Archetype extension](https://marketplace.visualstudio.com/items?itemName=edukera.archetype).

The extension provides:
* syntax highlighting
* inlined errors (syntax, types, ...)
* compiler command (`Archetype: Generate Michelson`)

:::caution
The default extension's compiler mode is `js`. It fails when the contract reaches a certain size; it is then necessary to switch to binary mode as presented below.
:::

### Switch to binary

The process is as follows:
1. [install the binary](/docs/installation#install-binary) version of archetype compiler
2. go to VS Code Settings:
    1. search for `Archetype: Archetype Bin` and *fill* the path of Archetype compiler
    2. search for `Archetype: Use Archetype JS Lib` and *uncheck* the check box

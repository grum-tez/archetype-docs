# Installation

## Completium CLI

[Completium CLI](https://completium.com/docs/cli) is the command line utility to install Archetype compiler and manage contracts (deploy, call).

Install it and initialize its configuration:
```
npm i -g @completium/completium-cli
completium-cli init
```
### JS

By default, Completium-CLI uses the [JS version](https://www.npmjs.com/package/@completium/archetype) of Archetype compiler.

:::caution
The JS version of Archetype compiler fails when the contract reaches a certain size. It is recommended to use the docker container or the binary version of the compiler.
:::

Switch back to JS compiler from other compiler modes (docker, binary) with:
```
completium-cli set mode archetype js
```
### Docker

Install Docker container of Archetype compiler with:
```
completium-cli install archetype
```

This requires [docker](https://www.docker.com/products/docker-desktop/) to be installed, and will download the [latest version](https://hub.docker.com/r/completium/archetype) of Archetype compiler .

:::info
This command runs docker command `docker pull completium/archetype:latest`, hence it also *updates* to the latest version of Archetype compiler.
:::

### Binary

It is possible to configure Completium CLI to use a [binary version](/docs/installation#install-binary) of the Archetype compiler.

Switch to binary compiler:
```
completium-cli set binary path archetype <PATH_TO_ARCHETYPE_BIN>
completium-cli set mode archetype binary
```

### Utility commands

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

Print current version of Archetype compiler with:
```
completium-cli archetype version
```

## VS code extension

It is recommended to develop Archetype contracts with [VS Code](https://code.visualstudio.com) and the [Archetype extension](https://marketplace.visualstudio.com/items?itemName=edukera.archetype).

The extension provides:
* syntax highlighting
* inlined errors (syntax, types, ...)
* compiler command (`Archetype: Generate Michelson`)

### JS

Like Completium CLI, the Archetype extension uses by default the JS version of Archetype compiler.

:::caution
The JS version of Archetype compiler fails when the contract reaches a certain size. It is recommended to switch to the docker container or to the binary version of the compiler.
:::

### Docker

This requires [docker](https://www.docker.com/products/docker-desktop/) to be installed:
1. install the [latest container](https://hub.docker.com/r/completium/archetype) of Archetype compiler with `docker pull completium/archetype:latest`
2. go to VS Code Settings, search for `Archetype: Archetype Mode` and *select* `docker`

### Binary

The process is as follows:
1. [install the binary](/docs/installation#install-binary) version of archetype compiler
2. go to VS Code Settings:
    1. search for `Archetype: Archetype Bin` and *fill* the path of Archetype compiler
    2. search for `Archetype: Archetype Mode` and *select* `binary`

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

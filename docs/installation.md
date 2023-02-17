# Installation and Setup

## Recommended setup
The recommended setup for developing Archetype smart contracts consists of four elements:

1. Visual Studio Code and Archetype extension
2. Completium-CLI command line utility
3. Archetype compiler
4. Testing framework

A presentation of a suggested technical stack for a decentralised front-end application is presented in the DApps section.

## 1. Install VS Code and extension

Visual studio code is a free IDE. [Install](https://code.visualstudio.com/) and open it.

The [Archetype language support for visual code](https://marketplace.visualstudio.com/items?itemName=edukera.archetype) extension can be downloaded from the extensions tab in VS code (search for archetype).

The extension provides:

-   syntax highlighting
-   inlined errors (syntax, types, ...)
-   compiler command (`Archetype: Generate Michelson`)

Details about how to setup the vscode extension are covered below.

## 2. Install Completium CLI

[Completium-CLI](https://archetype-lang.org/docs/cli/introduction) is a command line utility which allows users to:
	- interact with tezos accounts and contracts on the "real" blockchain (mainnet) or a developer chain (e.g ghostnet)
	- manage mockup and sandbox environments
	- generate bindings to interface between Archetype and Typescript
	- install and manage the Archetype compiler

Install Completium CLI with the following commands:

```
$ npm install -g @completium/completium-cli
$ completium-cli init
```

Always run `completium-cli init` after updating or reinstalling Completium CLI to initialize its configuration.

## 3. Install Archetype compiler

To install Archetype really means to install the Archetype compiler. This compiler converts the your Archetype code into the low level [Michelson language](https://www.michelson.org/) that is common to all tezos contracts deployed on chain.

### Default compiler option: JS

By default, a javascript version of the compiler is installed with `completium-cli`. However, this default version of the compiler fails when a contract reaches a certain size. 

If you are new to Archetype and want to get started quickly, or only wish to write and deploy small contracts, you can safely move on to the [next section](https://archetype-lang.org/docs/installation#testing-framework). You can return to these docs if you hit the contract size limit in future. We recommend you complete your setup by switching to the docker compiler now, if time permits. It should take no more than 5-10 minutes.

### Recommended compiler option: Docker

Running the binary compiler in a docker container is recommended for most users. Installation is fast. Updates are easy. 

1. Install and open [docker desktop](https://www.docker.com/products/docker-desktop/). Docker *must be running* for the following command, and indeed the compiler, to work.
2. Install the [latest container](https://hub.docker.com/r/completium/archetype) of Archetype compiler with `docker pull completium/archetype:latest`
3. In the terminal, run `completium-cli switch mode archetype` and select `docker` from the menu.
4. In VS Code Settings, set `Archetype: Archetype Mode` to `docker`

You should now have a working setup. *Remember that docker-desktop must be running for the compiler to work under this setup.* You can update your version of Archetype with:
```
completium-cli install archetype
completium-cli init
```

### Alternate compiler option: native binary compiler

A native binary compiler is available for the following platforms:

-   Linux (x64)
-   Macos (arm64)

#### Installation
There are 3 ways to install the binary compiler natively:

##### Option 1: Download the binary compiler from the github [release page](https://github.com/edukera/archetype-lang/releases/latest).

##### Option 2: Install with [opam](https://opam.ocaml.org/): ` opam install archetype`.

##### Option 3: Install from source:

Require [Opam](https://opam.ocaml.org/) to be installed. Fork the [archetype-lang repository](https://github.com/completium/archetype-lang/). Replace the link in following snippet with a link to your fork of the repository.

```
git clone https://github.com/your-github-username/archetype-lang.git
cd archetype-lang
make build-deps
eval $(opam env)
```

#### After Installation

1. In the terminal, run `completium-cli switch mode archetype` and select `binary` from the menu.
2. go to VS Code Settings:
- Fill `Archetype: Archetype Bin` with the path of Archetype compiler
- Set `Archetype: Archetype Mode` to `binary`

### Utility commands

Switch between Archetype compilers with the following command:

```
$ completium-cli switch mode archetype
Current archetype mode: binary?
Switch archetype mode …  
▸js 
 docker  
 binary
```

Select mode with up/down arrows, then press enter.

If you are using VS Code, you will have to change the VS Code setting accordingly. See the installation instructions for the relevant mode.

Print Archetype's install 'mode' with:

```
completium-cli show mode archetype
```

### Updating Completium-Cli and Archetype

Always run `completium-cli init` after updating or reinstalling completium-cli to initialize its configuration.

You can check the currently installed version of the Archetype compiler with:

```
completium-cli archetype version
```

If you still using the JS version of the compiler, you can update to the latest Archetype version by simply reinstalling completium-cli:

```
$ npm install -g @completium/completium-cli
$ completium-cli init
```

If you are running the compiler via docker container, you can update Archetype with: 

```
completium-cli install archetype
```

Remember to also update Completium-Cli seperately as required.

If you are using a native binary compiler, the usual approach is to reinstall or update the binary using the method or tool you installed it with.


## 4.Testing framework

The final aspect of your Archetype development setup is to create a project with the testing framework in place.

The testing framework generally consists of:
- Tests written in [Typescript](https://www.typescriptlang.org/) using a generic testing library such as [Mocha](https://mochajs.org/) or [Jest](https://jestjs.io/)
- Test execution with [Node.js](https://nodejs.org/en/)
- Contract bindings allowing an API between your typescript code and the test contracts. Generated with completium-cli
- A mockup of the tezos chain to simulate interactions between accounts and contracts. Managed with completium-cli
- Completium packages to provide binding types and various utilities 

A directory with much of this framework already in place can be built with the following commands:

```
completium-cli create project my-project
cd my-project
npm i
```

For a practical guide to this testing framework, you can jump to [Writing Tests](https://archetype-lang.org/docs/tests/writingtests)

## What's next?

Want to learn by doing? Try this practical introduction to smart contracts and dapps with Archetype: [First DApp](https://completium.com/docs/dapp-first)

Want a conceptual introduction? Click next to read about the basic building blocks of Archetype.

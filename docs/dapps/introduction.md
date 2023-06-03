---
sidebar_position: 0
sidebar_label: Introduction
---

# Introduction

This section presents how to build a *DApp* (Decentralized Application) with Archetype and Completium CLI.

We also recommend the [TZombies](https://superlouis.gitbook.io/tzombies/introduction/what-is-tzombies) tutorial for a complete step-by-step overview of how to build a DApp.

## Definition

Compared to a standard application, a DApp uses *decentralized* (peer to peer) backends (that is not owned by any private or public entity):
* a blockchain for its business logic (provided by a smart contract running on it)
* [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) (Interplanetary File System) for storage
* ...

The user is authenticated on the blockchain with a *wallet*, whose main role is to *sign* transactions to the smart contract. The signature principle is the one of [asymmetric cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography): the wallet uses the user's private key to sign, while the public key (or its hash in Tezos case) is used as public address (identity) on the blockchain.

### Limits

Many elements of a DApp are centralized.

#### User interface
The user interface is usually a web page (or a native app) served by a centralized server (owned by an ISP, Github, Gitlab, ...).

:::info
The UI code source should be *publically available*, so that every one can run it locally (the same applies to the wallet).
:::

#### Endpoints

Accessing to a peer to peer network (blockchain, IPFS, ...) is done by connecting to one machine, called the *endpoint*, owned by one entity. The integrity of the DApp then depends on that entity.

:::info
The DApp should provide the possiblity to set endpoints' URL/IP addresses.
:::

The user could potentially use its own endpoints.

#### Indexers

Indexers provide key informations to the ecosystem; however, as a centralised point of information access, it is recommended to use them *only* when necessary, that is when the required information is not available in any contract's storage or in any current block.

:::info
For example, when the DApp is required to react to contracts' events, it is recommended to use an embedded block explorer, such as [`@completium/event-listener`](https://www.npmjs.com/package/@completium/event-listener)
:::
---
sidebar_position: 0
sidebar_label: Introduction
---

# First Dapp

This section presents how to build a *Dapp* (Decentralized application) with Archetype and Completium CLI.

## Definition

Compared to a standard application, a Dapp uses *decentralized* (peer to peer) backends (that is not owned by any private or public entity):
* a blockchain for its business logic (provided by a smart contract)
* [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) (Interplanetary File System) for storage
* ...

The user is authenticated on the blockchain with a *wallet*, whose role is to *sign* (and ususally send) transactions to the smart contract. The signature principle is the one of [asymmetric cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography): the wallet uses the user's private key to sign, while the public key (or its hash in Tezos case) is used as public address (identity) on the blockchain.

### Partial centralisation?

Many elements of a Dapp are still centralized.

#### User interface
The user interface is usually a web page (or a native app) served by a centralized server (owned by an ISP, Github, Gitlab, ...).

:::info
The UI code source should be *publically available*, so that every one can run it locally (the same applies to the wallet).
:::

#### Endpoints

Accessing to a peer to peer network (blockchain, IPFS, ...) is done by connecting to one machine, called the *endpoint*, owned by one entity. The integrity of the Dapp then depends on that entity.

:::info
The Dapp should provide the possiblity to set endpoints' URL/IP addresses.
:::

The user could potentially use its own endpoints.

#### Indexers

The blockchain ecosystem tends to massively rely on indexers.

---
sidebar_position: 2
---
import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';
import NamedDivider from '@site/src/components/NamedDivider.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FA 2

Implements [TZIP-12](https://tzip.tezosagora.org/proposal/tzip-12/) norm for token, including non fungible.

FA 2 is a norm for any kind of tokens. It provides the following elements (marked 🔸):
* [`ledger`](/docs/templates/fa2#ledger-) that associates tokens and owners
* [`operator`](/docs/templates/fa2#operators-) that defines which addresses can transfer tokens on the behalf of their owners
* [`transfer`](/docs/templates/fa2#transfertxs-) entrypoint to transfer tokens while respecting allowance rules
* [`update_operators`](/docs/templates/fa2#update_operatorsupl-) to add or remove operators on tokens for transfer operations
* [`balance_of`](/docs/templates/fa2#balance_ofrequests-) [TZIP-4](https://tzip.tezosagora.org/proposal/tzip-4/) view to normalise the access to balance information

<TemplateInfo data={templates.fa2.info} />

## Overview

Below are presented implementations for 3 kinds of tokens:
1. Non fungible token (NFT): an NFT is a unit of data that can represent digital files such as art, audio, videos, items in video games and other forms of creative work
2. Fungible token
3. Multi asset (or semi-fungible) token

Besides [TZIP-12](https://tzip.tezosagora.org/proposal/tzip-12/) features, these implementations provide:
* the use of [TZIP-17](https://tzip.tezosagora.org/proposal/tzip-12/) [`permit`](/docs/templates/permits) mechanism for two-steps *fee-less* transfer
* one-step *fee-less* transfer mechanism ([`transfer_gasless`](/docs/templates/fa2#transfer_gaslessbatch))
* [`royalties`](/docs/templates/fa2#royalties) information for NFT tokens, compliant with [Rarible](https://rarible.com/) market place
* a global operator mechanism to allow one operator to manage *all* tokens of an owner ([`operator_for_all`](/docs/templates/fa2#operator_for_all), [`update_operator_for_all`](/docs/templates/fa2#update_operator_for_allupl))
* [`mint`](/docs/templates/fa2#mint) and [`burn`](/docs/templates/fa2#burn) entrypoints callable by contract owner only

## Errors

```archetype
constant CALLER_NOT_OWNER         : string = "CALLER_NOT_OWNER"
constant FA2_INSUFFICIENT_BALANCE : string = "FA2_INSUFFICIENT_BALANCE"
constant FA2_INVALID_AMOUNT       : string = "FA2_INVALID_AMOUNT"
constant FA2_NOT_OPERATOR         : string = "FA2_NOT_OPERATOR"
constant FA2_TOKEN_UNDEFINED      : string = "FA2_TOKEN_UNDEFINED"
constant SIGNER_NOT_FROM          : string = "SIGNER_NOT_FROM"
```
[`constant`](/docs/reference/declarations/inlined) [`string`](/docs/reference/types#string)

## Records

### `transfer_param` 🔸

<Constant data={templates.fa2.transfer_arg} />

## Storage

### `ledger` 🔸

Associates accounts to token information (identifier for NFT, balance of funcgible tokens).

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="NFT" >

<TabItem value="NFT">
<Constant data={templates.fa2.ledger} />
</TabItem>
<TabItem value="Fungible">
<Constant data={templates.fa2.ledger_fungible} />
</TabItem>
<TabItem value="Multi asset">
<Constant data={templates.fa2.ledger_multi} />
</TabItem>
</Tabs>

### `royalties`

<Constant data={templates.fa2.royalties} />

### `operator` 🔸

<Constant data={templates.fa2.operators} />

### `operator_for_all`

<Constant data={templates.fa2.operator_for_all} />

## Functions

### `get_from(txs)`

<Builtin data={templates.fa2.get_from_address} />

### `check_operator(txs)`

<Builtin data={templates.fa2.check_owner_and_operator} />

## Entrypoints

### `update_operators(upl)` 🔸

<Builtin data={templates.fa2.update_operators} />

### `update_operator_for_all(upl)`

<Builtin data={templates.fa2.update_operator_forall} />

### `do_transfer(txs)`

<Builtin data={templates.fa2.do_transfer} />

### `transfer_gasless(batch)`

<Builtin data={templates.fa2.transfer_gasless} />

### `transfer(txs)` 🔸

<Builtin data={templates.fa2.transfer} />

### `mint`

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="NFT" >
<TabItem value="NFT" >
<Builtin data={templates.fa2.mint} />
</TabItem>
<TabItem value="Fungible" >
<Builtin data={templates.fa2.mint_fungible} />
</TabItem>
<TabItem value="Multi Asset" >
<Builtin data={templates.fa2.mint_multi} />
</TabItem>
</Tabs>

### `burn`

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="NFT" >
<TabItem value="NFT" >
<Builtin data={templates.fa2.burn} />
</TabItem>
<TabItem value="Fungible" >
<Builtin data={templates.fa2.burn_fungible} />
</TabItem>
<TabItem value="Multi Asset" >
<Builtin data={templates.fa2.burn_multi} />
</TabItem>
</Tabs>

### `balance_of(requests)` 🔸

<Builtin data={templates.fa2.balance_of} />

## Views

### `get_royalties(tokenid)`

<Builtin data={templates.fa2.get_royalties} />





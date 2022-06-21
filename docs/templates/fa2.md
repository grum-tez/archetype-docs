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

Implements [TZIP-12](https://tzip.tezosagora.org/proposal/tzip-12/) norm for token, including non fungible. Required elements are marked with ⭐.

A Non-Fungible Token is a unit of data. NFTs can represent digital files such as art, audio, videos, items in video games and other forms of creative work.

<TemplateInfo data={templates.fa2.info} />

## Errors

```archetype
constant CALLER_NOT_OWNER         : string = "CALLER_NOT_OWNER"
constant FA2_INSUFFICIENT_BALANCE : string = "FA2_INSUFFICIENT_BALANCE"
constant FA2_INVALID_AMOUNT       : string = "FA2_INVALID_AMOUNT"
constant FA2_NOT_OPERATOR         : string = "FA2_NOT_OPERATOR"
constant FA2_TOKEN_UNDEFINED      : string = "FA2_TOKEN_UNDEFINED"
```
[`constant`](/docs/reference/declarations/inlined) [`string`](/docs/reference/types#string)

## Records

### `transfer_param` ⭐

<Constant data={templates.fa2.transfer_arg} />

## Storage

### `ledger` ⭐

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

### `operators` ⭐

<Constant data={templates.fa2.operators} />

### `operator_for_all`

<Constant data={templates.fa2.operator_for_all} />

## Functions

### `get_from(txs)`

<Builtin data={templates.fa2.get_from_address} />

### `check_operator(txs)`

<Builtin data={templates.fa2.check_owner_and_operator} />

## Entrypoints

### `update_operators(upl)` ⭐

<Builtin data={templates.fa2.update_operators} />

### `update_operator_for_all(upl)`

<Builtin data={templates.fa2.update_operator_forall} />

### `do_transfer(txs)`

<Builtin data={templates.fa2.do_transfer} />

### `transfer_gasless(batch)`

<Builtin data={templates.fa2.transfer_gasless} />

### `transfer(txs)` ⭐

<Builtin data={templates.fa2.transfer} />

### `mint(tow, tid, tmd, roy)`

<Builtin data={templates.fa2.mint} />

### `burn(tid)`

<Builtin data={templates.fa2.burn} />

### `balance_of(requests)` ⭐

<Builtin data={templates.fa2.balance_of} />

## Views

### `get_royalties(tokenid)`

<Builtin data={templates.fa2.get_royalties} />





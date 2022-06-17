---
sidebar_position: 2
---
import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# FA 2

Implements [TZIP-12](https://tzip.tezosagora.org/proposal/tzip-7/) norm for token, including non fungible.

A Non-Fungible Token is a unit of data. NFTs can represent digital files such as art, audio, videos, items in video games and other forms of creative work.

<TemplateInfo data={templates.fa2.info} />

## Storage

### `ledger`

<Constant data={templates.fa2.ledger} />

### `royalties`

<Constant data={templates.fa2.royalties} />

### `operators`

<Constant data={templates.fa2.operators} />

### `operator_for_all`

<Constant data={templates.fa2.operator_for_all} />

## Functions
## Entrypoints

### `update_operators`

<Builtin data={templates.fa2.update_operators} />

### `update_operator_for_all`

<Builtin data={templates.fa2.update_operator_forall} />


---
title: Templates
displayed_sidebar: empty
---
import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

## FA 1.2

A fungible token is basically an association table between the token owner (the account address) and the amount of tokens (a natural integer). It is possible to allow another account to transfer tokens on the token owner's behalf.

<TemplateInfo data={templates.fa12.info} />

## FA 2

A Non-Fungible Token is a unit of data. NFTs can represent digital files such as art, audio, videos, items in video games and other forms of creative work.

<TemplateInfo data={templates.fa2.info} />

## A 2

Whitelisting mechanism.

It defines transfer authorisation from users to other users. A user belongs to a list which is associated to other lists. Basically a user A can transfer to a user B if A's list is associated to the list B belongs to.

<TemplateInfo data={templates.a2.info} />

## Multi sig

This generic-purpose multi-signature contract is used to execute operations (transfer, contract entrypoints) that have been approved by a required number of managers.

The process is three steps:
* *propose* : a manager proposes a list of operations to execute
* *approve* : managers may approve the proposal
* *execute* : operations may be executed (by anyone) when the required number of approvals has been reached

<TemplateInfo data={templates.multisig.info} />
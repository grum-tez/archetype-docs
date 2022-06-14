---
sidebar_position: 4
---
import { templates } from './templates.js'
import Builtin from '@site/src/components/Builtin.js';
import Constant from '@site/src/components/Constant.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';

# Multi Sig

This generic-purpose multi-signature contract is used to execute operations (transfer, contract entrypoints) that have been approved by a required number of managers.

The process is three steps:
* *propose* : a manager proposes a list of operations to execute
* *approve* : managers may approve the proposal
* *execute* : operations may be executed (by anyone) when the required number of approvals has been reached

<TemplateInfo data={templates.multisig.info} />
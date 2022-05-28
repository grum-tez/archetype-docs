---
sidebar_position: 5
---

# Builtins

import Builtin from '@site/src/components/Builtin.js';
import { builtins } from './builtins.js';
import { MDXProvider } from "@mdx-js/react";
import NoH2 from "@site/src/components/NoH2.js";
import H3 from "@site/src/components/H3.js";

<MDXProvider components={{ h2: NoH2 }}>

## `A B C`

<H3 page="builtins" value={builtins['abs'].sig} />

<Builtin data={builtins['abs']} />

<H3 page="builtins" value={builtins['add'].sig} />

<Builtin data={builtins['add']} />

<H3 page="builtins" value={builtins['address_to_contract'].sig} />

<Builtin data={builtins['address_to_contract']} />

<H3 page="builtins" value={builtins['apply_lambda'].sig} />

<Builtin data={builtins['apply_lambda']} />

<H3 page="builtins" value={builtins['blake2b'].sig} />

<Builtin data={builtins['blake2b']} />

<H3 page="builtins" value={builtins['call_view'].sig}/>

<Builtin data={builtins['call_view']} />

<H3 page="builtins" value={builtins['ceil'].sig} />

<Builtin data={builtins['ceil']} />

<H3 page="builtins" value={builtins['check_signature'].sig} />

<Builtin data={builtins['check_signature']} />

<H3 page="builtins" value={builtins['concat'].sig} />

<Builtin data={builtins['concat']} />

<H3 page="builtins" value={builtins['concatlist'].sig} />

<Builtin data={builtins['concatlist']} />

<H3 page="builtins" value={builtins['listconcat'].sig} />

<Builtin data={builtins['listconcat']} />

<H3 page="builtins" value={builtins['contains'].sig} />

<Builtin data={builtins['contains']} />

<H3 page="builtins" value={builtins['contract_address'].sig} />

<Builtin data={builtins['contract_address']} />

<H3 page="builtins" value={builtins['create_ticket'].sig} />

<Builtin data={builtins['create_ticket']} />

## `D E F`

<H3 page="builtins" value={builtins['timestamp_to_date'].sig} />

<Builtin data={builtins['timestamp_to_date']} />

<H3 page="builtins" value={builtins['exec_lambda'].sig} />

<Builtin data={builtins['exec_lambda']} />

<H3 page="builtins" value={builtins['floor'].sig} />

<Builtin data={builtins['floor']} />

<H3 page="builtins" value={builtins['fold'].sig} />

<Builtin data={builtins['fold']} />

## `G H I`

<H3 page="builtins" value={builtins['get'].sig} />

<Builtin data={builtins['get']} />

<H3 page="builtins" value={builtins['get_entrypoint'].sig} />

<Builtin data={builtins['get_entrypoint']} />

<H3 page="builtins" value={builtins['key_to_hash_key'].sig} />

<Builtin data={builtins['key_to_hash_key']} />

<H3 page="builtins" value={builtins['key_hash_to_contract_unit'].sig} />

<Builtin data={builtins['key_hash_to_contract_unit']} />

<H3 page="builtins" value={builtins['int_to_nat'].sig} />

<Builtin data={builtins['int_to_nat']} />

<H3 page="builtins" value={builtins['is_none'].sig} />

<Builtin data={builtins['is_none']} />

<H3 page="builtins" value={builtins['is_some'].sig} />

<Builtin data={builtins['is_some']} />

## `J K L`

<H3 page="builtins" value={builtins['join_tickets'].sig} />

<Builtin data={builtins['join_tickets']} />

<H3 page="builtins" value={builtins['keccak'].sig} />

<Builtin data={builtins['keccak']} />

<H3 page="builtins" value={builtins['key_to_address'].sig} />

<Builtin data={builtins['key_to_address']} />

<H3 page="builtins" value={builtins['left'].sig} />

<Builtin data={builtins['left']} />

<H3 page="builtins" value={builtins['length'].sig} />

<Builtin data={builtins['length']} />

## `M N O`

<H3 page="builtins" value={builtins['maplist'].sig} />

<Builtin data={builtins['maplist']} />

<H3 page="builtins" value={builtins['mapoption'].sig} />

<Builtin data={builtins['mapoption']} />

<H3 page="builtins" value={builtins['max'].sig} />

<Builtin data={builtins['max']} />

<H3 page="builtins" value={builtins['min'].sig} />

<Builtin data={builtins['min']} />

<H3 page="builtins" value={builtins['make_operation'].sig} />

<Builtin data={builtins['make_operation']} />

<H3 page="builtins" value={builtins['mutez_to_nat'].sig} />

<Builtin data={builtins['mutez_to_nat']} />

<H3 page="builtins" value={builtins['none'].sig} />

<Builtin data={builtins['none']} />

<H3 page="builtins" value={builtins['nth'].sig} />

<Builtin data={builtins['nth']} />

<H3 page="builtins" value={builtins['open_chest'].sig} />

<Builtin data={builtins['open_chest']} />

<H3 page="builtins" value={builtins['get_some'].sig} />

<Builtin data={builtins['get_some']} />

## `P Q R`

<H3 page="builtins" value={builtins['pack'].sig} />

<Builtin data={builtins['pack']} />

<H3 page="builtins" value={builtins['pairing_check'].sig} />

<Builtin data={builtins['pairing_check']} />

<H3 page="builtins" value={builtins['prepend'].sig} />

<Builtin data={builtins['prepend']} />

<H3 page="builtins" value={builtins['put'].sig} />

<Builtin data={builtins['put']} />

<H3 page="builtins" value={builtins['read_ticket'].sig} />

<Builtin data={builtins['read_ticket']} />

<H3 page="builtins" value={builtins['remove'].sig} />

<Builtin data={builtins['remove']} />

<H3 page="builtins" value={builtins['reverse'].sig} />

<Builtin data={builtins['reverse']} />

<H3 page="builtins" value={builtins['right'].sig} />

<Builtin data={builtins['right']} />

## `S T U`

<H3 page="builtins" value={builtins['sapling_empty_state'].sig} />

<Builtin data={builtins['sapling_empty_state']} />

<H3 page="builtins" value={builtins['sapling_verify_update'].sig} />

<Builtin data={builtins['sapling_verify_update']} />

<H3 page="builtins" value={builtins['set_delegate'].sig} />

<Builtin data={builtins['set_delegate']} />

<H3 page="builtins" value={builtins['sha256'].sig} />

<Builtin data={builtins['sha256']} />

<H3 page="builtins" value={builtins['sha3'].sig} />

<Builtin data={builtins['sha3']} />

<H3 page="builtins" value={builtins['sha512'].sig} />

<Builtin data={builtins['sha512']} />

<H3 page="builtins" value={builtins['slice'].sig} />

<Builtin data={builtins['slice']} />

<H3 page="builtins" value={builtins['some'].sig} />

<Builtin data={builtins['some']} />

<H3 page="builtins" value={builtins['split_ticket'].sig} />

<Builtin data={builtins['split_ticket']} />

<H3 page="builtins" value={builtins['sub_mutez'].sig} />

<Builtin data={builtins['sub_mutez']} />

<H3 page="builtins" value={builtins['sub_nat'].sig} />

<Builtin data={builtins['sub_nat']} />

<H3 page="builtins" value={builtins['nat_to_string'].sig} />

<Builtin data={builtins['nat_to_string']} />

<H3 page="builtins" value={builtins['unpack'].sig} />

<Builtin data={builtins['unpack']} />

<H3 page="builtins" value={builtins['update'].sig} />

<Builtin data={builtins['update']} />

## `V W X`

<H3 page="builtins" value={builtins['voting_power'].sig} />

<Builtin data={builtins['voting_power']} />














</MDXProvider>
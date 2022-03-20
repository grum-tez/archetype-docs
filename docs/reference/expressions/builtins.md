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

<H3 page="builtins" value={builtins['absrat'].sig} />

<Builtin data={builtins['absrat']} />

<H3 page="builtins" value={builtins['add'].sig} />

<Builtin data={builtins['add']} />

<H3 page="builtins" value={builtins['addresscontract'].sig} />

<Builtin data={builtins['addresscontract']} />

<H3 page="builtins" value={builtins['applylambda'].sig} />

<Builtin data={builtins['applylambda']} />

<H3 page="builtins" value={builtins['blake2b'].sig} />

<Builtin data={builtins['blake2b']} />

<H3 page="builtins" value={builtins['callview'].sig}/>

<Builtin data={builtins['callview']} />

<H3 page="builtins" value={builtins['ceil'].sig} />

<Builtin data={builtins['ceil']} />

<H3 page="builtins" value={builtins['check_signature'].sig} />

<Builtin data={builtins['check_signature']} />

<H3 page="builtins" value={builtins['concat'].sig} />

<Builtin data={builtins['concat']} />

<H3 page="builtins" value={builtins['concatlist'].sig} />

<Builtin data={builtins['concatlist']} />

<H3 page="builtins" value={builtins['contains'].sig} />

<Builtin data={builtins['contains']} />

<H3 page="builtins" value={builtins['contract_address'].sig} />

<Builtin data={builtins['contract_address']} />

<H3 page="builtins" value={builtins['create_ticket'].sig} />

<Builtin data={builtins['create_ticket']} />

## `D E F`

<H3 page="builtins" value={builtins['date_from_timestamp'].sig} />

<Builtin data={builtins['date_from_timestamp']} />

<H3 page="builtins" value={builtins['execlambda'].sig} />

<Builtin data={builtins['execlambda']} />

<H3 page="builtins" value={builtins['floor'].sig} />

<Builtin data={builtins['floor']} />

## `G H I`

<H3 page="builtins" value={builtins['hash_key'].sig} />

<Builtin data={builtins['hash_key']} />

<H3 page="builtins" value={builtins['implicit_account'].sig} />

<Builtin data={builtins['implicit_account']} />

<H3 page="builtins" value={builtins['isnone'].sig} />

<Builtin data={builtins['isnone']} />

<H3 page="builtins" value={builtins['issome'].sig} />

<Builtin data={builtins['issome']} />

## `J K L`

<H3 page="builtins" value={builtins['join_tickets'].sig} />

<Builtin data={builtins['join_tickets']} />

<H3 page="builtins" value={builtins['keccak'].sig} />

<Builtin data={builtins['keccak']} />

<H3 page="builtins" value={builtins['key_address'].sig} />

<Builtin data={builtins['key_address']} />

<H3 page="builtins" value={builtins['length'].sig} />

<Builtin data={builtins['length']} />

## `M N O`

<H3 page="builtins" value={builtins['max'].sig} />

<Builtin data={builtins['max']} />

<H3 page="builtins" value={builtins['min'].sig} />

<Builtin data={builtins['min']} />

<H3 page="builtins" value={builtins['mkoperation'].sig} />

<Builtin data={builtins['mkoperation']} />

<H3 page="builtins" value={builtins['mutez_to_nat'].sig} />

<Builtin data={builtins['mutez_to_nat']} />

<H3 page="builtins" value={builtins['nth'].sig} />

<Builtin data={builtins['nth']} />

<H3 page="builtins" value={builtins['open_chest'].sig} />

<Builtin data={builtins['open_chest']} />

<H3 page="builtins" value={builtins['opt_get'].sig} />

<Builtin data={builtins['opt_get']} />

## `P Q R`

<H3 page="builtins" value={builtins['pack'].sig} />

<Builtin data={builtins['pack']} />

<H3 page="builtins" value={builtins['pairing_check'].sig} />

<Builtin data={builtins['pairing_check']} />

<H3 page="builtins" value={builtins['prepend'].sig} />

<Builtin data={builtins['prepend']} />

<H3 page="builtins" value={builtins['read_ticket'].sig} />

<Builtin data={builtins['read_ticket']} />

<H3 page="builtins" value={builtins['requiresome'].sig} />

<Builtin data={builtins['requiresome']} />

<H3 page="builtins" value={builtins['reverse'].sig} />

<Builtin data={builtins['reverse']} />

## `S T U`

<H3 page="builtins" value={builtins['sapling_empty_state'].sig} />

<Builtin data={builtins['sapling_empty_state']} />

<H3 page="builtins" value="sapling_verify_update">
    sapling_verify_update(<br/>&nbsp;&nbsp;s : sapling_state(n),<br/>&nbsp;&nbsp;t : sapling_transaction(n)<br/>)
</H3>

<Builtin data={builtins['sapling_verify_update']} />

<H3 page="builtins" value={builtins['setdelegate'].sig} />

<Builtin data={builtins['setdelegate']} />

<H3 page="builtins" value={builtins['sha256'].sig} />

<Builtin data={builtins['sha256']} />

<H3 page="builtins" value={builtins['sha3'].sig} />

<Builtin data={builtins['sha3']} />

<H3 page="builtins" value={builtins['sha512'].sig} />

<Builtin data={builtins['sha512']} />

<H3 page="builtins" value={builtins['slice'].sig} />

<Builtin data={builtins['slice']} />

<H3 page="builtins" value={builtins['split_ticket'].sig} />

<Builtin data={builtins['split_ticket']} />

<H3 page="builtins" value={builtins['subnat'].sig} />

<Builtin data={builtins['subnat']} />

<H3 page="builtins" value={builtins['tostring'].sig} />

<Builtin data={builtins['tostring']} />

<H3 page="builtins" value={builtins['unpack'].sig} />

<Builtin data={builtins['unpack']} />

## `V W X`

<H3 page="builtins" value={builtins['voting_power'].sig} />

<Builtin data={builtins['voting_power']} />














</MDXProvider>
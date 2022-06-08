import React from "react"

export const renamings = {
  sections: [
    { label: 'no transfer', link:'/docs/reference/declarations/entrypoint#no-transfer', desc: <div><code>refuse transfer</code></div>},
    { label: 'fail if', link: '/docs/reference/declarations/entrypoint#fail-if', desc: <div><code>failif</code></div>},
  ],
  types: [
    { label: 'asset_key', link:'/docs/reference/types#asset_key<A>', desc: <div><code>pkey</code></div>},
  ],
  instructions: [
    { label: 'do_require', link:'/docs/reference/instructions/divergent#do_requiret--bool-e--t', desc: <div><code>dorequire</code></div>},
    { label: 'do_fail_if', link:'/docs/reference/instructions/divergent#do_fail_ift--bool-e--t', desc: <div><code>dofailif</code></div>},
  ],
  constants: [
    { label: 'chain_id', link:'/docs/reference/expressions/constants#chain_id', desc: <div><code>chainid</code></div>},
    { label: 'self_address', link:'/docs/reference/expressions/constants#self_address', desc: <div><code>selfaddress</code></div>},
  ],
  builtins: [
    { label: 'call_view', link:'/docs/reference/expressions/builtins#call_view<T>(a%20:%20address,%20id%20:%20string,%20arg%20:%20X)', desc: <div><code>callview</code></div>},
    { label: 'contract_to_address', link:'/docs/reference/expressions/builtins#contract_to_address(c%20:%20contract<T>)', desc: <div><code>contract_address</code></div>},
    { label: 'int_to_date', link:'/docs/reference/expressions/builtins#int_to_date(i%20:%20int)', desc: <div><code>date_from_timestamp</code></div>},
    { label: 'key_to_key_hash', link:'/docs/reference/expressions/builtins#key_to_key_hash(k%20:%20key)', desc: <div><code>hash_key</code></div>},
    { label: 'key_hash_to_contract', link:'/docs/reference/expressions/builtins#key_hash_to_contract(pkh%20:%20key_hash)', desc: <div><code>implicit_account</code></div>},
    { label: 'int_to_nat', link:'/docs/reference/expressions/builtins#int_to_nat(i%20:%20int)', desc: <div><code>isnat</code></div>},
    { label: 'is_none', link:'/docs/reference/expressions/builtins#is_none(o%20:%20option<T>)', desc: <div><code>isnone</code></div>},
    { label: 'is_some', link:'/docs/reference/expressions/builtins#is_some(o%20:%20option<T>)', desc: <div><code>issome</code></div>},
    { label: 'key_to_address', link:'/docs/reference/expressions/builtins#key_to_address(k%20:%20key)', desc: <div><code>key_address</code></div>},
    { label: 'make_operation', link:'/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract<T>,%20arg%20:%20T)', desc: <div><code>mkoperation</code></div>},
    { label: 'get_some', link:'/docs/reference/expressions/builtins#get_some(o%20:%20option<T>)', desc: <div><code>opt_get</code></div>},
    { label: 'nat_to_string', link:'/docs/reference/expressions/builtins#nat_to_string(n%20:%20nat)', desc: <div><code>to_string</code></div>},
    { label: 'get_entrypoint', link:'/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)', desc: <div><code>entrypoint</code></div>},
  ],
  assets: [
    { label: 'get', link:'/docs/reference/expressions/asset#agetk--asset_keya', desc: <div><code>get_opt</code></div>},
    { label: 'add_update', link:'/docs/reference/expressions/asset#agetk--asset_keya', desc: <div><code>addupdate</code></div>},
    { label: 'remove_if', link:'/docs/reference/instructions/asset#aremove_ifp', desc: <div><code>removeif</code></div>},
    { label: 'remove_all', link:'/docs/reference/instructions/asset#aremove_all', desc: <div><code>clear</code></div>},
  ],
  errors: [
    { label: '"INVALID_CALLER"', desc: <div><code>"InvalidCaller"</code></div> },
    { label: '"INVALID_SOURCE"', desc: <div><code>"InvalidSource"</code></div> },
    { label: '"INVALID_CONDITION"', desc: <div><code>"InvalidCondition"</code></div> },
    { label: '"NOT_FOUND"', desc: <div><code>"NotFound"</code></div> },
    { label: '"ASSET_NOT_FOUND"', desc: <div><code>"AssetNotFound"</code></div> },
    { label: '"KEY_EXISTS"', desc: <div><code>"KeyExists"</code></div> },
    { label: '"KEY_EXISTS_OR_NOT_FOUND"', desc: <div><code>"KeyExistsOrNotFound"</code></div> },
    { label: '"KEY_EXISTS_OR_NOT_FOUND"', desc: <div><code>"KeyExistsOrNotFound"</code></div> },
    { label: '"KEY_EXISTS_OR_NOT_FOUND"', desc: <div><code>"KeyExistsOrNotFound"</code></div> },
    { label: '"OUT_OF_BOUND"', desc: <div><code>"OutOfBound"</code></div> },
    { label: '"DIV_BY_ZERO"', desc: <div><code>"divbyzero"</code></div> },
    { label: '"NAT_NEG_ASSIGN"', desc: <div><code>"divbyzero"</code></div> },
    { label: '"NO_TRANSFER"', desc: <div><code>"NoTransfer"</code></div> },
    { label: '"INVALID_STATE"', desc: <div><code>"InvalidState"</code></div> },
  ]
}

/*
section

refuse transfer -> no transfer
failif -> fail if


instruction

dorequire -> do_require
dofailif -> do_fail_if


constant

chainid -> chain_id
selfaddress -> self_address


builtin

callview -> call_view
contract_address -> contract_to_address
date_from_timestamp -> timestamp_to_date
getopt -> get
hash_key -> key_to_key_hash
implicit_account -> key_hash_to_contract_unit
isnat -> int_to_nat
isnone -> is_none
issome -> is_some
key_address -> key_to_address
mkoperation -> make_operation
opt_get -> get_some
require_some -> get_some with 2 arguments
timestamp_to_date -> int_to_date
to_string -> nat_to_string
entrypoint -> get_entrypoint

asset

getopt -> get
addupdate -> add_update
removeif -> remove_if
clear -> remove_all
removeclear -> remove_aggregate

fail

InvalidCaller -> INVALID_CALLER
InvalidSource -> INVALID_SOURCE
InvalidCondition -> INVALID_CONDITION
NotFound -> NOT_FOUND
AssetNotFound -> ASSET_NOT_FOUND
KeyExists -> KEY_EXISTS
KeyExistsOrNotFound -> KEY_EXISTS_OR_NOT_FOUND
OutOfBound -> OUT_OF_BOUND
divbyzero -> DIV_BY_ZERO
NegResult -> NAT_NEG_ASSIGN
NatAssign -> NAT_NEG_ASSIGN
NoTransfer -> NO_TRANSFER
InvalidState -> INVALID_STATE



REMOVE

to_nat
require_entrypoint

*/
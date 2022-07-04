import Link from '@docusaurus/Link';
import React from "react";

export const COMPARABLE = 0
export const PASSABLE = 1
export const STORABLE = 2
export const PACKABLE = 3

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference'

const declaration_prefix = '/docs/reference/declarations/entrypoint#'
const instruction_prefix = '/docs/reference/instructions'
const constant_prefix = '/docs/reference/expressions/constants#'
const operator_prefix = '/docs/reference/expressions/operators/arithmetic#'
const builtin_prefix = '/docs/reference/expressions/builtins#'
const asset_prefix = '/docs/reference/expressions/asset#'

import AggregateDesc from '../../src/components/desc/aggregate_desc.md'
import PartitionDesc from '../../src/components/desc/partition_desc.md'
import BigmapDesc from '../../src/components/desc/bigmap_desc.md'
import AssetRecordDesc from '../../src/components/desc/asset_value_desc.md'
import IterableBigMapDesc from '../../src/components/desc/iterable_big_map_desc.md'
import AssetContainer from '../../src/components/desc/asset_container.md'
import AssetKey from '../../src/components/desc/asset_key.md'
import AssetView from '../../src/components/desc/asset_view.md'

export const types = {
  address :
  {
    desc: <div>Account or contract address on the Tezos blockchain. <p></p>An address is formed of a prefix (<code>tz1</code> <code>tz2</code> <code>tz3</code> and <code>KT1</code> for contracts) followed by a Base58 encoded hash and terminated by a 4-byte checksum.</div>,
    link: '#address',
    examples: [ 'tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg', 'tz2BFTyPeYRzxd5aiBchbXN3WCZhx7BqbMBq', 'tz3hFR7NZtjT2QtzgMQnWb4xMuD6yt2YzXUt', 'KT1VMCj69PwwKK7aRLRPnWoYh4X1xQqk2Vm2' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "address",
    michelson_ref_url: michelson_ref_base_url + '/#type-address',
    related: [
      { keyword: 'sourced by', link: declaration_prefix + 'sourced-by' },
      { keyword: 'called by', link: declaration_prefix + 'called-by' },
      { keyword : 'transfer', link : instruction_prefix + '/operation#transfer' },
      { keyword : 'caller', link : constant_prefix + 'caller' },
      { keyword : 'source', link : constant_prefix + 'source' },
      { keyword : 'self_address', link : constant_prefix + 'self_address' },
      { keyword : '=', link : operator_prefix + 'a--b-7' },
      { keyword : 'call_view', link : builtin_prefix + 'call_view<T>(a%20:%20address,%20id%20:%20string,%20arg%20:%20X)' },
      { keyword : 'set_delegate', link : builtin_prefix + 'set_delegate(opkh%20:%20option<key_hash>)' },
      { keyword : 'contract_to_address', link : builtin_prefix + 'contract_to_address(c%20:%20contract<T>)' },
      { keyword : 'address_to_contract', link : builtin_prefix + 'address_to_contract(a%20:%20address)' },
      { keyword : 'get_entrypoint', link : '/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)' },
      { keyword : 'key_to_address', link : builtin_prefix + 'key_to_address(k%20:%20key)' },
      { keyword : 'read_ticket', link : builtin_prefix + 'read_ticket(t%20:%20ticket<T>)' },
    ],
  },
  aggregate :
  {
    desc: <AggregateDesc />,
    link: '#aggregate<A>',
    examples: [ '[ "1G1AF1F57A7192174" ]' ],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    related: [
      { keyword: "Asset", link:"/docs/asset", code : false },
      { keyword: "add", link: instruction_prefix + '/asset#aadda' },
      { keyword: "remove", link: instruction_prefix + '/asset#aremovek' },
      { keyword: "remove_if", link: instruction_prefix + '/asset#aremove_ifp' },
      { keyword: "remove_all", link: instruction_prefix + '/asset#aremove_all' },
      { keyword: "clear", link: instruction_prefix + '/asset#aclear' },
      { keyword: "[]", link: asset_prefix + 'ak--asset_keyaf' },
      { keyword: "contains", link: asset_prefix + 'acontainsk--asset_keya' },
      { keyword: "count", link: asset_prefix + 'acount' },
      { keyword: "nth", link: asset_prefix + 'anthi--nat' },
      { keyword: "sort", link: asset_prefix + 'asortf' },
      { keyword: "sum", link: asset_prefix + 'asumf' },
      { keyword: "select", link: asset_prefix + 'aselectp' },
      { keyword: "head", link: asset_prefix + 'aheadi--nat' },
      { keyword: "tail", link: asset_prefix + 'ataili--nat'},
    ],
  },
  asset_container : {
    desc: <AssetContainer />,
    link: '#asset_container<A>',
    examples: [],
    parameters: [
      { keyword: 'A', type: 'asset', desc: 'Any declared asset.' },
    ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    related: [
      { keyword: "Asset", link:"/docs/asset" },
      { keyword: "asset_key", link:"/docs/reference/types#asset_key<A>" },
      { keyword: "asset_value", link:"/docs/reference/types#asset_value<A>" },
    ]
  },
  asset_key : {
    desc: <AssetKey />,
    link: '#asset_key<A>',
    examples: [   ],
    parameters: [
      { keyword: 'A', type: 'asset', desc: 'Any declared asset.' },
    ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    related: [
      { keyword: "Asset", link:"/docs/asset" },
      { keyword: "asset_container", link:"/docs/reference/types#asset_container<A>" },
      { keyword: "asset_value", link:"/docs/reference/types#asset_value<A>" },
    ],
  },
  asset_value : {
    desc: <AssetRecordDesc />,
    link: '#asset_value<A>',
    examples: [ ],
    parameters: [
      { keyword: 'A', type: 'asset', desc: 'Any declared asset.' },
    ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    related: [
      { keyword: "Asset", link:"/docs/asset" },
      { keyword: "asset_container", link:"/docs/reference/types#asset_container<A>" },
      { keyword: "asset_key", link:"/docs/reference/types#asset_key<A>" },
      { keyword: "[]", link: asset_prefix + 'ak--asset_keya' },
      { keyword: "get", link: asset_prefix + 'agetk--asset_keya' },
    ],
  },
  asset_view :
  {
    desc: <AssetView />,
    link: '#asset_view<A>',
    examples: [ '[]' ],
    tags: [ PASSABLE, PACKABLE ],
    related: [
      { keyword: "Asset", link:"/docs/asset", code : false },
      { keyword: "contains", link: asset_prefix + 'acontainsk--asset_keya' },
      { keyword: "count", link: asset_prefix + 'acount' },
      { keyword: "nth", link: asset_prefix + 'anthi--nat' },
      { keyword: "sort", link: asset_prefix + 'asortf' },
      { keyword: "sum", link: asset_prefix + 'asumf' },
      { keyword: "select", link: asset_prefix + 'aselectp' },
      { keyword: "head", link: asset_prefix + 'aheadi--nat' },
      { keyword: "tail", link: asset_prefix + 'ataili--nat'},
    ]
  },
  big_map :
  {
    desc: <BigmapDesc />,
    link: '#big_map<K,%20V>',
    examples: [ `[]`, `[ ("#1G1AF1F57A7192174", 5); ("#2F4AH1J77O7132095", 10) ]` ],
    tags: [ PASSABLE, STORABLE ],
    michelson: "big_map",
    michelson_ref_url: michelson_ref_base_url + '/#type-big_map',
    related: [
      { keyword: "Map", link:"/docs/language-basics/container#map", code : false },
      { keyword: "[]", link: "/docs/reference/expressions/operators/access#map" },
      { keyword: "put", link: instruction_prefix + '/containers#mputk-v' },
      { keyword: "remove", link: instruction_prefix + '/containers#mremovek' },
      { keyword: "update", link: instruction_prefix + '/containers#mupdatek--k-o--optiont' },
      { keyword: "put", link: '/docs/reference/expressions/builtins#put(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20V)' },
      { keyword: "remove", link: '/docs/reference/expressions/builtins#remove(c%20:%20C,%20i%20:%20T)' },
      { keyword: "update", link: '/docs/reference/expressions/builtins#update(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20option<T>)' },
      { keyword: "contains", link:"/docs/reference/expressions/builtins#contains(c%20:%20C,%20e%20:%20T)"},
      { keyword: "map", link:"/docs/reference/expressions/builtins#map<K,%20V>"},
      { keyword: "make_big_map", link: "/docs/reference/expressions/builtins#make_big_map<K,%20V>(m)"},
      { keyword: "iterable_big_map", link : "/docs/reference/types#iterable_big_map<K,%20V>" },
    ],
  },
  bls12_381_fr :
  {
    desc: <div>Multplicative scalar for the BLS12_381 curves <Link to="/docs/reference/types#bls12_381_g1">g1</Link> and <Link to="/docs/reference/types#bls12_381_g2">g2</Link>.<br/>Literals can either be a raw bytes representation or a natural.</div>,
    link: '#bls12_381_fr',
    examples: [ '0x02', '2' ],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "bls12_381_fr",
    michelson_ref_url: michelson_ref_base_url + '/#type-bls12_381_fr',
    related: [
      { keyword: "Elliptic curves", link:"/docs/language-basics/crypto#elliptic-curves" },
      { keyword: "bls12_381_g1", link:"/docs/reference/types#bls12_381_g1" },
      { keyword: "bls12_381_g2", link:"/docs/reference/types#bls12_381_g2" },
      { keyword: "pairing_check", link:"/docs/reference/expressions/builtins#pairing_check(l%20:%20list<bls12_381_g1%20*%20bls12_381_g2>)" },
    ],
  },
  bls12_381_g1 :
  {
    desc: <div>Point on the elliptic curve <Link to="/docs/reference/types#bls12_381_g1">g1</Link>.</div>,
    link: '#bls12_381_g1',
    examples: [ '0x063bd6e11e2fcaac1dd8cf68c6b1925a73c3c583e298ed37c41c3715115cf96358a42dbe85a0228cbfd8a6c8a8c54cd015b5ae2860d1cc47f84698d951f14d9448d03f04df2ca0ffe609a2067d6f1a892163a5e05e541279134cae52b1f23c6b' ],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "bls12_381_g1",
    michelson_ref_url: michelson_ref_base_url + '/#type-bls12_381_g1',
    related: [
      { keyword: "Elliptic curves", link:"/docs/language-basics/crypto#elliptic-curves" },
      { keyword: "bls12_381_fr", link:"/docs/reference/types#bls12_381_fr" },
      { keyword: "bls12_381_g2", link:"/docs/reference/types#bls12_381_g2" },
      { keyword: "pairing_check", link:"/docs/reference/expressions/builtins#pairing_check(l%20:%20list<bls12_381_g1%20*%20bls12_381_g2>)" },
    ],
  },
  bls12_381_g2 :
  {
    desc: <div>Point on the elliptic curve <Link to="/docs/reference/types#bls12_381_g2">g2</Link>.</div>,
    link: '#bls12_381_g2',
    examples: [ '0x10c6d5cdca84fc3c7f33061add256f48e0ab03a697832b338901898b650419eb6f334b28153fb73ad2ecd1cd2ac67053161e9f46cfbdaf7b1132a4654a55162850249650f9b873ac3113fa8c02ef1cd1df481480a4457f351d28f4da89d19fa405c3d77f686dc9a24d2681c9184bf2b091f62e6b24df651a3da8bd7067e14e7908fb02f8955b84af5081614cb5bc49b416d9edf914fc608c441b3f2eb8b6043736ddb9d4e4d62334a23b5625c14ef3e1a7e99258386310221b22d83a5eac035c' ],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "bls12_381_g2",
    michelson_ref_url: michelson_ref_base_url + '/#type-bls12_381_g2',
    related: [
      { keyword: "Elliptic curves", link:"/docs/language-basics/crypto#elliptic-curves" },
      { keyword: "bls12_381_fr", link:"/docs/reference/types#bls12_381_fr" },
      { keyword: "bls12_381_g1", link:"/docs/reference/types#bls12_381_g1" },
      { keyword: "pairing_check", link:"/docs/reference/expressions/builtins#pairing_check(l%20:%20list<bls12_381_g1%20*%20bls12_381_g2>)" },
    ],
  },
  bool :
  {
    desc: <div>Boolean value <code>true</code> or <code>false</code> for logical tests.</div>,
    link: '#bool',
    examples: [ 'true', 'false' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "bool",
    michelson_ref_url: michelson_ref_base_url + '/#type-bool',
    related: [
      { keyword: 'if', link:'/docs/reference/instructions/control#if' },
      { keyword: 'while', link:'/docs/reference/instructions/control#while'},
      { keyword: 'do_require', link:'/docs/reference/instructions/divergent#do_requiret--bool-e--t'},
      { keyword: 'do_fail_if', link:'/docs/reference/instructions/divergent#do_fail_ift--bool-e--t'},
      { keyword: 'remove_if', link:'/docs/reference/instructions/asset#aremove_ifp'},
      { keyword: '&=', link:'/docs/reference/instructions/assignment#a--b-4'},
      { keyword: '|=', link:'/docs/reference/instructions/assignment#a--b-5'},
      { keyword: 'and', link:'/docs/reference/expressions/operators/arithmetic#a-and-b'},
      { keyword: 'or', link:'/docs/reference/expressions/operators/arithmetic#a-or-b'},
      { keyword: 'xor', link:'/docs/reference/expressions/operators/arithmetic#a-xor-b'},
      { keyword: 'not', link:'/docs/reference/expressions/operators/arithmetic#not-a'},
      { keyword: '=', link:'/docs/reference/expressions/operators/arithmetic#a--b-7'},
      { keyword: '<>', link:'/docs/reference/expressions/operators/arithmetic#a--b-8'},
      { keyword: '<=>', link:'/docs/reference/expressions/operators/arithmetic#a--b-13'},
      { keyword: 'if', link:'/docs/reference/expressions/controls#if-then-else'},
      { keyword: '?:', link:'/docs/reference/expressions/controls#a--b--c'},
      { keyword: 'check_signature', link:'/docs/reference/expressions/builtins#check_signature(k%20:%20key,%20s%20:%20signature,%20b%20:%20bytes)'},
      { keyword: 'contains', link:'/docs/reference/expressions/builtins#contains(c%20:%20C,%20e%20:%20T)'},
      { keyword: 'greedy_and', link: '/docs/reference/expressions/builtins#greedy_and(a%20:%20bool,%20b%20:%20bool)' },
      { keyword: 'greedy_or', link:'/docs/reference/expressions/builtins#greedy_or(a%20:%20bool,%20b%20:%20bool)' },
      { keyword: 'is_none', link:'/docs/reference/expressions/builtins#is_none(o%20:%20option<T>)'},
      { keyword: 'is_some', link:'/docs/reference/expressions/builtins#is_some(o%20:%20option<T>)'},
      { keyword: 'open_chest', link:'/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)'},
      { keyword: 'pairing_check', link:'/docs/reference/expressions/builtins#pairing_check(l%20:%20list<bls12_381_g1%20*%20bls12_381_g2>)'},
      { keyword: 'select', link:'/docs/reference/expressions/asset#aselectp'},

    ],
  },
  bytes :
  {
    desc: <div>Array of byte values to represent any serialised data. It is used for signatures and hash values.</div>,
    link: '#bytes',
    examples: [ '0x00', '0x050002', '0x'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "bytes",
    michelson_ref_url: michelson_ref_base_url + '/#type-bytes',
    related: [
      { keyword: 'concat', link: '/docs/reference/expressions/builtins#bytes' },
      { keyword: 'length', link: '/docs/reference/expressions/builtins#length(o%20:%20T)' },
      { keyword: 'slice', link: '/docs/reference/expressions/builtins#slice(s%20:%20T,%20o%20:%20nat,%20l%20:%20nat)' },
      { keyword: 'pack', link: '/docs/reference/expressions/builtins#pack(o%20:%20T)' },
      { keyword: 'unpack', link: '/docs/reference/expressions/builtins#unpack<T>(b%20:%20bytes)' },
      { keyword: 'sha256', link: '/docs/reference/expressions/builtins#sha256(b%20:%20bytes)' },
      { keyword: 'sha3', link: '/docs/reference/expressions/builtins#sha3(b%20:%20bytes)' },
      { keyword: 'sha512', link: '/docs/reference/expressions/builtins#sha512(b%20:%20bytes)' },
      { keyword: 'blake2b', link: '/docs/reference/expressions/builtins#blake2b(b%20:%20bytes)' },
      { keyword: 'keccak', link: '/docs/reference/expressions/builtins#keccak(b%20:%20bytes)' },
      { keyword: 'check_signature', link: '/docs/reference/expressions/builtins#check_signature(k%20:%20key,%20s%20:%20signature,%20b%20:%20bytes)' },
      { keyword: 'open_chest', link: '/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)' },
    ],
  },
  chain_id :
  {
    desc: <div>Type of the chain network identifier.</div>,
    link: '#chain_id',
    examples: [ '"NetXdQprcVkpaWU"', 'chain_id' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "chain_id",
    michelson_ref_url: michelson_ref_base_url + '/#type-chain_id',
    related: [
      { keyword: "chain_id", link:"/docs/reference/expressions/constants#chain_id" }
    ],
  },
  chest :
  {
    desc: <div>Timelocked encrypted value. It is generated off-chain with the <Link to="https://github.com/completium/timelock-utils">timelock-utils</Link>, and decrypted on-chain with the <Link to="/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)"><code>open_chest</code></Link> builtin.</div>,
    link: '#chest',
    examples: [ '0xc5ecdde89eb8c1e7aaeb85abb8f5e5cef3b4fa80c4aee2fccbf0a78ce0debaa5e9ddede3ddfbd9abdea28cc7dc99e6d3a9baf3cbae9adaaabc89cbc39e97e2c7a6cba99197d19ba09ddfd181afc997ffbcc5acb2d29ecbb698c2cacbdd83d1b4ced0bffe9cd78295b3fba4d9f9d5f4d4ec9ad3c7e1a8eeb9dba5cbd8a2dbf29af8e4a4c1e4b1edacf98fccefaef9fea4f0bacdd38ecbfe81c3f9839b9e9ab8fbf5f1eabac48a9f8ca7c588eefe94d1f18bd9bcee9aecde8dd285cf9098f4e1a7eec787f3a0e0ff9cd0ce8ec5a2a4e5ecb08fce899eb5baa397fabf90de9397cebc81bbdfb386e6b4da9fd8fdd19ed9f8d684c782b0aacfeebae4f6e7d1c5c1e6a093c68081cf83b991b4ecd7b38aee92deddcad79eb9abe0a0a0c6b5909dc58495f69445fff5ae9cefe8b8beb2fb86ccf5c9ad91989bdad8a3cfbedaffa2de8bf19dc6ac8cbc8a9584fa9f85f9ba958fc6bbc09ac8e7d5f0fdb98b86c1c7d59ad7c6dfc2d2cefaf5d9db909bf0e3acd3ccc792bc9bccbab4a4febda9b685dbc39ea2a4a7b69990d3abd8b9b3d7dbc581b984f3e08a98f7f7f0e697cc8dfd88edc8c3ca8dc3b2a9ccf6cdd6d0efcc848bc8ead5858bbabfcfc1c8ecea84fd9b96a5e4eabb8c918dafe6f78d83e8e1c2e5f8ee88a4ee8dcaeeafffebfcbbfda1e9eb86c582f2eedd9299cbc0a7fce083ced8c8ddb0e7eaacb696c1fccdadcdc8e3c6f7b9de84eece9bb7919094fef4fdf6efd8b1ba8bbecb9380add4f59ddbf9a19f95facc84e9d0a99bfa93f1fcc3a0fbde9b9ce0c7e8dec6e8d1dfa7dda6f490bb9580abfdbcc0e202e5ff731c3c17d080ee430edd30979a47aa653656e11e593800000015c2ca2a23b732a72932611618ad9ea324986377591e' ],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "chest",
    michelson_ref_url: michelson_ref_base_url + '/#type-chest',
    related: [
      { keyword: "Timelock", link:"/docs/language-basics/crypto#timelock" },
      { keyword: "chest_key", link:"/docs/reference/types#chest_key" },
      { keyword: "open_chest", link:"/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)" },
    ],
  },
  chest_key :
  {
    desc: <div>Key used by <Link to="/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)"><code>open_chest</code></Link> builtin to decrypt a <Link to="/docs/reference/types#chest"><code>chest</code></Link> value. It is generated off-chain with the <Link to="https://github.com/completium/timelock-utils">timelock-utils</Link> together with the chest value.</div>,
    link: '#chest_key',
    examples: [ '0xa0aceddfb3c9fbe1b8c382c7d5a7dedbe2e5adf9edcfc3e9d084caa6aeb9818ff1e985cb9efe8fa089ceeaa0f5d0bcb583e2f29196f2d3908fffffdcda868faffcb78fb697e7eaf3e7dca9d4b5dda2c3e4f8adf8abf484ecae85f7d6e0f2d28cb69af1d7b19082e8d8d7ba96e7e1e0bb8ac9b9fcf0a9e5b7c1a499c4faf4c8a3a9c8e4d09aa780eac6cee1b78a97a3e983abf9a5f1e8d2a2a2b5e3bcb8c4effeb7a3a68a85a497cd91c9a2c096c3f596deb8d1aca3a5aff28effb8cfc9c7ced892e3a7c09deeb8c8ec9387a3b384b5c8bccaafc7a9a2c1cfd8c7becfd7d6828a9af8f4988fe4ead3b59ecfb8ff8cabf8be90d4c8bdbddfce9cd7c2bb81edc4b7ad80a59a978f8c9debe7aaf08cf0c588f3eaade6b9f4e4e6edf1ed9c9988e48d9ba0aa8f01d18bac92b886db9dd798b5f6fdc891a28da2c4c48da1918897a2b7c2dfa0b78ab8e291b68fb1a2bfa5e8b88e9cabb0b5b0feabcffc9cfeee888ac4afeed9dc8bf5a4eaa9ae89a3838cf6cfd4f8acff8fa7aef7a9889fbbc7d8f6dde4edf3e58096e580e299e5b082b9cf85f3fe8ac6c0998eb1bcbab9bfb8fba39faea7bce0f6fed9ea86dfdad58cf7cbc7fcc4ecf7e2e898d3b19582e38c8092b7e4a0cddc83eb8bc38d91fefed6be869496b8e4fc99d5fae5c6a2b2dcabe2a4ea85b68b87b182d7e8cac29fe0b9efd6d0eb999ffa98aaaf9bf09fe7c4b39d81db97e4e7bbaef0e3bfedd69d9089bc8d91b292afa6c8b389fc9fb7aaa8decab6d9b493a6eafaa5baffe8fb85f2d483ecd1f2d1e58f938df9d8d5e385fe96c5f58ae1e0b09bf2b3c2931f' ],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "chest_key",
    michelson_ref_url: michelson_ref_base_url + '/#type-chest_key',
    related: [
      { keyword: "Timelock", link:"/docs/language-basics/crypto#timelock" },
      { keyword: "chest", link:"/docs/reference/types#chest" },
      { keyword: "open_chest", link:"/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)" },    ],
  },
  contract :
  {
    desc: <div>Destination value of an <Link to="/docs/reference/types#operation">operation</Link>; it represents either an account's <Link to="/docs/reference/types#address">address</Link>, a contract's address, or a contract <Link to="/docs/reference/declarations/entrypoint">entrypoint</Link>.<br></br>
    It is returned by the <Link to="/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)"><code>get_entrypoint</code></Link> builtin, or by the conversion builtins <Link to="/docs/reference/expressions/builtins#contract_to_address(c%20:%20contract<T>)"><code>address_to_contract</code></Link> and <Link to="/docs/reference/expressions/builtins#key_hash_to_contract(pkh%20:%20key_hash)"><code>key_hash_to_contract</code></Link></div>,
    link: '#contract<T>',
    examples: [],
    tags: [ PASSABLE, PACKABLE ],
    michelson: "contract",
    michelson_ref_url: michelson_ref_base_url + '/#type-contract',
    related: [
      { keyword: "Operation", link:"/docs/reference/instructions/operation#low-level-instruction" },
      { keyword: "address_to_contract", link:"/docs/reference/expressions/builtins#address_to_contract(a%20:%20address)" },
      { keyword: "contract_to_address", link:"/docs/reference/expressions/builtins#contract_to_address(c%20:%20contract<T>)" },
      { keyword: "get_entrypoint", link:"/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)" },
      { keyword: "key_hash_to_contract", link:"/docs/reference/expressions/builtins#key_hash_to_contract(pkh%20:%20key_hash)" },
      { keyword: "make_operation", link:"/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract<T>,%20arg%20:%20T)" },
    ],
  },
  date :
  {
    desc: <div>Date in <Link to="https://en.wikipedia.org/wiki/ISO_8601">ISO_8601</Link> format.</div>,
    link: '#date',
    examples: [ '2019-01-01', '2019-01-01T01:02:03', '2019-01-01T01:02:03Z', '2019-01-01T00:00:00+01:00', '2019-01-01T00:00:00-05:30'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "timestamp",
    michelson_ref_url: michelson_ref_base_url + '/#type-timestamp',
    related: [
      { keyword: 'now', link: '/docs/reference/expressions/constants#now' },
      { keyword: '+', link: '/docs/reference/expressions/operators/arithmetic#a--b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#a---b' },
      { keyword: '=', link:'/docs/reference/expressions/operators/arithmetic#a--b-7'},
      { keyword: '<>', link:'/docs/reference/expressions/operators/arithmetic#a--b-8'},
      { keyword: '<', link:'/docs/reference/expressions/operators/arithmetic#a--b-9'},
      { keyword: '<=', link:'/docs/reference/expressions/operators/arithmetic#a--b-10'},
      { keyword: '>', link:'/docs/reference/expressions/operators/arithmetic#a--b-11'},
      { keyword: '>=', link:'/docs/reference/expressions/operators/arithmetic#a--b-12'},
      { keyword: '<=>', link:'/docs/reference/expressions/operators/arithmetic#a--b-13'},
      { keyword: '+=', link:'/docs/reference/instructions/assignment#a--b-1'},
      { keyword: '-=', link:'/docs/reference/instructions/assignment#a---b'},
      { keyword: 'int_to_date', link:'/docs/reference/expressions/builtins#int_to_date(i%20:%20int)'},
    ],
  },
  duration :
  {
    desc: <div>Number of seconds expressed in seconds, minutes, hours or weeks, for operations on dates.</div>,
    link: '#duration',
    examples: [ '10s', '5m', '18h', '3d', '1w', '5m10s', '5d12h', '3w8d4h34m18s' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "int",
    michelson_ref_url: michelson_ref_base_url + '/#type-timestamp',
    related: [
      { keyword: '+', link: '/docs/reference/expressions/operators/arithmetic#a--b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#a---b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#--a' },
      { keyword: '=', link:'/docs/reference/expressions/operators/arithmetic#a--b-7'},
      { keyword: '<>', link:'/docs/reference/expressions/operators/arithmetic#a--b-8'},
      { keyword: '<', link:'/docs/reference/expressions/operators/arithmetic#a--b-9'},
      { keyword: '<=', link:'/docs/reference/expressions/operators/arithmetic#a--b-10'},
      { keyword: '>', link:'/docs/reference/expressions/operators/arithmetic#a--b-11'},
      { keyword: '>=', link:'/docs/reference/expressions/operators/arithmetic#a--b-12'},
      { keyword: '<=>', link:'/docs/reference/expressions/operators/arithmetic#a--b-13'},
      { keyword: '+=', link:'/docs/reference/instructions/assignment#a--b-1'},
      { keyword: '-=', link:'/docs/reference/instructions/assignment#a---b'},
    ],
  },
  enum :
  {
    desc: 'Union of several types: its value is one of the possible declared values; values can be parameterized.',
    link: '#enum',
    examples: [ `enum color = | Red | Green | Blue`, `Red`, `Green`, `Blue` ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: [ "or" ],
    michelson_ref_url: michelson_ref_base_url + '/#or',
    related: [
      { keyword: "Enum", link:"/docs/language-basics/composite#enum" },
      { keyword: "match with", link:"/docs/reference/instructions/control#enumeration" },
      { keyword: "match with", link:"/docs/reference/expressions/controls#match-with" },
    ],
  },
  event :
  {
    desc: <div>Type of event to be emitted, as explained in this <Link to="/blog/events">blog entry</Link>.</div>,
    link: '#event',
    examples: [],
    tags: [ ],
    related: [
      { keyword: "Event", link: "/blog/events" },
      { keyword: "emit", link: "/docs/reference/instructions/operation#emit" }
    ],
  },
  int :
  {
    desc: <div>Arbitrary-precision integer values (no arithmetic overflow).</div>,
    link: '#int',
    examples: [ '0i', '2i', '123i', '-1', '100_000i' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "int",
    michelson_ref_url: michelson_ref_base_url + '/#type-int',
    related: [
      { keyword: "nat", link:"/docs/reference/types#nat" },
      { keyword: '+', link: '/docs/reference/expressions/operators/arithmetic#a--b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#a---b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#--a' },
      { keyword: '*', link: '/docs/reference/expressions/operators/arithmetic#a--b-1' },
      { keyword: '/', link: '/docs/reference/expressions/operators/arithmetic#a--b-2' },
      { keyword: 'div', link: '/docs/reference/expressions/operators/arithmetic#a-div-b' },
      { keyword: '%', link: '/docs/reference/expressions/operators/arithmetic#a--b-3' },
      { keyword: '/%', link: '/docs/reference/expressions/operators/arithmetic#a--b-4' },
      { keyword: '=', link:'/docs/reference/expressions/operators/arithmetic#a--b-7'},
      { keyword: '<>', link:'/docs/reference/expressions/operators/arithmetic#a--b-8'},
      { keyword: '<', link:'/docs/reference/expressions/operators/arithmetic#a--b-9'},
      { keyword: '<=', link:'/docs/reference/expressions/operators/arithmetic#a--b-10'},
      { keyword: '>', link:'/docs/reference/expressions/operators/arithmetic#a--b-11'},
      { keyword: '>=', link:'/docs/reference/expressions/operators/arithmetic#a--b-12'},
      { keyword: '<=>', link:'/docs/reference/expressions/operators/arithmetic#a--b-13'},
      { keyword: '+=', link:'/docs/reference/instructions/assignment#a--b-1'},
      { keyword: '-=', link:'/docs/reference/instructions/assignment#a---b'},
      { keyword: '*=', link:'/docs/reference/instructions/assignment#a--b-2'},
      { keyword: '/=', link:'/docs/reference/instructions/assignment#a--b-3'},
      { keyword: 'abs', link:'/docs/reference/expressions/builtins#abs(t%20:%20T)'},
      { keyword: 'ceil', link:'/docs/reference/expressions/builtins#ceil(r%20:%20rational)'},
      { keyword: 'floor', link:'/docs/reference/expressions/builtins#floor(r%20:%20rational)'},
      { keyword: 'int_to_date', link:'/docs/reference/expressions/builtins#int_to_date(i%20:%20int)'},
      { keyword: 'int_to_nat', link:'/docs/reference/expressions/builtins#int_to_nat(i%20:%20int)'},
    ],
  },
  iterable_big_map: {
    desc: <IterableBigMapDesc />,
    link: '#iterable_big_map<K,%20V>',
    examples: [ `[]`, `[ ("#1G1AF1F57A7192174", 5); ("#2F4AH1J77O7132095", 10) ]` ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    related: [
      { keyword: "Map", link:"/docs/language-basics/container#map", code : false },
      { keyword: "[]", link: "/docs/reference/expressions/operators/access#map" },
      { keyword: "put", link: instruction_prefix + '/containers#mputk-v' },
      { keyword: "remove", link: instruction_prefix + '/containers#mremovek' },
      { keyword: "update", link: instruction_prefix + '/containers#mupdatek--k-o--optiont' },
      { keyword: "for", link: '/docs/reference/instructions/control#map' },
      { keyword: "put", link: '/docs/reference/expressions/builtins#put(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20V)' },
      { keyword: "remove", link: '/docs/reference/expressions/builtins#remove(c%20:%20C,%20i%20:%20T)' },
      { keyword: "update", link: '/docs/reference/expressions/builtins#update(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20option<T>)' },
      { keyword: "contains", link:"/docs/reference/expressions/builtins#contains(c%20:%20C,%20e%20:%20T)"},
      { keyword: "length", link:"/docs/reference/expressions/builtins#length(o%20:%20T)"},
      { keyword: "map", link:"/docs/reference/expressions/builtins#map<K,%20V>"},
      { keyword: "big_map", link : "/docs/reference/types#big_map<K,%20V>" },
    ],
  },
  key :
  {
    desc: <div>Account's public key.</div>,
    link: '#key',
    examples: [ '"edpkurLzuFFL1XyP3fed4u7MsgeywQoQmHM45Bz91PBzDvUjQ9bvdn"' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "key",
    michelson_ref_url: michelson_ref_base_url + '/#type-key',
    related: [
      { keyword: "check_signature", link:"/docs/reference/expressions/builtins#check_signature(k%20:%20key,%20s%20:%20signature,%20b%20:%20bytes)" },
      { keyword: "key_to_key_hash", link:"/docs/reference/expressions/builtins#key_to_key_hash(k%20:%20key)" },
      { keyword: "key_to_address", link:"/docs/reference/expressions/builtins#key_to_address(k%20:%20key)" },
    ],
  },
  key_hash :
  {
    desc: <div>Hash of a public key.</div>,
    link: '#key_hash',
    examples: [ '"tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg"' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "key_hash",
    michelson_ref_url: michelson_ref_base_url + '/#type-key_hash',
    related: [
      { keyword: "key_to_key_hash", link:"/docs/reference/expressions/builtins#key_to_key_hash(k%20:%20key)" },
      { keyword: "key_hash_to_contract", link:"/docs/reference/expressions/builtins#key_hash_to_contract(pkh%20:%20key_hash)" },
      { keyword: "sapling_empty_state", link:"/docs/reference/expressions/builtins#sapling_empty_state(k%20:%20key_hash)" },
      { keyword: "set_delegate", link:"/docs/reference/expressions/builtins#set_delegate(opkh%20:%20option<key_hash>)" },
      { keyword: "voting_power", link:"/docs/reference/expressions/builtins#voting_power(k%20:%20key_hash)" },

    ],
  },
  lambda :
  {
    desc: <div>Anonymous function value with a parameter of type <code>T</code> that returns a value of type <code>R</code>.</div>,
    link: '#lambda<T,%20R>',
    examples: [ 'lambda<nat>((x : nat) -> 2 * x + 1)' ],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "lambda",
    michelson_ref_url: michelson_ref_base_url + '/#type-lambda',
    related: [
      { keyword: "apply_lambda", link:"/docs/reference/expressions/builtins#apply_lambda(f%20:%20lambda<A%20*%20T,%20R>,%20x%20:%20A)" },
      { keyword: "exec_lambda", link:"/docs/reference/expressions/builtins#exec_lambda(f%20:%20lambda<T,%20R>,%20x%20:%20T)" },
    ],
  },
  list :
  {
    desc: 'Chained list of elements.',
    link: '#list<T>',
    parameters: [
      { keyword: 'T', type: 'any type', desc: 'type of the elements of the list' }
    ],
    examples: ['[]', '[ 1 ]', '[ "abc", "def" ]'],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "list",
    michelson_ref_url: michelson_ref_base_url + '/#type-list',
    related: [
      { keyword: "List", link:"/docs/language-basics/container#list" },
      { keyword: "prepend", link:"/docs/reference/instructions/containers#lprepende" },
      { keyword: "reverse", link:"/docs/reference/instructions/containers#lreverse" },
      { keyword: "concat", link:"/docs/reference/instructions/containers#lconcatl" },
      { keyword: "for", link:"/docs/reference/instructions/control#list"},
      { keyword: "concat", link:"/docs/reference/expressions/builtins#concat"},
      { keyword: "contains", link:"/docs/reference/expressions/builtins#contains(c%20:%20C,%20e%20:%20T)"},
      { keyword: "length", link:"/docs/reference/expressions/builtins#length(o%20:%20T)"},
      { keyword: "map", link:"/docs/reference/expressions/builtins#map"},
      { keyword: "nth", link:"/docs/reference/expressions/builtins#nth(l%20:%20list<T>,%20n%20:%20nat)"},
      { keyword: "pairing_check", link:"/docs/reference/expressions/builtins#pairing_check(l%20:%20list<bls12_381_g1%20*%20bls12_381_g2>)"},
      { keyword: "prepend", link:"/docs/reference/expressions/builtins#prepend(l%20:%20list<T>,%20e%20:%20T)"},
      { keyword: "reverse", link:"/docs/reference/expressions/builtins#reverse(l%20:%20list<T>)"},
      { keyword: "make_list", link:"/docs/reference/expressions/builtins#make_list<T>(l)" },
    ],
  },
  map :
  {
    desc: <div>Imutable (read only) maps from key to value; keys are sorted in natural order (<code>K</code> is <Link to="/docs/language-basics/types#comparable">comparable</Link>).</div>,
    link: '#map<K,%20V>',
    parameters: [
      { keyword: 'K', type: 'any comparable type', desc: 'type of the key' },
      { keyword: 'V', type: 'any type', desc: 'type of the associated value' },
    ],
    examples: ['[ (0, "a string"); (1, "another string") ]'],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "map",
    michelson_ref_url: michelson_ref_base_url + '/#type-map',
    related: [
      { keyword: "Map", link:"/docs/language-basics/container#map", code : false },
      { keyword: "[]", link: "/docs/reference/expressions/operators/access#map" },
      { keyword: "put", link: instruction_prefix + '/containers#mputk-v' },
      { keyword: "remove", link: instruction_prefix + '/containers#mremovek' },
      { keyword: "update", link: instruction_prefix + '/containers#mupdatek--k-o--optiont' },
      { keyword: "for", link: '/docs/reference/instructions/control#map' },
      { keyword: "put", link: '/docs/reference/expressions/builtins#put(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20V)' },
      { keyword: "remove", link: '/docs/reference/expressions/builtins#remove(c%20:%20C,%20i%20:%20T)' },
      { keyword: "update", link: '/docs/reference/expressions/builtins#update(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20option<T>)' },
      { keyword: "contains", link:"/docs/reference/expressions/builtins#contains(c%20:%20C,%20e%20:%20T)"},
      { keyword: "length", link:"/docs/reference/expressions/builtins#length(o%20:%20T)"},
      { keyword: "map", link:"/docs/reference/expressions/builtins#map"},
      { keyword: "make_map", link: "/docs/reference/expressions/builtins#make_map<K,%20V>(m)" },
      { keyword: "big_map", link : "/docs/reference/types#big_map<K,%20V>" },
      { keyword: "iterable_big_map", link : "/docs/reference/types#iterable_big_map<K,%20V>" },
    ],
  },
  nat :
  {
    desc: <div>Arbitrary-precision natural values (no arithmetic overflow).</div>,
    link: '#nat',
    examples: [ '0', '2', '123', '100_000'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "nat",
    michelson_ref_url: michelson_ref_base_url + '/#type-nat',
    related: [
      { keyword: "int", link:"/docs/reference/types#int" },
      { keyword: '+', link: '/docs/reference/expressions/operators/arithmetic#a--b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#a---b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#--a' },
      { keyword: '*', link: '/docs/reference/expressions/operators/arithmetic#a--b-1' },
      { keyword: '/', link: '/docs/reference/expressions/operators/arithmetic#a--b-2' },
      { keyword: 'div', link: '/docs/reference/expressions/operators/arithmetic#a-div-b' },
      { keyword: '%', link: '/docs/reference/expressions/operators/arithmetic#a--b-3' },
      { keyword: '/%', link: '/docs/reference/expressions/operators/arithmetic#a--b-4' },
      { keyword: '<<|', link: '/docs/reference/expressions/operators/arithmetic#a--b-5' },
      { keyword: '|>>', link: '/docs/reference/expressions/operators/arithmetic#a--b-6' },
      { keyword: '=', link:'/docs/reference/expressions/operators/arithmetic#a--b-7'},
      { keyword: '<>', link:'/docs/reference/expressions/operators/arithmetic#a--b-8'},
      { keyword: '<', link:'/docs/reference/expressions/operators/arithmetic#a--b-9'},
      { keyword: '<=', link:'/docs/reference/expressions/operators/arithmetic#a--b-10'},
      { keyword: '>', link:'/docs/reference/expressions/operators/arithmetic#a--b-11'},
      { keyword: '>=', link:'/docs/reference/expressions/operators/arithmetic#a--b-12'},
      { keyword: '<=>', link:'/docs/reference/expressions/operators/arithmetic#a--b-13'},
      { keyword: '+=', link:'/docs/reference/instructions/assignment#a--b-1'},
      { keyword: '*=', link:'/docs/reference/instructions/assignment#a--b-2'},
      { keyword: '/=', link:'/docs/reference/instructions/assignment#a--b-3'},
      { keyword: 'abs', link:'/docs/reference/expressions/builtins#abs(t%20:%20T)'},
      { keyword: 'int_to_nat', link:'/docs/reference/expressions/builtins#int_to_nat(i%20:%20int)'},
      { keyword: 'sapling_verify_update', link:'/docs/reference/expressions/builtins#sapling_verify_update(s,%20t)'},
      { keyword: 'create_ticket', link:'/docs/reference/expressions/builtins#create_ticket(s%20:%20T,%20n%20:%20nat)'},
      { keyword: 'length', link:'/docs/reference/expressions/builtins#length(o%20:%20T)'},
      { keyword: 'mutez_to_nat', link:'/docs/reference/expressions/builtins#mutez_to_nat(v%20:%20tez)'},
      { keyword: 'nat_to_string', link:'/docs/reference/expressions/builtins#nat_to_string(n%20:%20nat)'},
      { keyword: 'nth', link:'/docs/reference/expressions/builtins#nth(l%20:%20list<T>,%20n%20:%20nat)'},
      { keyword: 'open_chest', link:'/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)'},
      { keyword: 'read_ticket', link:'/docs/reference/expressions/builtins#read_ticket(t%20:%20ticket<T>)'},
      { keyword: 'sapling_empty_state', link:'/docs/reference/expressions/builtins#sapling_empty_state(k%20:%20key_hash)'},
      { keyword: 'slice', link:'/docs/reference/expressions/builtins#slice(s%20:%20T,%20o%20:%20nat,%20l%20:%20nat)'},
      { keyword: 'split_ticket', link:'/docs/reference/expressions/builtins#split_ticket(t%20:%20ticket<T>,%20n1%20:%20nat,%20n2%20:%20nat)'},
      { keyword: 'sub_nat', link:'/docs/reference/expressions/builtins#sub_nat(a%20:%20nat,%20b%20:%20nat)'},
      { keyword: 'voting_power', link:'/docs/reference/expressions/builtins#voting_power(k%20:%20key_hash)'},
    ],
  },
  never :
  {
    desc: <div>Empty type.</div>,
    link: '#never',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "never",
    michelson_ref_url: michelson_ref_base_url + '/#type-never',
    related: [
    ],
  },
  operation :
  {
    desc: <div>Operation generated by contract execution.</div>,
    link: '#operation',
    examples: [],
    tags: [ ],
    michelson: "operation",
    michelson_ref_url: michelson_ref_base_url + '/#type-operation',
    related: [
      { keyword: "transfer", link:"/docs/reference/instructions/operation#transfer" },
      { keyword: "make_operation", link:"/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract<T>,%20arg%20:%20T)" },
      { keyword: "event", link:"/docs/reference/types#event" },
    ],
  },
  option :
  {
    desc: <div>Optional value, that is either <code>some</code> value of type <code>T</code>, or <code>none</code>.</div>,
    link: '#option<T>',
    parameters: [
      { keyword: 'T', type: 'any type', desc: 'type of the value when the option is some value' },
    ],
    examples: ['none', 'some("abcd")'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "option",
    michelson_ref_url: michelson_ref_base_url + '/#type-option',
    related: [
      { keyword: "match with", link:"/docs/reference/instructions/control#option" },
      { keyword: "fail_some", link:"/docs/reference/instructions/divergent#fail_somee--optiont" },
      { keyword: "update", link:"/docs/reference/instructions/containers#mupdatek--k-o--optiont" },
      { keyword: "call_view", link:"/docs/reference/expressions/builtins#call_view<T>(a%20:%20address,%20id%20:%20string,%20arg%20:%20X)" },
      { keyword: "get", link:"/docs/reference/expressions/builtins#get(m%20:%20map<K,%20T>,%20k%20:%20K)" },
      { keyword: "get_entrypoint", link:"/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)" },
      { keyword: "get_some", link:"/docs/reference/expressions/builtins#get_some(o%20:%20option<T>)" },
      { keyword: "int_to_nat", link:"/docs/reference/expressions/builtins#int_to_nat(i%20:%20int)" },
      { keyword: "is_none", link:"/docs/reference/expressions/builtins#is_none(o%20:%20option<T>)" },
      { keyword: "is_some", link:"/docs/reference/expressions/builtins#is_some(o%20:%20option<T>)" },
      { keyword: "join_tickets", link:"/docs/reference/expressions/builtins#join_tickets(t1%20:%20ticket<T>,%20t2%20:%20ticket<T>)" },
      { keyword: "map", link:"/docs/reference/expressions/builtins#map" },
      { keyword: "none", link:"/docs/reference/expressions/builtins#none<T>" },
      { keyword: "sapling_verify_update", link:"/docs/reference/expressions/builtins#sapling_verify_update(s,%20t)" },
      { keyword: "set_delegate", link:"/docs/reference/expressions/builtins#set_delegate(opkh%20:%20option<key_hash>)" },
      { keyword: "slice", link:"/docs/reference/expressions/builtins#slice(s%20:%20T,%20o%20:%20nat,%20l%20:%20nat)" },
      { keyword: "some", link:"/docs/reference/expressions/builtins#some(v%20:%20T)" },
      { keyword: "split_tockets", link:"/docs/reference/expressions/builtins#split_ticket(t%20:%20ticket<T>,%20n1%20:%20nat,%20n2%20:%20nat)" },
      { keyword: "sub_mutez", link:"/docs/reference/expressions/builtins#sub_mutez(a%20:%20tez,%20b%20:%20tez)" },
      { keyword: "unpack", link:"/docs/reference/expressions/builtins#unpack<T>(b%20:%20bytes)" },
      { keyword: "update", link:"/docs/reference/expressions/builtins#update(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20option<T>)" },
      { keyword: "match with", link:"/docs/reference/expressions/controls#match-with" },
      { keyword: "? :", link:"/docs/reference/expressions/controls#a--b--c" },
      { keyword: "[]", link:"/docs/reference/expressions/asset#ak--asset_keyaf" },

    ],
  },
  or :
  {
    desc: 'Union of two types: its value can either be of the one or the other type (left or right).',
    link: '#or<T1,%20T2>',
    parameters: [
      { keyword: 'T1', type: 'any type', desc: 'left type' },
      { keyword: 'T2', type: 'any type', desc: 'right type' },
    ],
    examples: ['const o : or<nat, string> = left<string>(2)',
     'const o : or<nat, string> = left<nat, string>(2)',
     'const o : or<nat, string> = right<nat>("#a56fG")',
     'const o : or<nat, string> = right<nat, string>("#a56fG")'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "or T1 T2",
    michelson_ref_url: michelson_ref_base_url + '/#type-or',
    related: [
      { keyword: "match with", link:"/docs/reference/instructions/control#or" },
      { keyword: "fold", link:"/docs/reference/expressions/builtins#fold%20(i%20:%20or<L,%20R>,%20f%20:%20L%20->%20or<L,%20R>)" },
      { keyword: "left", link:"/docs/reference/expressions/builtins#left<(L,)?%20T>(x%20:%20L)" },
      { keyword: "open_chest", link:"/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)" },
      { keyword: "right", link:"/docs/reference/expressions/builtins#right<T(,%20R)>(x%20:%20R)" },
    ],
  },
  partition :
  {
    desc: <PartitionDesc />,
    link: '#partition<A>',
    examples: [ ],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    related: [
      { keyword: "Asset", link:"/docs/asset" },
      { keyword: "aggregate", link:"/docs/reference/types#aggregate<A>" },
      { keyword: "asset_view", link:"/docs/reference/types#asset_view<A>" }
    ],
  },
  rational :
  {
    desc: <div>Arbitrary-precision floating point number.<br></br><br></br>
    It is implemented in Michelson as a pair of <Link to="/docs/reference/types#int"><code>int</code></Link> and <Link to="/docs/reference/types#nat"><code>nat</code>.</Link>
    </div>,
    link: '#rational',
    examples: [ '1.1', '-1.1', '1 / 3', '-1 / 3', '80%', '4.2%'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "pair int nat",
    related: [
      { keyword: '+', link: '/docs/reference/expressions/operators/arithmetic#a--b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#a---b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#--a' },
      { keyword: '*', link: '/docs/reference/expressions/operators/arithmetic#a--b-1' },
      { keyword: '/', link: '/docs/reference/expressions/operators/arithmetic#a--b-2' },
      { keyword: '=', link:'/docs/reference/expressions/operators/arithmetic#a--b-7'},
      { keyword: '<>', link:'/docs/reference/expressions/operators/arithmetic#a--b-8'},
      { keyword: '<', link:'/docs/reference/expressions/operators/arithmetic#a--b-9'},
      { keyword: '<=', link:'/docs/reference/expressions/operators/arithmetic#a--b-10'},
      { keyword: '>', link:'/docs/reference/expressions/operators/arithmetic#a--b-11'},
      { keyword: '>=', link:'/docs/reference/expressions/operators/arithmetic#a--b-12'},
      { keyword: '<=>', link:'/docs/reference/expressions/operators/arithmetic#a--b-13'},
      { keyword: '+=', link:'/docs/reference/instructions/assignment#a--b-1'},
      { keyword: '-=', link:'/docs/reference/instructions/assignment#a---b'},
      { keyword: '*=', link:'/docs/reference/instructions/assignment#a--b-2'},
      { keyword: '/=', link:'/docs/reference/instructions/assignment#a--b-3'},
      { keyword: 'abs', link:'/docs/reference/expressions/builtins#abs(t%20:%20T)'},
      { keyword: 'ceil', link: '/docs/reference/expressions/builtins#ceil(r%20:%20rational)' },
      { keyword: 'floor', link: '/docs/reference/expressions/builtins#floor(r%20:%20rational)' },
    ],
  },
  record :
  {
    desc: <div>Fixed list of named fields of different types.<br/><br/>A record has the common <Link to="/docs/language-basics/types#properties">properties</Link> of its fields.</div>,
    link: '#record',
    examples: ['{ red = 0xa4; green = 0x6a; blue = 0xc0 }'],
    tags: [ ],
    related: [
      { keyword: "Record", link:"/docs/language-basics/composite#record" },
      { keyword: ':=', link : '/docs/reference/instructions/assignment#record' },
      { keyword: '+=', link : '/docs/reference/instructions/assignment#a--b-1' },
      { keyword: '-=', link : '/docs/reference/instructions/assignment#a---b' },
      { keyword: '*=', link : '/docs/reference/instructions/assignment#a--b-2' },
      { keyword: '/=', link : '/docs/reference/instructions/assignment#a--b-3' },
      { keyword: '&=', link : '/docs/reference/instructions/assignment#a--b-4' },
      { keyword: '|=', link : '/docs/reference/instructions/assignment#a--b-5' },
      { keyword : '{ with }', link : '/docs/reference/expressions/operators/copy' },
      { keyword : '.', link : '/docs/reference/expressions/operators/access#ab-1' },
    ],
    michelson: "pair",
    michelson_ref_url: michelson_ref_base_url + '/#type-pair',
  },
  sapling_state :
  {
    desc: 'Sapling state.',
    link: '#sapling_state(n)',
    examples: [],
    parameters: [
      { keyword: 'n', type: 'natural number', desc: 'Memo size' },
    ],
    tags: [ PASSABLE, STORABLE ],
    michelson: "sapling_state",
    michelson_ref_url: michelson_ref_base_url + '/#type-sapling_state',
    related: [
      { keyword: "Sapling", link:"/docs/language-basics/crypto#sapling" },
      { keyword: "sapling_empty_state", link:"/docs/reference/expressions/builtins#sapling_empty_state(k%20:%20key_hash)" },
      { keyword: "sapling_verify_update", link:"/docs/reference/expressions/builtins#sapling_verify_update(s,%20t)" },
    ],
  },
  sapling_transaction :
  {
    desc: 'Sapling transaction.',
    link: '#sapling_transaction(n)',
    examples: [ ],
    parameters: [
      { keyword: 'n', type: 'natural number', desc: 'Memo size' },
    ],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "sapling_transaction",
    michelson_ref_url: michelson_ref_base_url + '/#type-sapling_transaction',
    related: [
      { keyword: "Sapling", link:"/docs/language-basics/crypto#sapling" },
      { keyword: "sapling_empty_state", link:"/docs/reference/expressions/builtins#sapling_empty_state(k%20:%20key_hash)" },
      { keyword: "sapling_verify_update", link:"/docs/reference/expressions/builtins#sapling_verify_update(s,%20t)" },
    ],
  },
  set :
  {
    desc: <div>Set of values of <Link to="/docs/language-basics/types#comparable">comparable</Link> type <code>T</code>. It can be iterated with <Link to="/docs/reference/instructions/control#set"><code>for</code></Link> in <code>T</code>'s natural order.</div>,
    link: '#set<T>',
    examples: ['[ tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb; tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6]'],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "set",
    michelson_ref_url: michelson_ref_base_url + '/#type-set',
    related: [
      { keyword: "Set", link:"/docs/language-basics/container#set" },
      { keyword: "for", link:"/docs/reference/instructions/control#for" },
      { keyword: "add", link:"/docs/reference/instructions/containers#sadde" },
      { keyword: "remove", link:"/docs/reference/instructions/containers#sremovee" },
      { keyword: "add", link:"/docs/reference/expressions/builtins#add(s%20:%20set<T>,%20e%20:%20T)" },
      { keyword: "contains", link:"/docs/reference/expressions/builtins#contains(c%20:%20C,%20e%20:%20T)" },
      { keyword: "length", link:"/docs/reference/expressions/builtins#length(o%20:%20T)" },
      { keyword: "remove", link:"/docs/reference/expressions/builtins#remove(c%20:%20C,%20i%20:%20T)" },
      { keyword: "make_set", link:"/docs/reference/expressions/builtins#make_set<T>(s)" },
    ],
  },
  signature :
  {
    desc: 'Cryptographic signature.',
    link: '#signature',
    examples: [ '"edsigtvwtJaiM7phNNkZjazqKtthDxc3WswYNL961GKgz7VxvPJmWJ8WEkmEZd9oFM1RvwABYW3uYgwGRP7nuBns5WrqyfYsUaB"' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "signature",
    michelson_ref_url: michelson_ref_base_url + '/#type-signature',
    related: [
      { keyword: "Signature", link:"/docs/language-basics/crypto#signature" },
      { keyword: "check_signature", link:"/docs/reference/expressions/builtins#check_signature(k%20:%20key,%20s%20:%20signature,%20b%20:%20bytes)" },
    ],
  },
  string :
  {
    desc: 'Array of non-extended ASCII characters.',
    link: '#string',
    examples: [ '"This is a string"', '"12345"' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "string",
    michelson_ref_url: michelson_ref_base_url + '/#type-string',
    related: [
      { keyword: '+', link : '/docs/reference/expressions/operators/arithmetic#a--b' },
      { keyword: 'concat', link : '/docs/reference/expressions/builtins#concat' },
      { keyword: 'length', link : '/docs/reference/expressions/builtins#length(o%20:%20T)' },
      { keyword: 'nat_to_string', link : '/docs/reference/expressions/builtins#nat_to_string(n%20:%20nat)' },
      { keyword: 'slice', link : '/docs/reference/expressions/builtins#slice(s%20:%20T,%20o%20:%20nat,%20l%20:%20nat)' },
      { keyword: 'call_view', link : '/docs/reference/expressions/builtins#call_view<T>(a%20:%20address,%20id%20:%20string,%20arg%20:%20X)' },
      { keyword: 'get_entrypoint', link : '/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)' },
    ],
  },
  tez :
  {
    desc: <div>Tezos currency in mutez (millionth of XTZ); several literal units are provided:<ul>
      <li><code>1tz</code> is 1000000 mutez</li>
      <li><code>1mtz</code> is 1000 mutez</li>
      <li><code>1utz</code> is 1 mutez</li>
    </ul>
    For <code>tz</code> and <code>mtz</code> it is possible to use floating point literals with a maximum of respectively 6 and 3 decimal places; hence <code>1.5324235tz</code> and <code>1.5324mtz</code> are not valid.
    </div>,
    link: '#tez',
    examples: [ '1tz', '1mtz', '1utz', '1.23tz', '1.2mtz'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "mutez",
    michelson_ref_url: michelson_ref_base_url + '/#type-mutez',
    related: [
      { keyword: '+', link: '/docs/reference/expressions/operators/arithmetic#a--b' },
      { keyword: '-', link: '/docs/reference/expressions/operators/arithmetic#a---b' },
      { keyword: '*', link: '/docs/reference/expressions/operators/arithmetic#a--b-1' },
      { keyword: '/', link: '/docs/reference/expressions/operators/arithmetic#a--b-2' },
      { keyword: 'div', link: '/docs/reference/expressions/operators/arithmetic#a-div-b' },
      { keyword: '%', link: '/docs/reference/expressions/operators/arithmetic#a--b-3' },
      { keyword: '=', link:'/docs/reference/expressions/operators/arithmetic#a--b-7'},
      { keyword: '<>', link:'/docs/reference/expressions/operators/arithmetic#a--b-8'},
      { keyword: '<', link:'/docs/reference/expressions/operators/arithmetic#a--b-9'},
      { keyword: '<=', link:'/docs/reference/expressions/operators/arithmetic#a--b-10'},
      { keyword: '>', link:'/docs/reference/expressions/operators/arithmetic#a--b-11'},
      { keyword: '>=', link:'/docs/reference/expressions/operators/arithmetic#a--b-12'},
      { keyword: '<=>', link:'/docs/reference/expressions/operators/arithmetic#a--b-13'},
      { keyword: '+=', link:'/docs/reference/instructions/assignment#a--b-1'},
      { keyword: 'mutez_to_nat', link:'/docs/reference/expressions/builtins#mutez_to_nat(v%20:%20tez)'},
      { keyword: 'sub_mutez', link:'/docs/reference/expressions/builtins#sub_mutez(a%20:%20tez,%20b%20:%20tez)'},
      { keyword: 'make_operation', link:'/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract<T>,%20arg%20:%20T)'},
    ],
  },
  ticket :
  {
    desc: 'Contract-authenticated data.',
    link: '#ticket<T>',
    examples: [],
    parameters: [
      { keyword: 'T', type: 'any type', desc: 'type of the value held by the ticket' },
    ],
    tags: [ PASSABLE, STORABLE ],
    michelson: "ticket",
    michelson_ref_url: michelson_ref_base_url + '/#type-ticket',
    related: [
      { keyword: "create_ticket", link:"/docs/reference/expressions/builtins#create_ticket(s%20:%20T,%20n%20:%20nat)" },
      { keyword: "join_tickets", link:"/docs/reference/expressions/builtins#join_tickets(t1%20:%20ticket<T>,%20t2%20:%20ticket<T>)" },
      { keyword: "read_ticket", link:"/docs/reference/expressions/builtins#read_ticket(t%20:%20ticket<T>)" },
      { keyword: "split_ticket", link:"/docs/reference/expressions/builtins#split_ticket(t%20:%20ticket<T>,%20n1%20:%20nat,%20n2%20:%20nat)" },
    ],
  },
  tuple :
  {
    desc: 'Fixed list of anonymous values of different types.',
    link: '#tuple',
    examples: ['("a string", 3)', '(0x22, none)'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "pair",
    michelson_ref_url: michelson_ref_base_url + '/#type-pair',
    related: [
      { keyword: "Tuple", link:"/docs/language-basics/composite#tuple" },
      { keyword : ':=', link : '/docs/reference/instructions/assignment#record', desc : 'Assigns a value to a tuple dimension' },
      { keyword : '+=', link : '/docs/reference/instructions/assignment#a--b-1', desc : 'Increments a tuple dimension' },
      { keyword : '-=', link : '/docs/reference/instructions/assignment#a---b', desc : 'Decrement a tuple dimension' },
      { keyword : '*=', link : '/docs/reference/instructions/assignment#a--b-2', desc : 'Multiplies a tuple dimension' },
      { keyword : '/=', link : '/docs/reference/instructions/assignment#a--b-3', desc : 'Divides a tuple dimension' },
      { keyword : '&=', link : '/docs/reference/instructions/assignment#a--b-4', desc : 'Applies logical conjonction to a tuple dimension' },
      { keyword : '|=', link : '/docs/reference/instructions/assignment#a--b-5', desc : 'Applies logical disjunction to a tuple dimension' },
      { keyword : '[]', link : '/docs/reference/expressions/operators/access#ab', desc : "Accesses a tuple dimension" },
    ],
  },
  unit :
  {
    desc: <div>Type to express no value, only inhabited by the <code>Unit</code> value.</div>,
    link: '#unit',
    examples: [ 'Unit', '()' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "unit",
    michelson_ref_url: michelson_ref_base_url + '/#type-unit',
    related: [
    ],
  }
};

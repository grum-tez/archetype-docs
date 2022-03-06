

export const COMPARABLE = 0
export const PASSABLE = 1
export const STORABLE = 2
export const PACKABLE = 3

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference'

export const types = {
  address :
  {
    desc: 'TODO',
    examples: [ 'tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg', 'tz2BFTyPeYRzxd5aiBchbXN3WCZhx7BqbMBq', 'tz3hFR7NZtjT2QtzgMQnWb4xMuD6yt2YzXUt', 'KT1VMCj69PwwKK7aRLRPnWoYh4X1xQqk2Vm2' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "address",
    michelson_ref_url: michelson_ref_base_url + '/#type-address',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/address" }
    ],
  },
  big_map :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE ],
    michelson: "big_map",
    michelson_ref_url: michelson_ref_base_url + '/#type-big_map',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/container#big_map" }
    ],
  },
  bls12_381_fr :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "bls12_381_fr",
    michelson_ref_url: michelson_ref_base_url + '/#type-bls12_381_fr',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto" }
    ],
  },
  bls12_381_g1 :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "bls12_381_g1",
    michelson_ref_url: michelson_ref_base_url + '/#type-bls12_381_g1',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto" }
    ],
  },
  bls12_381_g2 :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "bls12_381_g2",
    michelson_ref_url: michelson_ref_base_url + '/#type-bls12_381_g2',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto" }
    ],
  },
  bool :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "bool",
    michelson_ref_url: michelson_ref_base_url + '/#type-bool',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/boolean" }
    ],
  },
  bytes :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "bytes",
    michelson_ref_url: michelson_ref_base_url + '/#type-bytes',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/bytes" }
    ],
  },
  chain_id :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "chain_id",
    michelson_ref_url: michelson_ref_base_url + '/#type-chain_id',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/protocol" }
    ],
  },
  chest :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "chest",
    michelson_ref_url: michelson_ref_base_url + '/#type-chest',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto" }
    ],
  },
  chest_key :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "chest_key",
    michelson_ref_url: michelson_ref_base_url + '/#type-chest_key',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto" }
    ],
  },
  contract :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, PACKABLE ],
    michelson: "contract",
    michelson_ref_url: michelson_ref_base_url + '/#type-contract',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/operations" }
    ],
  },
  date :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "timestamp",
    michelson_ref_url: michelson_ref_base_url + '/#type-timestamp',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/date" }
    ],
  },
  duration :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "int",
    michelson_ref_url: michelson_ref_base_url + '/#type-int',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/date" }
    ],
  },
  int :
  {
    desc: 'TODO',
    examples: [ '0i', '2i', '123i', '-1' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "int",
    michelson_ref_url: michelson_ref_base_url + '/#type-int',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/number#int" }
    ],
  },
  key :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "key",
    michelson_ref_url: michelson_ref_base_url + '/#type-key',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto#key" }
    ],
  },
  key_hash :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "key_hash",
    michelson_ref_url: michelson_ref_base_url + '/#type-key_hash',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto#key_hash" }
    ],
  },
  lambda :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "lambda",
    michelson_ref_url: michelson_ref_base_url + '/#type-lambda',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/lambda" }
    ],
  },
  list :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "list",
    michelson_ref_url: michelson_ref_base_url + '/#type-list',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/container#list" }
    ],
  },
  map :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "map",
    michelson_ref_url: michelson_ref_base_url + '/#type-map',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/container#map" }
    ],
  },
  nat :
  {
    desc: 'TODO',
    examples: [ '0', '2', '123'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "nat",
    michelson_ref_url: michelson_ref_base_url + '/#type-nat',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/number#nat" }
    ],
  },
  never :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "never",
    michelson_ref_url: michelson_ref_base_url + '/#type-never',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/never" }
    ],
  },
  operation :
  {
    desc: 'TODO',
    examples: [],
    tags: [ ],
    michelson: "operation",
    michelson_ref_url: michelson_ref_base_url + '/#type-operation',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/operations" }
    ],
  },
  option :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "option",
    michelson_ref_url: michelson_ref_base_url + '/#type-option',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/composite#option" }
    ],
  },
  or :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "or",
    michelson_ref_url: michelson_ref_base_url + '/#type-or',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/composite#or" }
    ],
  },
  rational :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "pair int nat",
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/address" }
    ],
  },
  sapling_state :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE ],
    michelson: "sapling_state",
    michelson_ref_url: michelson_ref_base_url + '/#type-sapling_state',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto#sapling_state" }
    ],
  },
  sapling_transaction :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "sapling_transaction",
    michelson_ref_url: michelson_ref_base_url + '/#type-sapling_transaction',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto#sapling_transaction" }
    ],
  },
  set :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "set",
    michelson_ref_url: michelson_ref_base_url + '/#type-set',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/container#set" }
    ],
  },
  signature :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "signature",
    michelson_ref_url: michelson_ref_base_url + '/#type-signature',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto#signature" }
    ],
  },
  state :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: undefined,
    related: [
      { keyword: "Presentation", link:"/docs/state-machine/state" }
    ],
  },
  string :
  {
    desc: 'Basic string type to store and manipulate array of non-extended ASCII characters.',
    examples: [ '"This is a string"', '"12345"' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "string",
    michelson_ref_url: michelson_ref_base_url + '/#type-string',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/string" },
      { keyword: "Operators", link:"/docs/reference/operators" }
    ],
  },
  tez :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "mutez",
    michelson_ref_url: michelson_ref_base_url + '/#type-mutez',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/tez" }
    ],
  },
  ticket :
  {
    desc: 'TODO',
    examples: [],
    tags: [ PASSABLE, STORABLE ],
    michelson: "ticket",
    michelson_ref_url: michelson_ref_base_url + '/#type-ticket',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/ticket" }
    ],
  },
  tuple :
  {
    desc: 'TODO',
    examples: [],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "pair",
    michelson_ref_url: michelson_ref_base_url + '/#type-pair',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/composite#tuple" }
    ],
  },
  unit :
  {
    desc: 'TODO',
    examples: [ 'Unit', '()' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "unit",
    michelson_ref_url: michelson_ref_base_url + '/#type-unit',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/unit" }
    ],
  }
};

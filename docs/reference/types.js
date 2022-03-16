

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
  asset :
  {
    desc: 'TODO',
    examples: [],
    tags: [ ],
    related: [
      { keyword: "Presentation", link:"/docs/assets/intro" }
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
    examples: [ '0x02', 2 ],
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
    examples: [ '0x063bd6e11e2fcaac1dd8cf68c6b1925a73c3c583e298ed37c41c3715115cf96358a42dbe85a0228cbfd8a6c8a8c54cd015b5ae2860d1cc47f84698d951f14d9448d03f04df2ca0ffe609a2067d6f1a892163a5e05e541279134cae52b1f23c6b' ],
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
    examples: [ '0x10c6d5cdca84fc3c7f33061add256f48e0ab03a697832b338901898b650419eb6f334b28153fb73ad2ecd1cd2ac67053161e9f46cfbdaf7b1132a4654a55162850249650f9b873ac3113fa8c02ef1cd1df481480a4457f351d28f4da89d19fa405c3d77f686dc9a24d2681c9184bf2b091f62e6b24df651a3da8bd7067e14e7908fb02f8955b84af5081614cb5bc49b416d9edf914fc608c441b3f2eb8b6043736ddb9d4e4d62334a23b5625c14ef3e1a7e99258386310221b22d83a5eac035c' ],
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
    examples: [ 'true', 'false' ],
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
    examples: [ '0x00', '0x050002', '0x'],
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
    examples: [ '"NetXdQprcVkpaWU"', 'chainid' ],
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
    examples: [ '0xc5ecdde89eb8c1e7aaeb85abb8f5e5cef3b4fa80c4aee2fccbf0a78ce0debaa5e9ddede3ddfbd9abdea28cc7dc99e6d3a9baf3cbae9adaaabc89cbc39e97e2c7a6cba99197d19ba09ddfd181afc997ffbcc5acb2d29ecbb698c2cacbdd83d1b4ced0bffe9cd78295b3fba4d9f9d5f4d4ec9ad3c7e1a8eeb9dba5cbd8a2dbf29af8e4a4c1e4b1edacf98fccefaef9fea4f0bacdd38ecbfe81c3f9839b9e9ab8fbf5f1eabac48a9f8ca7c588eefe94d1f18bd9bcee9aecde8dd285cf9098f4e1a7eec787f3a0e0ff9cd0ce8ec5a2a4e5ecb08fce899eb5baa397fabf90de9397cebc81bbdfb386e6b4da9fd8fdd19ed9f8d684c782b0aacfeebae4f6e7d1c5c1e6a093c68081cf83b991b4ecd7b38aee92deddcad79eb9abe0a0a0c6b5909dc58495f69445fff5ae9cefe8b8beb2fb86ccf5c9ad91989bdad8a3cfbedaffa2de8bf19dc6ac8cbc8a9584fa9f85f9ba958fc6bbc09ac8e7d5f0fdb98b86c1c7d59ad7c6dfc2d2cefaf5d9db909bf0e3acd3ccc792bc9bccbab4a4febda9b685dbc39ea2a4a7b69990d3abd8b9b3d7dbc581b984f3e08a98f7f7f0e697cc8dfd88edc8c3ca8dc3b2a9ccf6cdd6d0efcc848bc8ead5858bbabfcfc1c8ecea84fd9b96a5e4eabb8c918dafe6f78d83e8e1c2e5f8ee88a4ee8dcaeeafffebfcbbfda1e9eb86c582f2eedd9299cbc0a7fce083ced8c8ddb0e7eaacb696c1fccdadcdc8e3c6f7b9de84eece9bb7919094fef4fdf6efd8b1ba8bbecb9380add4f59ddbf9a19f95facc84e9d0a99bfa93f1fcc3a0fbde9b9ce0c7e8dec6e8d1dfa7dda6f490bb9580abfdbcc0e202e5ff731c3c17d080ee430edd30979a47aa653656e11e593800000015c2ca2a23b732a72932611618ad9ea324986377591e' ],
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
    examples: [ '0xa0aceddfb3c9fbe1b8c382c7d5a7dedbe2e5adf9edcfc3e9d084caa6aeb9818ff1e985cb9efe8fa089ceeaa0f5d0bcb583e2f29196f2d3908fffffdcda868faffcb78fb697e7eaf3e7dca9d4b5dda2c3e4f8adf8abf484ecae85f7d6e0f2d28cb69af1d7b19082e8d8d7ba96e7e1e0bb8ac9b9fcf0a9e5b7c1a499c4faf4c8a3a9c8e4d09aa780eac6cee1b78a97a3e983abf9a5f1e8d2a2a2b5e3bcb8c4effeb7a3a68a85a497cd91c9a2c096c3f596deb8d1aca3a5aff28effb8cfc9c7ced892e3a7c09deeb8c8ec9387a3b384b5c8bccaafc7a9a2c1cfd8c7becfd7d6828a9af8f4988fe4ead3b59ecfb8ff8cabf8be90d4c8bdbddfce9cd7c2bb81edc4b7ad80a59a978f8c9debe7aaf08cf0c588f3eaade6b9f4e4e6edf1ed9c9988e48d9ba0aa8f01d18bac92b886db9dd798b5f6fdc891a28da2c4c48da1918897a2b7c2dfa0b78ab8e291b68fb1a2bfa5e8b88e9cabb0b5b0feabcffc9cfeee888ac4afeed9dc8bf5a4eaa9ae89a3838cf6cfd4f8acff8fa7aef7a9889fbbc7d8f6dde4edf3e58096e580e299e5b082b9cf85f3fe8ac6c0998eb1bcbab9bfb8fba39faea7bce0f6fed9ea86dfdad58cf7cbc7fcc4ecf7e2e898d3b19582e38c8092b7e4a0cddc83eb8bc38d91fefed6be869496b8e4fc99d5fae5c6a2b2dcabe2a4ea85b68b87b182d7e8cac29fe0b9efd6d0eb999ffa98aaaf9bf09fe7c4b39d81db97e4e7bbaef0e3bfedd69d9089bc8d91b292afa6c8b389fc9fb7aaa8decab6d9b493a6eafaa5baffe8fb85f2d483ecd1f2d1e58f938df9d8d5e385fe96c5f58ae1e0b09bf2b3c2931f' ],
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
    examples: [ '2019-01-01', '2019-01-01T01:02:03', '2019-01-01T01:02:03Z', '2019-01-01T00:00:00+01:00', '2019-01-01T00:00:00-05:30'],
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
    examples: [ '1m', '5d', '3w8d4h34m18s', ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "int",
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/date" }
    ],
  },
  enum :
  {
    desc: 'Union of several types: its value is one of the possible declared values; values can be parameterized.',
    examples: [ `enum color = | Red | Green | Blue`, `Red`, `Green`, `Blue` ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: [ "int", "or" ],
    related: [
      { keyword: "Enum", link:"/docs/language-basics/composite#enum" }
    ],
  },
  event :
  {
    desc: 'TODO',
    examples: [],
    tags: [ ],
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/event" }
    ],
  },
  int :
  {
    desc: 'TODO',
    examples: [ '0i', '2i', '123i', '-1', '100_000i' ],
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
    examples: [ '"edpkurLzuFFL1XyP3fed4u7MsgeywQoQmHM45Bz91PBzDvUjQ9bvdn"' ],
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
    examples: [ '"tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg"' ],
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
    desc: 'Immutable (read-only) list of elements.',
    parameters: [
      { keyword: 'T', type: 'any type', desc: 'type of the elements of the list' }
    ],
    examples: ['[]', '[ 1 ]', '[ "abc", "def" ]'],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "list",
    michelson_ref_url: michelson_ref_base_url + '/#type-list',
    related: [
      { keyword: "List", link:"/docs/language-basics/container#list" },
      { keyword: "Iter", link:"/doc/language-basics/control/#iter"}
    ],
  },
  map :
  {
    desc: 'Imutable (read only) maps from key to value; keys are sorted.',
    parameters: [
      { keyword: 'K', type: 'any comparable type', desc: 'type of the key' },
      { keyword: 'V', type: 'any type', desc: 'type of the associated value' },
    ],
    examples: ['variable m : map<nat, string> = [ (0, "a string"); (1, "another string") ]'],
    tags: [ PASSABLE, STORABLE, PACKABLE ],
    michelson: "map",
    michelson_ref_url: michelson_ref_base_url + '/#type-map',
    related: [
      { keyword: "Map", link:"/docs/language-basics/container#map" }
    ],
  },
  nat :
  {
    desc: 'TODO',
    examples: [ '0', '2', '123', '100_000'],
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
    desc: 'Type for optional value, that is either some value of some type, or none.',
    parameters: [
      { keyword: 'T', type: 'any type', desc: 'type of the value when the option is some value' },
    ],
    examples: ['variable opt : option<nat> = none', 'variable opt : option<string> = some("abcd")'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "option",
    michelson_ref_url: michelson_ref_base_url + '/#type-option',
    related: [
      { keyword: "Option", link:"/docs/language-basics/composite#option" }
    ],
  },
  or :
  {
    desc: 'Union of two types: its value can either be of the one or the other type (left or right).',
    parameters: [
      { keyword: 'T1', type: 'any type', desc: 'left type' },
      { keyword: 'T2', type: 'any type', desc: 'right type' },
    ],
    examples: ['variable o : or<nat, string> = left<string>(2)',
     'variable o : or<nat, string> = left<nat, string>(2)',
     'variable o : or<nat, string> = right<nat>("#a56fG")',
     'variable o : or<nat, string> = right<nat, string>("#a56fG")'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "or T1 T2",
    michelson_ref_url: michelson_ref_base_url + '/#type-or',
    related: [
      { keyword: "Or", link:"/docs/language-basics/composite#or" }
    ],
  },
  rational :
  {
    desc: 'TODO',
    examples: [ '1.1', '-1.1', '1 / 3', '-1 / 3', '80%', '4.2%'],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "pair int nat",
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/address" }
    ],
  },
  record :
  {
    desc: 'TODO',
    examples: [],
    tags: [ ],
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/composite#record" }
    ],
  },
  sapling_state :
  {
    desc: 'TODO',
    examples: [],
    parameters: [
      { keyword: 'n', type: 'natural number', desc: 'Memo size' },
    ],
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
    examples: [ ],
    parameters: [
      { keyword: 'n', type: 'natural number', desc: 'Memo size' },
    ],
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
    examples: [ '"edsigtvwtJaiM7phNNkZjazqKtthDxc3WswYNL961GKgz7VxvPJmWJ8WEkmEZd9oFM1RvwABYW3uYgwGRP7nuBns5WrqyfYsUaB"' ],
    tags: [ COMPARABLE, PASSABLE, STORABLE, PACKABLE ],
    michelson: "signature",
    michelson_ref_url: michelson_ref_base_url + '/#type-signature',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/crypto#signature" }
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
    examples: [ '1tz', '1mtz', '1utz', '1.2tz', '1.2mtz'],
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
    parameters: [
      { keyword: 'T', type: 'any type', desc: 'type of the value held by the ticket' },
    ],
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

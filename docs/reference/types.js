

export const PASSABLE = 0
export const STORABLE = 1

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference'

export const types = {
  address :
  {
    desc: 'TODO',
    examples: [ 'tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg', 'tz2BFTyPeYRzxd5aiBchbXN3WCZhx7BqbMBq', 'tz3hFR7NZtjT2QtzgMQnWb4xMuD6yt2YzXUt', 'KT1VMCj69PwwKK7aRLRPnWoYh4X1xQqk2Vm2' ],
    tags: [ PASSABLE, STORABLE ],
    michelson: "address",
    michelson_ref_url: michelson_ref_base_url + '/#type-address',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/address" }
    ],
  },
  string :
  {
    desc: 'Basic string type to store and manipulate array of non-extended ASCII characters.',
    examples: [ '"This is a string"', '"12345"' ],
    tags: [ PASSABLE, STORABLE ],
    michelson: "string",
    michelson_ref_url: michelson_ref_base_url + '/#type-string',
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/string" },
      { keyword: "Operators", link:"/docs/reference/operators" }
    ],
  }
};
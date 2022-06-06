const type_link_prefix = "/docs/reference/types#"
const builtin_link_prefix = "/docs/reference/expressions/builtins#"

export const types = {
  basic: [
    { label : 'bool', link : type_link_prefix + 'bool', desc : 'Boolean type to represent truth values' },
    { label : 'string', link : type_link_prefix + 'string', desc : 'String of characters type to represent textual values' },
    { label : 'nat', link : type_link_prefix + 'nat', desc : 'Natural type to represent long positive integers' },
    { label : 'int', link : type_link_prefix + 'int', desc : 'Integer type to represent long integers' },
    { label : 'rational', link : type_link_prefix + 'rational', desc : 'Rational type to represent floating point values' },
    { label : 'date', link : type_link_prefix + 'date', desc : 'Date type to represent ISO date values' },
    { label : 'duration', link : type_link_prefix + 'duration', desc : 'Duration type to represent difference of dates' },
    { label : 'bytes', link : type_link_prefix + 'bytes', desc : 'Bytes type to represent any serialised value' },
    { label : 'tez', link : type_link_prefix + 'tez', desc : 'Tez type to represent an amount in tez currency' },
    { label : 'address', link : type_link_prefix + 'address', desc : 'Address type to represent an account or contract address' },
  ],
  conversions : [
    { label : 'address_to_contract', link : builtin_link_prefix + 'address_to_contract(a%20:%20address)', desc: 'Converts an address to contract' },
    { label : 'contract_to_address', link : builtin_link_prefix + 'contract_to_address(c%20:%20contract<T>)', desc: 'Converts a contract to an address' },
    { label : 'int_to_date', link : builtin_link_prefix + 'int_to_date(i%20:%20int)', desc: 'Converts an integer to a date' },
    { label : 'int_to_nat', link : builtin_link_prefix + 'contract_to_address(c%20:%20contract<T>)', desc: 'Converts an integer to natural' },
    { label : 'key_hash_to_contract', link : builtin_link_prefix + 'key_hash_to_contract(pkh%20:%20key_hash)', desc: 'Converts a key hash to contract (without entrypoint)' },
    { label : 'key_to_address', link : builtin_link_prefix + 'key_to_address(k%20:%20key)', desc: 'Converts key to address' },
    { label : 'key_to_key_hash', link : builtin_link_prefix + 'key_to_key_hash(k%20:%20key)', desc: 'Converts key to hash key' },
    { label : 'mutez_to_nat', link : builtin_link_prefix + 'mutez_to_nat(v%20:%20tez)', desc: 'Converts a mutez amount to natural' },
    { label : 'nat_to_string', link : builtin_link_prefix + 'nat_to_string(n%20:%20nat)', desc: 'Converts a natural to its string representation' },
  ]
}

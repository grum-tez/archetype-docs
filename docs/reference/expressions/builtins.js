import React from "react"
import OptGetDesc from "../../../src/components/opt_get_desc.mdx"

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference/'

export const builtins = {
  template: {
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'TODO',
        alias: 'TODO',
        desc: <div>TODO</div>
      }
    ],
    returns: {
      type: 'TODO',
      desc: <div></div>
    },
    michelson: "TODO",
    michelson_ref_url: michelson_ref_base_url + '#TODO',
    related: [
      { keyword: 'TODO', link: '/docs/language-basics/TODO' },
    ]
  },
  callview: {
    desc: <div>Calls an on-chain view.</div>,
    parameters: [
      {
        type: 'address',
        alias: 'a',
        desc: <div>Address of the contract to call</div>
      },
      {
        type: 'string',
        alias: 'id',
        desc: <div>Name of the view; must be a literal string (e.g. <code>"my_view"</code>)</div>
      },
      {
        type: 'X',
        withLink: false,
        alias: 'arg',
        desc: <div>Argument of the called view</div>
      }
    ],
    returns: {
      type: 'option<T>',
      desc: <div><ul>
        <li><code>none</code> if a problem occured (view not found, or view execution failed)</li>
        <li><code>some(v)</code>, <code>v</code> being the value returned by the view</li>
      </ul></div>
    },
    michelson: "VIEW",
    michelson_ref_url: michelson_ref_base_url + '#VIEW',
    related: [
      { keyword: 'view', link: '/docs/language-basics/TODO' },
    ]
  },
  mkoperation: {
    desc: <div>Makes an operation.</div>,
    parameters: [
      {
        type: 'tez',
        alias: 'a',
        desc: <div>The amount of tez sent with the operation</div>
      },
      {
        type: 'contract',
        alias: 'c',
        desc: <div>The entrypoint typed T</div>
      },
      {
        type: 'T',
        withLink: false,
        alias: 'arg',
        desc: <div>The argument of the called entrypoint</div>
      }
    ],
    returns: {
      type: 'operation',
      desc: <div>The generated operation</div>
    },
    michelson: "TRANSFER_TOKENS",
    michelson_ref_url: michelson_ref_base_url + '#instr-TRANSFER_TOKENS',
    related: [
      { keyword: 'operations', link: '/docs/language-basics/operation' },
    ]
  },
  blake2b: {
    desc: <div>Hashes bytes value with <a href="https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29" target="_blank">blake2b</a> algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Array of byte to hash</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of bytes <code>b</code></div>
    },
    michelson: "BLAKE2B",
    michelson_ref_url: michelson_ref_base_url + '#instr-BLAKE2B',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  sha256: {
    desc: <div>Hashes bytes value with sha256 algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Message to be hashed</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of b bytes</div>
    },
    michelson: "SHA256",
    michelson_ref_url: michelson_ref_base_url + '#instr-SHA256',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  sha512: {
    desc: <div>Hashes bytes value with sha512 algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Message to be hashed</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of b bytes</div>
    },
    michelson: "SHA512",
    michelson_ref_url: michelson_ref_base_url + '#instr-SHA512',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  sha3: {
    desc: <div>Hashes bytes value with <a href="https://en.wikipedia.org/wiki/SHA-3" target="_blank">sha3</a> algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Message to be hashed</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of b bytes</div>
    },
    michelson: "SHA3",
    michelson_ref_url: michelson_ref_base_url + '#instr-SHA3',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  keccak: {
    desc: <div>Hashes bytes value with <a href="https://en.wikipedia.org/wiki/SHA-3" target="_blank">keccak</a> algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Array of byte to hash</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of <code>b</code></div>
    },
    michelson: "KECCAK",
    michelson_ref_url: michelson_ref_base_url + '#instr-KECCAK',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  hash_key: {
    desc: <div>Converts key to key_hash.</div>,
    parameters: [
      {
        type: 'key',
        alias: 'k',
        desc: <div>key to hash</div>
      }
    ],
    returns: {
      type: 'key_hash',
      desc: <div>hashed value of <code>k</code></div>
    },
    michelson: "HASH_KEY",
    michelson_ref_url: michelson_ref_base_url + '#instr-HASH_KEY',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  implicit_account: {
    desc: <div>Converts key_hash to contract.</div>,
    parameters: [
      {
        type: 'key_hash',
        alias: 'pkh',
        desc: <div>key hash to convert</div>
      }
    ],
    returns: {
      type: 'contract<unit>',
      withLink: false,
      desc: <div>The extracted contract unit</div>
    },
    michelson: "IMPLICIT_ACCOUNT",
    michelson_ref_url: michelson_ref_base_url + '#instr-IMPLICIT_ACCOUNT',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  key_address: {
    desc: <div>Converts a key to an address</div>,
    parameters: [
      {
        type: 'key',
        alias: 'k',
        desc: <div>Key to convert</div>
      }
    ],
    returns: {
      type: 'address',
      desc: <div>Key converted to address</div>
    },
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  contract_address: {
    desc: <div>Gets the address of a contract.</div>,
    parameters: [
      {
        type: 'contract',
        alias: 'c',
        desc: <div>Contract to get the address of</div>
      }
    ],
    returns: {
      type: 'address',
      desc: <div>Address of <code>c</code></div>
    },
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  check_signature: {
    desc: <div>Checks whether signature <code>s</code> is obtained by signing sequence of bytes <code>b</code> with account public key <code>k</code>.</div>,
    parameters: [
      {
        type: 'key',
        alias: 'k',
        desc: <div>Public key of the account to sign <code>b</code>.</div>
      },
      {
        type: 'signature',
        alias: 's',
        desc: <div>Signature to be compared with the one obtained by signing <code>b</code> with <code>k</code>.</div>
      },
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Sequence of bytes to sign with <code>k</code> and to compare to <code>s</code>.</div>
      },
    ],
    returns: {
      type: 'bool',
      desc: <div>Returns <code>true</code> if <code>s</code> is obtained by signing <code>b</code> with <code>k</code>, <code>false</code> otherwise.</div>
    },
    michelson: "CHECK_SIGNATURE",
    michelson_ref_url: michelson_ref_base_url + '#instr-CHECK_SIGNATURE',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  voting_power: {
    desc: <div>Gets the voting power from a <code>key_hash</code> value.</div>,
    parameters: [
      {
        type: 'key_hash',
        alias: 'k',
        desc: <div>Value to get the voting power of</div>
      }
    ],
    returns: {
      type: 'nat',
      desc: <div>Voting power</div>
    },
    michelson: "VOTING_POWER",
    michelson_ref_url: michelson_ref_base_url + '#instr-VOTING_POWER',
    related: [
      { keyword: 'Protocol', link: '/docs/language-basics/protocol' },
    ]
  },
  create_ticket: {
    desc: <div>Creates a ticket from a value typed T and an amount.</div>,
    parameters: [
      {
        type: 'T',
        alias: 's',
        desc: <div>The information of the ticket</div>
      },
      {
        type: 'n',
        alias: 'nat',
        desc: <div>The amount of the ticket</div>
      }
    ],
    returns: {
      type: 'ticket<T>',
      desc: <div>Created ticket</div>
    },
    michelson: "TICKET",
    michelson_ref_url: michelson_ref_base_url + '#instr-TICKET',
    related: [
      { keyword: 'Tickets', link: '/docs/language-basics/ticket' },
    ]
  },
  read_ticket: {
    desc: <div>Reads ticket's origin contract, value and amount.</div>,
    parameters: [
      {
        type: 'ticket<T>',
        alias: 't',
        desc: <div>Ticket to read</div>
      }
    ],
    returns: {
      type: 'address * T * nat',
      withLink: false,
      desc: <div>Tuple of ticket's address of origin contract, value and the amount</div>
    },
    michelson: "READ_TICKET",
    michelson_ref_url: michelson_ref_base_url + '#instr-READ_TICKET',
    related: [
      { keyword: 'Tickets', link: '/docs/language-basics/ticket' },
    ]
  },
  split_ticket: {
    desc: <div>Splits ticket in two new tickets.</div>,
    parameters: [
      {
        type: 'ticket<T>',
        alias: 't',
        desc: <div>Ticket to split</div>
      },
      {
        type: 'nat',
        alias: 'n1',
        desc: <div>Amount of first created ticket</div>
      },
      {
        type: 'nat',
        alias: 'n2',
        desc: <div>Amount of second created ticket</div>
      }
    ],
    returns: {
      type: 'option<ticket<T> * ticket<T>>',
      withLink: false,
      desc: <div>Option of pair of created tickets, respectively with <code>n1</code> and <code>n2</code> values.</div>
    },
    michelson: "SPLIT_TICKET",
    michelson_ref_url: michelson_ref_base_url + '#instr-SPLIT_TICKET',
    related: [
      { keyword: 'Tickets', link: '/docs/language-basics/ticket' },
    ]
  },
  join_tickets: {
    desc: <div>Joins two compatible tickets (same value, same origin contract).</div>,
    parameters: [
      {
        type: 'ticket<T>',
        alias: 't1',
        desc: <div>First ticket to join</div>
      },
      {
        type: 'ticket<T>',
        alias: 't2',
        desc: <div>Second ticket to join</div>
      }
    ],
    returns: {
      type: 'option<ticket<T>>',
      withLink: false,
      desc: <div>Joined ticket</div>
    },
    michelson: "JOIN_TICKETS",
    michelson_ref_url: michelson_ref_base_url + '#instr-JOIN_TICKETS',
    related: [
      { keyword: 'Tickets', link: '/docs/language-basics/ticket' },
    ]
  },
  sapling_empty_state: {
    desc: <div>Creates a sapling state with the specified memo size. The memo is an arbitrary string message encrypted and available to anyone owning the outgoing viewing key.</div>,
    parameters: [
      {
        type: 'nat',
        alias: 'n',
        desc: <div>Memo size</div>
      }
    ],
    returns: {
      type: 'sapling_state(n)',
      desc: <div>The fresh sapling state</div>
    },
    michelson: "SAPLING_EMPTY_STATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-SAPLING_EMPTY_STATE',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  sapling_verify_update: {
    desc: <div>Applies sapling transaction on sapling state.</div>,
    parameters: [
      {
        type: 'sapling_state(n)',
        alias: 's',
        desc: <div>Sapling state</div>
      },
      {
        type: 'sapling_transaction(n)',
        alias: 't',
        desc: <div>Sapling transaction</div>
      }
    ],
    returns: {
      type: 'option<int * sapling_state(n)>',
      withLink: false,
      desc: <div>The result</div>
    },
    michelson: "SAPLING_VERIFY_UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-SAPLING_VERIFY_UPDATE',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  pairing_check: {
    desc: <div>Checks pairing of pairs of <a href="https://en.wikipedia.org/wiki/BLS_digital_signature" target="_blank">BLS</a> values.</div>,
    parameters: [
      {
        type: 'list<bls12_381_g1 * bls12_381_g2>',
        withLink: false,
        alias: 'l',
        desc: <div>List of pairs of bls curves</div>
      }
    ],
    returns: {
      type: 'bool',
      desc: <div>The result</div>
    },
    michelson: "PAIRING_CHECK",
    michelson_ref_url: michelson_ref_base_url + '#instr-PAIRING_CHECK',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  open_chest: {
    desc: <div>Opens chest <code>c</code> with key <code>k</code> under time <code>t</code>.</div>,
    parameters: [
      {
        type: 'chest_key',
        alias: 'k',
        desc: <div>Chest key</div>
      },
      {
        type: 'chest',
        alias: 'c',
        desc: <div>Chest</div>
      },
      {
        type: 'nat',
        alias: 't',
        desc: <div>"Time" (number of operations) used to lock the chest</div>
      }
    ],
    returns: {
      type: 'or<bytes, bool>',
      withLink: false,
      desc: <div>The returned value has 3 possible values:<ul>
        <li><code>left(v)</code>, <code>v</code> being the value in the chest</li>
        <li><code>right(true)</code> when chest key <code>k</code> does not open the chest</li>
        <li><code>right(false)</code> when chest key <code>k</code> opens the chest but <code>t</code> parameter is not the value used to lock the chest</li>
        </ul></div>
    },
    michelson: "OPEN_CHEST",
    michelson_ref_url: michelson_ref_base_url + '#instr-OPEN_CHEST',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  mutez_to_nat : {
    desc: <div>Convert tez to nat in mutez</div>,
    parameters: [
      {
        type: 'tez',
        alias: 'v',
        desc: <div>The amount of tez to convert</div>
      }
    ],
    returns: {
      type: 'nat',
      desc: <div>The amount of mutez</div>
    },
    related: [
      { keyword: 'TODO', link: '/docs/language-basics/TODO' },
    ]
  },
  date_from_timestamp : {
    desc: <div>Convert int to date</div>,
    parameters: [
      {
        type: 'int',
        alias: 'i',
        desc: <div>The timestamp to convert</div>
      }
    ],
    returns: {
      type: 'date',
      desc: <div>The result</div>
    },
    related: [
      { keyword: 'TODO', link: '/docs/language-basics/TODO' },
    ]
  },
  opt_get: {
    desc: <OptGetDesc />,
    parameters: [
      {
        type: 'option<T>',
        alias: 'o',
        desc: 'Optional value to extract some value from.'
      },
    ],
    returns: {
      type: 'T',
      withLink: false,
      desc: <div>Returns <code>v</code> of type <code>T</code> when <code>o</code> is <code>some(v)</code></div>
    },
    fails: [
      {
        keyword: '"NotFound"',
        desc: <div>when <code>o</code> is <code>none</code></div>
      }
    ],
    related: [
      { keyword: 'Option', link: '/docs/language-basics/composite' },
      { keyword: 'issome', link: '#issome' },
    ]
  }
}

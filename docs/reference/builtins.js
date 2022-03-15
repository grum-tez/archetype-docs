import React from "react"
import OptGetDesc from "../../src/components/opt_get_desc.mdx"

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
    desc: <div>Call an on-chain view</div>,
    parameters: [
      {
        type: 'address',
        alias: 'a',
        desc: <div>TODO</div>
      },
      {
        type: 'string',
        alias: 'id',
        desc: <div>Must be a literal string (e.g. <code>"ext_view"</code>)</div>
      },
      {
        type: 'X',
        alias: 'arg',
        desc: <div>The argument of the called view</div>
      }
    ],
    returns: {
      type: 'option<T>',
      desc: <div>none if problem, some(val) with val as returned value</div>
    },
    michelson: "VIEW",
    michelson_ref_url: michelson_ref_base_url + '#VIEW',
    related: [
      { keyword: 'view', link: '/docs/language-basics/TODO' },
    ]
  },
  mkoperation: {
    desc: <div>Make an operation</div>,
    parameters: [
      {
        type: 'tez',
        alias: 'a',
        desc: <div>The amount of tez</div>
      },
      {
        type: 'contract',
        alias: 'c',
        desc: <div>The entrypoint typed T</div>
      },
      {
        type: 'T',
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
    desc: <div>Hash bytes value with blake2b algorithm.</div>,
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
    michelson: "BLAKE2B",
    michelson_ref_url: michelson_ref_base_url + '#instr-BLAKE2B',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  sha256: {
    desc: <div>Hash bytes value with sha256 algorithm.</div>,
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
    desc: <div>Hash bytes value with sha512 algorithm.</div>,
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
    desc: <div>Hash bytes value with sha3 algorithm.</div>,
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
    desc: <div>Hash bytes value with keccak algorithm.</div>,
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
    michelson: "KECCAK",
    michelson_ref_url: michelson_ref_base_url + '#instr-KECCAK',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  hash_key: {
    desc: <div>Convert key to key_hash</div>,
    parameters: [
      {
        type: 'key',
        alias: 'k',
        desc: <div>The key to convert</div>
      }
    ],
    returns: {
      type: 'key_hash',
      desc: <div>The key_hash result</div>
    },
    michelson: "HASH_KEY",
    michelson_ref_url: michelson_ref_base_url + '#instr-HASH_KEY',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  implicit_account: {
    desc: <div>Convert a key_hash to a contract</div>,
    parameters: [
      {
        type: 'key_hash',
        alias: 'pkh',
        desc: <div>The key hash to convert</div>
      }
    ],
    returns: {
      type: 'contract<unit>',
      desc: <div>The extracted contract unit</div>
    },
    michelson: "IMPLICIT_ACCOUNT",
    michelson_ref_url: michelson_ref_base_url + '#instr-IMPLICIT_ACCOUNT',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  key_address: {
    desc: <div>Convert a key to an address</div>,
    parameters: [
      {
        type: 'key',
        alias: 'k',
        desc: <div>The key to convert</div>
      }
    ],
    returns: {
      type: 'address',
      desc: <div>The result address</div>
    },
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  contract_address: {
    desc: <div>Extract address from a contract</div>,
    parameters: [
      {
        type: 'contract',
        alias: 'c',
        desc: <div>The contract to be extracted</div>
      }
    ],
    returns: {
      type: 'address',
      desc: <div>The extracted address</div>
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
  contract_address: {
    desc: <div>Extract address from a contract</div>,
    parameters: [
      {
        type: 'contract',
        alias: 'c',
        desc: <div>The contract to be extracted</div>
      }
    ],
    returns: {
      type: 'address',
      desc: <div>The extracted address</div>
    },
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  voting_power: {
    desc: <div>Get the voting power from a key_hash</div>,
    parameters: [
      {
        type: 'key_hash',
        alias: 'k',
        desc: <div>The from key_hash</div>
      }
    ],
    returns: {
      type: 'nat',
      desc: <div>The result voting power</div>
    },
    michelson: "VOTING_POWER",
    michelson_ref_url: michelson_ref_base_url + '#instr-VOTING_POWER',
    related: [
      { keyword: 'Protocol', link: '/docs/language-basics/protocol' },
    ]
  },
  create_ticket: {
    desc: <div>Create a ticket from a value typed T and an amount</div>,
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
      desc: <div>The result ticket</div>
    },
    michelson: "TICKET",
    michelson_ref_url: michelson_ref_base_url + '#instr-TICKET',
    related: [
      { keyword: 'Tickets', link: '/docs/language-basics/ticket' },
    ]
  },
  read_ticket: {
    desc: <div>Read a ticket to get the origin contract, the value and the amount</div>,
    parameters: [
      {
        type: 'ticket<T>',
        alias: 't',
        desc: <div>The ticket to read</div>
      }
    ],
    returns: {
      type: 'address * T * nat',
      desc: <div>The address of the origin contract, the value and the amount</div>
    },
    michelson: "READ_TICKET",
    michelson_ref_url: michelson_ref_base_url + '#instr-READ_TICKET',
    related: [
      { keyword: 'Tickets', link: '/docs/language-basics/ticket' },
    ]
  },
  split_ticket: {
    desc: <div>Split ticket in two amounts</div>,
    parameters: [
      {
        type: 'ticket<T>',
        alias: 't',
        desc: <div>The ticket</div>
      },
      {
        type: 'nat',
        alias: 'n1',
        desc: <div>The first amount</div>
      },
      {
        type: 'nat',
        alias: 'n2',
        desc: <div>The second amount</div>
      }
    ],
    returns: {
      type: 'option<ticket<T> * ticket<T>>',
      desc: <div>The splited tickets</div>
    },
    michelson: "SPLIT_TICKET",
    michelson_ref_url: michelson_ref_base_url + '#instr-SPLIT_TICKET',
    related: [
      { keyword: 'Tickets', link: '/docs/language-basics/ticket' },
    ]
  },
  join_tickets: {
    desc: <div>Join two compatible tickets</div>,
    parameters: [
      {
        type: 'ticket<T>',
        alias: 't1',
        desc: <div>The first ticket to join</div>
      },
      {
        type: 'ticket<T>',
        alias: 't2',
        desc: <div>The second ticket to join</div>
      }
    ],
    returns: {
      type: 'option<ticket<T>>',
      desc: <div>The joined ticket</div>
    },
    michelson: "JOIN_TICKETS",
    michelson_ref_url: michelson_ref_base_url + '#instr-JOIN_TICKETS',
    related: [
      { keyword: 'Tickets', link: '/docs/language-basics/ticket' },
    ]
  },
  sapling_empty_state: {
    desc: <div>Create a sapling state with the specified memo size.</div>,
    parameters: [
      {
        type: 'nat',
        alias: 'n',
        desc: <div>The memo size</div>
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
    desc: <div>Apply sapling transaction on sapling state</div>,
    parameters: [
      {
        type: 'sapling_state(n)',
        alias: 's',
        desc: <div>The sapling state</div>
      },
      {
        type: 'sapling_transaction(n)',
        alias: 't',
        desc: <div>The transaction</div>
      }
    ],
    returns: {
      type: 'option<int * sapling_state(n)>',
      desc: <div>The result</div>
    },
    michelson: "SAPLING_VERIFY_UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-SAPLING_VERIFY_UPDATE',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  pairing_check: {
    desc: <div></div>,
    parameters: [
      {
        type: 'list<bls12_381_g1 * bls12_381_g2>',
        alias: 'n',
        desc: <div>List of pairings</div>
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
    desc: <div></div>,
    parameters: [
      {
        type: 'chest_key',
        alias: 'k',
        desc: <div>The key of the chest</div>
      },
      {
        type: 'chest',
        alias: 'c',
        desc: <div>The chest</div>
      },
      {
        type: 'nat',
        alias: 't',
        desc: <div>Time</div>
      }
    ],
    returns: {
      type: 'bool',
      desc: <div>The result</div>
    },
    michelson: "OPEN_CHEST",
    michelson_ref_url: michelson_ref_base_url + '#instr-OPEN_CHEST',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
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

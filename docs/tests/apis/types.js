import React from 'react';
import Int from '../../../src/components/desc/tstypes/int.md'
import Nat from '../../../src/components/desc/tstypes/nat.md'
import Link from '@docusaurus/Link';


const getCommons = (t) => [
  {
    label : "toString",
    desc : <div>Returns a <code>string</code> representation</div>
  },
  {
    label : "equals",
    desc : <div>Takes a parameter of type {t}, and returns a <code>true</code> if it is equal to <code>this</code> value</div>
  },
  {
    label : "toMich",
    desc : <div>Returns the { getLinkTo("Micheline") } typed value</div>
  }
]

const getLinkTo = (v) => {
  return <Link to={"/docs/tests/apis/types#"+v.toLowerCase()}><code>{v}</code></Link>
}

export const types = {
  address: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Address"))
    ]
  },
  bls12_381_fr: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Bls12_381_fr"))
    ]
  },
  bls12_381_g1: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Bls12_381_g1"))
    ]
  },
  bls12_381_g2: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Bls12_381_g2"))
    ]
  },
  bytes: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Bytes"))
    ]
  },
  chain_id: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Chain_id"))
    ]
  },
  chest: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Chest"))
    ]
  },
  chest_key: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("chest_key"))
    ]
  },
  duration: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Duration"))
    ]
  },
  entrypoint: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Entrypoint"))
    ]
  },
  enum: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Enum"))
    ]
  },
  int : {
    desc : <Int />,
    ref : "",
    fails : [
      { keyword : "Not an Int value",
        desc : "when the constructor parameter does not represent a integer value"
      }
    ],
    methods : [
      ...getCommons(getLinkTo("Int")),
      {
        label : "to_big_number",
        desc : <div>Returns the <code>bignumber.js</code> value</div>
      },
      {
        label : "to_number",
        desc : <div>Returns the <code>number</code> value. It is approximated if <code>this</code> is over <code>number</code> representation capacity.</div>
      },
      {
        label : "plus",
        desc : <div>Takes a parameter of type { getLinkTo("Int") }, and returns the <i>sum</i> as an { getLinkTo("Int") } value</div>
      },
      {
        label : "minus",
        desc : <div>Takes a parameter of type { getLinkTo("Int") }, and returns the <i>subtraction</i> as an { getLinkTo("Int") } value</div>
      },
      {
        label : "times",
        desc : <div>Takes a parameter of type { getLinkTo("Int") }, and returns the <i>multiplication</i> as an { getLinkTo("Int") } value</div>
      },
      {
        label : "div",
        desc : <div>Takes a parameter of type { getLinkTo("Int") }, and returns the <i>division</i> of <code>this</code> by the parameter as a { getLinkTo("Rational") } value</div>
      }
    ]
  },
  key: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Key"))
    ]
  },
  key_hash: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Key_hash"))
    ]
  },
  nat : {
    desc : <Nat />,
    ref : "",
    fails : [
      { keyword : "Not a Nat value",
        desc : "when the constructor parameter does not represent a natural value"
      }
    ],
    methods : [
      ...getCommons(getLinkTo("Nat")),
      {
        label : "to_big_number",
        desc : <div>Returns the <code>bignumber.js</code> value</div>
      },
      {
        label : "to_number",
        desc : <div>Returns the <code>number</code> value. It is approximated if <code>this</code> is over <code>number</code> representation capacity.</div>
      },
      {
        label : "plus",
        desc : <div>Takes a parameter of type { getLinkTo("Nat") }, and returns the <i>sum</i> as a { getLinkTo("Nat") } value</div>
      },
      {
        label : "minus",
        desc : <div>Takes a parameter of type { getLinkTo("Nat") }, and returns the <i>subtraction</i> as an { getLinkTo("Int") } value</div>
      },
      {
        label : "times",
        desc : <div>Takes a parameter of type { getLinkTo("Nat") }, and returns the <i>multiplication</i> as a { getLinkTo("Nat") } value</div>
      },
      {
        label : "div",
        desc : <div>Takes a parameter of type { getLinkTo("Nat") }, and returns the <i>division</i> of <code>this</code> by the parameter as a { getLinkTo("Rational") } value</div>
      }
    ]
  },
  option: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Option"))
    ]
  },
  or: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Or"))
    ]
  },
  rational: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Rational"))
    ]
  },
  sapling_state: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Sapling_state"))
    ]
  },
  sapling_transaction: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Sapling_transaction"))
    ]
  },
  signature: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Signature"))
    ]
  },
  tez: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Tez"))
    ]
  },
  ticket: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Ticket"))
    ]
  },
  tx_rollup_l2_address: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Tx_rollup_l2_address"))
    ]
  },
  unit: {
      desc : <div>TODO</div>,
    ref : "",
    fails : [],
    methods : [
      ...getCommons(getLinkTo("Unit"))
    ]
  },
}

const prims = [ "address", "bls12_381_fr", "bls12_381_g1", "bls12_381_g2", "bool", "bytes",
    "chain_id", "chest", "chest_key", "int", "key", "key_hash", "mutez", "nat",
    "never", "operation", "signature", "string", "timestamp", "tx_rollup_l2_address", "unit" ]

const prefix = "/docs/tests/apis/types#"

export const types_functions = {
  annotated_mich_to_array: {
    sig: 'todo',
    ref: 'annotated_mich_to_arrayx-t',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  bool_to_mich: {
    sig: 'todo',
    ref: 'bool_to_michv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  cmp_date: {
    sig: 'todo',
    ref: 'cmp_datea-b',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  date_to_mich: {
    sig: 'todo',
    ref: 'date_to_michv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  elt_to_mich: {
    sig: 'todo',
    ref: 'elt_to_micha-b',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  is_left: {
    sig: 'todo',
    ref: 'is_leftv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  is_right: {
    sig: 'todo',
    ref: 'is_rightv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  left_to_mich: {
    sig: 'todo',
    ref: 'left_to_michv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  list_to_mich: {
    sig: 'todo',
    ref: 'list_to_michl-tomich',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  list_annots_to_mich_type: {
    sig: 'todo',
    ref: 'list_annots_to_mich_typemt-annots',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  list_to_mich_type: {
    sig: 'todo',
    ref: 'list_to_mich_typemt',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_array_to_mich: {
    sig: 'todo',
    ref: 'mich_array_to_michl',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_address: {
    sig: 'todo',
    ref: 'mich_to_addressx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_bls12_381_fr: {
    sig: 'todo',
    ref: 'mich_to_bls12_381_frx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_bls12_381_g1: {
    sig: 'todo',
    ref: 'mich_to_bls12_381_g1x',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_bls12_381_g2: {
    sig: 'todo',
    ref: 'mich_to_bls12_381_g2x',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_bool: {
    sig: 'todo',
    ref: 'mich_to_boolx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_bytes: {
    sig: 'todo',
    ref: 'mich_to_bytesx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_chain_id: {
    sig: 'todo',
    ref: 'mich_to_chain_idx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_chest: {
    sig: 'todo',
    ref: 'mich_to_chestx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_chest_key: {
    sig: 'todo',
    ref: 'mich_to_chest_keyx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_date: {
    sig: 'todo',
    ref: 'mich_to_datex',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_duration: {
    sig: 'todo',
    ref: 'mich_to_durationx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_int: {
    sig: 'todo',
    ref: 'mich_to_intx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_key: {
    sig: 'todo',
    ref: 'mich_to_keyx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_key_hash: {
    sig: 'todo',
    ref: 'mich_to_key_hashx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_map: {
    sig: 'todo',
    ref: 'mich_to_mapx-f',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_nat: {
    sig: 'todo',
    ref: 'mich_to_natx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_option: {
    sig: 'todo',
    ref: 'mich_to_optionx-michto',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_or: {
    sig: 'todo',
    ref: 'mich_to_orx-mtl-mtr',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_rational: {
    sig: 'todo',
    ref: 'mich_to_rationalx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_signature: {
    sig: 'todo',
    ref: 'mich_to_signaturex',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_string: {
    sig: 'todo',
    ref: 'mich_to_stringx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_sapling_state: {
    sig: 'todo',
    ref: 'mich_to_sapling_statex',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_sapling_transaction: {
    sig: 'todo',
    ref: 'mich_to_sapling_transactionx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_tez: {
    sig: 'todo',
    ref: 'mich_to_tezx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_ticket: {
    sig: 'todo',
    ref: 'mich_to_ticketx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_tx_rollup_l2_address: {
    sig: 'todo',
    ref: 'mich_to_tx_rollup_l2_addressx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  mich_to_unit: {
    sig: 'todo',
    ref: 'mich_to_unitx',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  option_annot_to_mich_type: {
    sig: 'todo',
    ref: 'option_annot_to_mich_typea-annots',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  option_to_mich_type: {
    sig: 'todo',
    ref: 'option_to_mich_typea',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  or_to_mich_type: {
    sig: 'todo',
    ref: 'or_to_mich_typel-r-a',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  pair_to_mich: {
    sig: 'todo',
    ref: 'pair_to_michl',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  pair_annot_to_mich_type: {
    sig: 'todo',
    ref: 'pair_annot_to_mich_typep-a-b-annots',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  pair_array_to_mich_type: {
    sig: 'todo',
    ref: 'pair_array_to_mich_typel-annots',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  pair_to_mich_type: {
    sig: 'todo',
    ref: 'pair_to_mich_typep-a-b',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  prim_annot_to_mich_type: {
    sig: 'todo',
    ref: 'prim_annot_to_mich_typep-a',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  prim_to_mich_type : {
    sig: 'prim_to_mich_type(p : "int" | "nat" | ...)',
    ref : "prim_to_mich_typep",
    desc: <div>Utility function to build a Michelson type.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'p',
        desc: <div style={{ lineHeight : '28px' }}>"prim" value (one of { prims.map(p => {
          return <span><code>"{p}"</code>  </span>
        }) } )</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'MichelineType',
      desc: <div>Michelson type with "prim" <code>p</code></div>,
      prefix: prefix
    },
    related: [
      { keyword: 'Micheline', link: '/docs/tests/apis/types#micheline' },
    ]
  },
  right_to_mich: {
    sig: 'todo',
    ref: 'right_to_michv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  set_annot_to_mich_type: {
    sig: 'todo',
    ref: 'set_annot_to_mich_typemt-annots',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  set_to_mich: {
    sig: 'todo',
    ref: 'set_to_michv-tomich',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  set_to_mich_type: {
    sig: 'todo',
    ref: 'set_to_mich_typemt',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  string_cmp: {
    sig: 'todo',
    ref: 'string_cmpa-b',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  string_to_mich: {
    sig: 'todo',
    ref: 'string_to_michv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  ticket_annots_to_mich_type: {
    sig: 'todo',
    ref: 'ticket_annots_to_mich_typea-annots',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  ticket_to_mich_type: {
    sig: 'todo',
    ref: 'ticket_to_mich_typea',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  unit_to_mich: {
    sig: 'todo',
    ref: 'unit_to_mich',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
}

export const experiment = {
  blake2b: {
    sig: 'todo',
    ref: 'blake2bb',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  call: {
    sig: 'todo',
    ref: 'callc-e-a-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  delay_mockup_now_by_day: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_dayv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  delay_mockup_now_by_minute: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_minutev',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  delay_mockup_now_by_hour: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_hourv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  delay_mockup_now_by_second: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_secondv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  delay_mockup_now_by_week: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_weekv',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  deploy: {
    sig: 'todo',
    ref: 'deploypath-params-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  deploy_from_json: {
    sig: 'todo',
    ref: 'deploynamecode-storage-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  deploy_callback: {
    sig: 'todo',
    ref: 'deploy_callbackcode-mt-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  exec_batch: {
    sig: 'todo',
    ref: 'exec_batchcps-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  exec_getter: {
    sig: 'todo',
    ref: 'exec_getterc-e-a-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  exec_view: {
    sig: 'todo',
    ref: 'exec_viewc-e-a-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  expect_to_fail: {
    sig: 'todo',
    ref: 'expect_to_failf-e',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  expr_micheline_to_json: {
    sig: 'todo',
    ref: 'expr_micheline_to_jsoni',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_account: {
    sig: 'todo',
    ref: 'get_accountn',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_balance: {
    sig: 'todo',
    ref: 'get_balancea',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_big_map_value : {
    sig: 'get_big_map_value(id, key, kt, vt)',
    ref : "get_big_map_valueid-key-kv-kt",
    desc: <div>Returns the value associated to <code>key</code> in <Link to="/docs/reference/types#big_map<K,%20V>"><code>big_map</code></Link> with id <code>id</code>. It is used by the generated big map <Link to="/docs/tests/binding#storage-getters">getter</Link> of the contract's binding.</div>,
    parameters: [
      {
        type: 'number',
        alias: 'id',
        desc: <div>Big map identifier</div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'key',
        desc: <div>Key value</div>,
        prefix: prefix
      },
      {
        type: 'MichelineType',
        alias: 'kt',
        desc: <div>Key type</div>,
        prefix: prefix
      },
      {
        type: 'MichelineType',
        alias: 'vt',
        desc: <div>Value type</div>,
        prefix: prefix
      }
    ],
    returns: {
      type: 'Promise<any>',
      desc: <div>Micheline value associated to <code>key</code>, <code>null</code> if not found.</div>,
      withLink: false
    },
    related: [
      { keyword: 'Micheline', link: '/docs/tests/apis/types#micheline' },
      { keyword: 'MichelineType', link: '/docs/tests/apis/types#michelinetype' },
      { keyword: 'big_map', link: '/docs/reference/types#big_map<K,%20V>' },
    ]
  },
  get_call_param: {
    sig: 'todo',
    ref: 'get_call_paramc-e-a-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_callback_view: {
    sig: 'todo',
    ref: 'get_callback_viewca-mt',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_chain_id: {
    sig: 'todo',
    ref: 'get_chain_id',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_endpoint: {
    sig: 'todo',
    ref: 'get_endpoint',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_mockup_now: {
    sig: 'todo',
    ref: 'get_mockup_now',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_raw_storage: {
    sig: 'todo',
    ref: 'get_raw_storagea',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_storage: {
    sig: 'todo',
    ref: 'get_storagea',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  is_mockup: {
    sig: 'todo',
    ref: 'is_mockup',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  json_micheline_to_expr: {
    sig: 'todo',
    ref: 'json_micheline_to_expri',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  originate: {
    sig: 'todo',
    ref: 'originatepath-storage-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  pack: {
    sig: 'todo',
    ref: 'packo-t',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  set_endpoint: {
    sig: 'todo',
    ref: 'set_endpointe',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  set_mockup: {
    sig: 'todo',
    ref: 'set_mockup',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  set_mockup_chain_id:{
    sig: 'todo',
    ref: 'set_mockup_chain_idc',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  set_mockup_now: {
    sig: 'todo',
    ref: 'set_mockup_nowd',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  set_quiet: {
    sig: 'todo',
    ref: 'set_quietb',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  sign : {
    sig: 'sign(b, a)',
    ref : "signa-b",
    desc: <div>Signs bytes <code>b</code> with account <code>a</code></div>,
    parameters: [
      {
        type: 'Bytes',
        alias: 'b',
        desc: <div>Bytes to sign</div>,
        withLink: prefix
      },
      {
        type: 'Account',
        alias: 'a',
        desc: <div>Account to sign</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'Promise<Signature>',
      desc: <div>Signed bytes.</div>,
      withLink: false
    },
    related: [
      { keyword: 'Micheline', link: '/docs/tests/apis/types#micheline' },
      { keyword: 'MichelineType', link: '/docs/tests/apis/types#michelinetype' },
      { keyword: 'big_map', link: '/docs/reference/types#big_map<K,%20V>' },
    ]
  },
  transfer: {
    sig: 'todo',
    ref: 'transferf-t-a',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
}

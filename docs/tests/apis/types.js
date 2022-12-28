import React from 'react';
import Int from '../../../src/components/desc/tstypes/int.md'
import Nat from '../../../src/components/desc/tstypes/nat.md'
import Account from '../../../src/components/desc/tstypes/account.md'
import CallResult from '../../../src/components/desc/tstypes/callresult.md'
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
  },
  {
    label : "fromMich",
    desc : <div><i>Static</i> method that returns a {t} value from the { getLinkTo("Micheline") } argument</div>
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
  callParameter: {},
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
  micheline : {},
  michelineType : {},
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
const exp_prefix = "/docs/tests/apis/experiment#"

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
    desc: <div>Hashes bytes value with <Link to="https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29">blake2b</Link> algorithm.</div>,
    parameters: [
      {
        type: 'Bytes',
        alias: 'b',
        desc: <div>Bytes to hash</div>,
      }
    ],
    returns: {
      type: 'Bytes',
      desc: <div>Hashed bytes</div>,
    },
    related: [
      { keyword: 'blake2b', link: '/docs/reference/expressions/builtins#blake2b(b%20:%20bytes)' },
    ]
  },
  call: {
    sig: 'todo',
    ref: 'callc-e-a-p',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> call to contract's entry points used by <Link to="/docs/tests/binding#entry-points">contract binding</Link>.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'c',
        desc: <div>Contract address</div>,
        withLink: false
      },
      {
        type: 'string',
        alias: 'e',
        desc: <div>entry point name</div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'a',
        desc: <div>entry point argument</div>,
        prefix : prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Call parameter (<Link to="/docs/reference/expressions/constants#caller"><code>caller</code></Link> and <Link to="/docs/reference/expressions/constants#transferred"><code>transferred</code></Link>)</div>,
        withLink: false
      },
    ],
    returns: {
      type: 'CallResult',
      desc: <div>Various data about transaction.</div>,
      prefix : exp_prefix
    },
    related: [
      { keyword: 'exec_batch', link:'/docs/tests/apis/experiment#exec_batchcps-p' }
    ],
    fails: [
      {
        keyword: 'Error',
        desc: <div>An error is thrown if the transaction fails.</div>
      }
    ]
  },
  delay_mockup_now_by_day: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_dayv',
    desc: <div>Adds <code>v</code> days to mockup <Link to="/docs/reference/expressions/constants#now"><code>now</code></Link> value.</div>,
    parameters: [
      {
        type: 'number',
        alias: 'v',
        desc: <div>Number of days</div>,
        withLink: false
      }
    ],
    related: [
      { keyword: 'delay_mockup_now_by_minute', link: '/docs/tests/apis/experiment#delay_mockup_now_by_minutev' },
      { keyword: 'delay_mockup_now_by_hour', link: '/docs/tests/apis/experiment#delay_mockup_now_by_hourv' },
      { keyword: 'delay_mockup_now_by_second', link: '/docs/tests/apis/experiment#delay_mockup_now_by_secondv' },
      { keyword: 'delay_mockup_now_by_week', link: '/docs/tests/apis/experiment#delay_mockup_now_by_weekv' },
      { keyword: 'get_mockup_now', link: '/docs/tests/apis/experiment#get_mockup_now' },
      { keyword: 'set_mockup_now', link: '/docs/tests/apis/experiment#set_mockup_nowd' },
    ]
  },
  delay_mockup_now_by_minute: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_minutev',
    desc: <div>Adds <code>v</code> minutes to mockup <Link to="/docs/reference/expressions/constants#now"><code>now</code></Link> value.</div>,
    parameters: [
      {
        type: 'number',
        alias: 'v',
        desc: <div>Number of minutes</div>,
        withLink: false
      }
    ],
    related: [
      { keyword: 'delay_mockup_now_by_day', link: '/docs/tests/apis/experiment#delay_mockup_now_by_dayv' },
      { keyword: 'delay_mockup_now_by_hour', link: '/docs/tests/apis/experiment#delay_mockup_now_by_hourv' },
      { keyword: 'delay_mockup_now_by_second', link: '/docs/tests/apis/experiment#delay_mockup_now_by_secondv' },
      { keyword: 'delay_mockup_now_by_week', link: '/docs/tests/apis/experiment#delay_mockup_now_by_weekv' },
      { keyword: 'get_mockup_now', link: '/docs/tests/apis/experiment#get_mockup_now' },
      { keyword: 'set_mockup_now', link: '/docs/tests/apis/experiment#set_mockup_nowd' },
    ]
  },
  delay_mockup_now_by_hour: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_hourv',
    desc: <div>Adds <code>v</code> hours to mockup <Link to="/docs/reference/expressions/constants#now"><code>now</code></Link> value.</div>,
    parameters: [
      {
        type: 'number',
        alias: 'v',
        desc: <div>Number of hours</div>,
        withLink: false
      }
    ],
    related: [
      { keyword: 'delay_mockup_now_by_day', link: '/docs/tests/apis/experiment#delay_mockup_now_by_dayv' },
      { keyword: 'delay_mockup_now_by_minute', link: '/docs/tests/apis/experiment#delay_mockup_now_by_minutev' },
      { keyword: 'delay_mockup_now_by_second', link: '/docs/tests/apis/experiment#delay_mockup_now_by_secondv' },
      { keyword: 'delay_mockup_now_by_week', link: '/docs/tests/apis/experiment#delay_mockup_now_by_weekv' },
      { keyword: 'get_mockup_now', link: '/docs/tests/apis/experiment#get_mockup_now' },
      { keyword: 'set_mockup_now', link: '/docs/tests/apis/experiment#set_mockup_nowd' },
    ]
  },
  delay_mockup_now_by_second: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_secondv',
    desc: <div>Adds <code>v</code> seconds to mockup <Link to="/docs/reference/expressions/constants#now"><code>now</code></Link> value.</div>,
    parameters: [
      {
        type: 'number',
        alias: 'v',
        desc: <div>Number of seconds</div>,
        withLink: false
      }
    ],
    related: [
      { keyword: 'delay_mockup_now_by_day', link: '/docs/tests/apis/experiment#delay_mockup_now_by_dayv' },
      { keyword: 'delay_mockup_now_by_minute', link: '/docs/tests/apis/experiment#delay_mockup_now_by_minutev' },
      { keyword: 'delay_mockup_now_by_hour', link: '/docs/tests/apis/experiment#delay_mockup_now_by_hourv' },
      { keyword: 'delay_mockup_now_by_week', link: '/docs/tests/apis/experiment#delay_mockup_now_by_weekv' },
      { keyword: 'get_mockup_now', link: '/docs/tests/apis/experiment#get_mockup_now' },
      { keyword: 'set_mockup_now', link: '/docs/tests/apis/experiment#set_mockup_nowd' },
    ]

  },
  delay_mockup_now_by_week: {
    sig: 'todo',
    ref: 'delay_mockup_now_by_weekv',
    desc: <div>Adds <code>v</code> weeks to mockup <Link to="/docs/reference/expressions/constants#now"><code>now</code></Link> value.</div>,
    parameters: [
      {
        type: 'number',
        alias: 'v',
        desc: <div>Number of weeks</div>,
        withLink: false
      }
    ],
    related: [
      { keyword: 'delay_mockup_now_by_day', link: '/docs/tests/apis/experiment#delay_mockup_now_by_dayv' },
      { keyword: 'delay_mockup_now_by_minute', link: '/docs/tests/apis/experiment#delay_mockup_now_by_minutev' },
      { keyword: 'delay_mockup_now_by_hour', link: '/docs/tests/apis/experiment#delay_mockup_now_by_hourv' },
      { keyword: 'delay_mockup_now_by_second', link: '/docs/tests/apis/experiment#delay_mockup_now_by_secondv' },
      { keyword: 'get_mockup_now', link: '/docs/tests/apis/experiment#get_mockup_now' },
      { keyword: 'set_mockup_now', link: '/docs/tests/apis/experiment#set_mockup_nowd' },
    ]
  },
  deploy: {
    sig: 'todo',
    ref: 'deploypath-params-p',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function to deploy an Archetype contract, called by the <Link to="/docs/tests/binding#deploy"><code>deploy</code></Link> method of the contract's binding.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'path',
        desc: <div>Path to contract (relative to command's execution folder)</div>,
        withLink: false
      },
      {
        type: 'any',
        alias: 'params',
        desc: <div>Contract intital storage values</div>,
        prefix: prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Call parameter (<Link to="/docs/reference/expressions/constants#caller"><code>caller</code></Link> and <Link to="/docs/reference/expressions/constants#transferred"><code>transferred</code></Link>)</div>,
        withLink: false
      },
    ],
    returns: {
      type: 'DeployResult',
      desc: <div>Various data about deployment transaction.</div>,
      withLink: false
    }
  },
  deploy_from_json: {
    sig: 'todo',
    ref: 'deploy_from_jsonnamecode-storage-p',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function to deploy a contract from its code in <Link to={prefix+'micheline'}><code>Micheline</code></Link> code. It is used by <Link to={exp_prefix+'deploy_callbackcode-mt-p'}><code>deploy_callback</code></Link> function.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'name',
        desc: <div>Contract name (aka alias)</div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'code',
        desc: <div>Contract code</div>,
        prefix: prefix
      },
      {
        type: 'Micheline',
        alias: 'storage',
        desc: <div>Contract storage</div>,
        prefix: prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Parameters</div>,
        prefix: prefix
      },
    ],
    returns: {
      type: 'DeployResult',
      desc: <div>Deployment transaction data, including contract address</div>,
      withLink: false
    }
  },
  deploy_callback: {
    sig: 'todo',
    ref: 'deploy_callbackname-mt-p',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function to deploy a contract that calls the <Link to="/docs/reference/declarations/entrypoint#getter"><code>getter</code></Link> entry point of another contract. It is used by the contract binding when <Link to="/docs/tests/binding#getters">calling a getter</Link> entry point to deploy a caller contract.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'name',
        desc: <div>Getter contract name</div>,
        withLink: false
      },
      {
        type: 'MichelineType',
        alias: 'mt',
        desc: <div>Micheline type of the getter's return value</div>,
        prefix: prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Parameters</div>,
        prefix: prefix
      }
    ],
    returns: {
      type: 'DeployResult',
      desc: <div>Deployment transaction data, including contract address</div>,
      withLink: false
    }
  },
  exec_batch: {
    sig: 'todo',
    ref: 'exec_batchcps-p',
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function to execute calls to entry points in <i>batch</i> mode. See <Link to="/docs/tests/binding#entry-points-parameters">here</Link> for more information.</div>,
    parameters: [
      {
        type: 'Array<CallParameter>',
        alias: 'cps',
        desc: <div>Array of <Link to="/docs/tests/apis/types#callparameter"><code>CallParameter</code></Link> values</div>,
        withLink: false
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Call parameter (<Link to="/docs/reference/expressions/constants#caller"><code>caller</code></Link> and <Link to="/docs/reference/expressions/constants#transferred"><code>transferred</code></Link>)</div>,
        withLink: false
      },
    ],
    returns: {
      type: 'CallResult',
      desc: <div>Transaction information.</div>,
      prefix: exp_prefix
    },
    related: [
      { keyword: 'call', link:'/docs/tests/apis/experiment#callc-e-a-p' }
    ],
    fails: [
      {
        keyword: 'Error',
        desc: <div>An error is thrown if one the transactions fails.</div>
      }
    ]
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
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function that succeeds (ie. does not fail) if contract's error <code>e</code> is thrown by <code>f</code>.</div>,
    parameters: [
      {
        type: 'async () => void',
        alias: 'f',
        desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function that executes calls to contract.</div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'e',
        desc: <div>Contract error (may be found in binding's <code>errors</code> field)</div>,
        prefix: prefix
      },
    ],
    related: [
      { keyword: 'errors',  link:'/docs/tests/binding#errors' }
    ]
  },
  expr_micheline_to_json: {
    sig: 'todo',
    ref: 'expr_micheline_to_jsoni',
    desc: <div>Function that parses and converts the input string <code>i</code> to a Micheline value.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'i',
        desc: <div>String value to parse and convert</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline value</div>,
      prefix: prefix
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

export const exp_types = {
  account: {
    desc : <Account />,
    ref : "",
    showfail : false,
    methods : [
      { label: 'get_address',
        desc: <div>Returns the account's <Link to={prefix+'address'}><code>Address</code></Link></div>
      },
      {
        label: 'get_public_key',
        desc: <div>Returns account's public <Link to={prefix+'key'}><code>Key</code></Link></div>
      },
      {
        label: 'get_secret_key',
        desc: <div>Returns account's secret key as a <code>string</code></div>
      },
      {
        label: 'get_name',
        desc: <div>Returns account's name (aka alias)</div>
      },
      {
        label: 'get_balance',
        desc: <div>Returns account's balance as a <Link to={prefix+'tez'}><code>Tez</code></Link> value</div>
      },
      {
        label: 'sign',
        desc: <div>Signs a <Link to={prefix+'bytes'}><code>Bytes</code></Link> value and returns a <Link to={prefix+'signature'}><code>Signature</code></Link></div>
      }
    ]
  },
  callresult: {
    desc : <CallResult />,
    ref : "",
    showfail: false
  },
}

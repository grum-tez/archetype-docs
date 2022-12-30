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
    desc: <div>Returns the annotated leafs of imbricated <code>Pair</code> nodes.</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'x',
        desc: <div>Micheline input (likeky a <code>Pair</code>)</div>,
        prefix: prefix
      },
      {
        type: 'MichelineType',
        alias: 't',
        desc: <div><code>x</code>'s Micheline Type</div>,
        prefix: prefix
      },

    ],
    returns: {
      type: 'Array<Micheline>',
      desc: <div>Array of annotated <code>Pair</code>'s leafs</div>,
      withLink: false
    },
    fails: [
      { keyword: 'Found an unannotated node that is not a pair', desc: <div>When a <code>Pair</code>'s leaf is not annotated</div> }
    ]
  },
  bool_to_mich: {
    sig: 'todo',
    ref: 'bool_to_michv',
    desc: <div>Converts <code>boolean</code> value to Micheline.</div>,
    parameters: [
      {
        type: 'boolean',
        alias: 'v',
        desc: <div>Boolean value to convert.</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline encoding of <code>v</code></div>,
      prefix: prefix
    }
  },
  cmp_date: {
    sig: 'todo',
    ref: 'cmp_datea-b',
    desc: <div>Compares two dates at second precision, ie milliseconds are ignored. It is typically used to compare a TypesScript date with a date retrieved from the blockchain.</div>,
    parameters: [
      {
        type: 'Date',
        alias: 'a',
        desc: <div>Date to compare</div>,
        withLink: false
      },
      {
        type: 'Date',
        alias: 'b',
        desc: <div>Date to compare</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'boolean',
      desc: <div><code>true</code> if <code>a</code> equals <code>b</code> (without milliseconds).</div>,
      withLink: false
    }
  },
  date_to_mich: {
    sig: 'todo',
    ref: 'date_to_michv',
    desc: <div>Converts a date to Micheline.</div>,
    parameters: [
      {
        type: 'Date',
        alias: 'v',
        desc: <div>Date to convert</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline encoding of <code>v</code></div>,
      prefix: prefix
    }
  },
  elt_to_mich: {
    sig: 'todo',
    ref: 'elt_to_micha-b',
    desc: <div>Makes a Micheline <code>Elt</code> node.</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'a',
        desc: <div>Micheline element</div>,
        prefix: prefix
      },
      {
        type: 'Micheline',
        alias: 'b',
        desc: <div>Micheline element</div>,
        prefix: prefix
      },
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline <code>Elt</code> node of <code>a</code> and <code>b</code></div>,
      prefix: prefix
    }
  },
  is_left: {
    sig: 'todo',
    ref: 'is_leftv',
    desc: <div>Checks if <code>v</code> is a <code>Left</code> node.</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'v',
        desc: <div>Micheline value</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'boolean',
      desc: <div><code>true</code> if and only if <code>v</code> is <code>Left</code></div>,
      withLink: false
    }
  },
  is_right: {
    sig: 'todo',
    ref: 'is_rightv',
    desc: <div>Checks if <code>v</code> is a <code>Right</code> node.</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'v',
        desc: <div>Micheline value</div>,
        prefix: prefix
      }
    ],
    returns: {
      type: 'boolean',
      desc: <div><code>true</code> if and only if <code>v</code> is <code>Right</code></div>,
      withLink: false
    }
  },
  left_to_mich: {
    sig: 'todo',
    ref: 'left_to_michv',
    desc: <div>Makes a Micheline <code>Left</code> value.</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'v',
        desc: <div>Micheline argument to <code>Left</code> value</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline <code>Left</code> value</div>,
      prefix : prefix
    }
  },
  list_to_mich: {
    sig: 'todo',
    ref: 'list_to_michl-tomich',
    desc: <div>Applies function <code>toMich</code> to elements in <code>l</code></div>,
    parameters: [
      {
        type: 'Array<T>',
        alias: 'l',
        desc: <div>Array of elements</div>,
        withLink: false
      },
      {
        type: '{ (a: T): Micheline }',
        alias: 'toMich',
        desc: <div>Function to apply to elements of <code>l</code></div>,
        withLink: false
      },
    ],
    returns: {
      type: 'Array<Micheline>',
      desc: <div>Array of Micheline values</div>,
      withLink: false
    }
  },
  list_annots_to_mich_type: {
    sig: 'todo',
    ref: 'list_annots_to_mich_typemt-annots',
    desc: <div>Make an annotated Micheline type <code>list</code> of elements of type <code>mt</code></div>,
    parameters: [
      {
        type: 'MichelineType',
        alias: 'mt',
        desc: <div>elements' Micheline type</div>,
        prefix: prefix
      },
      {
        type: 'Array<string>',
        alias: 'annots',
        desc: <div>List type annotations</div>,
        withLink: false
      },
    ],
    returns: {
      type: 'MichelineType',
      desc: <div><code>list</code> Micheline type</div>,
      prefix: prefix
    }
  },
  list_to_mich_type: {
    sig: 'todo',
    ref: 'list_to_mich_typemt',
    desc: <div>Make a Micheline type <code>list</code> of elements of type <code>mt</code></div>,
    parameters: [
      {
        type: 'MichelineType',
        alias: 'mt',
        desc: <div>elements' Micheline type</div>,
        prefix: prefix
      },
    ],
    returns: {
      type: 'MichelineType',
      desc: <div><code>list</code> Micheline type</div>,
      prefix: prefix
    }
  },
  mich_array_to_mich: {
    sig: 'todo',
    ref: 'mich_array_to_michl',
    desc: <div>Makes a right comb of Micheline elements <code>l</code></div>,
    parameters: [
      {
        type: 'Micheline[]',
        alias: 'l',
        desc: <div>Micheline elements</div>,
        withLink: false
      },
    ],
    returns: {
      type: 'Micheline',
      desc: <div>right comb of <code>l</code></div>,
      prefix: prefix
    }
  },
  mich_to_bool: {
    sig: 'todo',
    ref: 'mich_to_boolx',
    desc: <div>Converts Micheline to <code>boolean</code> value</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'x',
        desc: <div>Value to convert</div>,
        prefix: prefix
      }
    ],
    returns: {
      type: 'boolean',
      desc: <div><code>true</code> if <code>x</code>'s prim is <code>True</code>, <code>false</code> if <code>False</code></div>,
      withLink: false
    },
    fails: [
      { keyword: '"Invalid prim"', desc: <div>if <code>x</code>'s prim is not <code>True</code> nor <code>false</code></div> }
    ]
  },
  mich_to_date: {
    sig: 'todo',
    ref: 'mich_to_datex',
    desc: <div>Converts Micheline to <code>Date</code> value</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'x',
        desc: <div>Value to convert</div>,
        prefix: prefix
      }
    ],
    returns: {
      type: 'Date',
      desc: <div>Converted <code>Date</code> value</div>,
      withLink: false
    },
    fails: [
      { keyword: 'Error', desc: <div>An error is thrown if <code>x</code>'s prim does not represent a date</div> }
    ]
  },
  mich_to_map: {
    sig: 'todo',
    ref: 'mich_to_mapx-f',
    desc: <div>Applies <code>f</code> to Micheline <code>Melt</code> values of <code>Marray</code> <code>x</code></div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'x',
        desc: <div><code>Marray</code> Micheline values of elements</div>,
        prefix: prefix
      },
      {
        type: '(k: Micheline, v: Micheline): [K, V]',
        alias: 'f',
        desc: <div>Function that returns a pair of values from a pair of Micheline values</div>,
        withLink: false
      },
    ],
    showfail: false,
    returns: {
      type: 'Array<[K, V]>',
      desc: <div>Array of pairs</div>,
      withLink: false
    }
  },
  mich_to_string: {
    sig: 'todo',
    ref: 'mich_to_stringx',
    desc: <div>Converts Micheline to <code>string</code></div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'x',
        desc: <div>Value to convert</div>,
        prefix: prefix
      }
    ],
    showfail: false,
    returns: {
      type: 'string',
      desc: <div>String value from <code>x</code></div>,
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
    desc: <div>Makes an <code>option</code> Micheline type of <code>a</code></div>,
    parameters: [
      {
        type: 'MichelineType',
        alias: 'a',
        desc: <div>Micheline type</div>,
        prefix: prefix
      }
    ],
    returns: {
      type: 'MichelineType',
      desc: <div><code>option</code> Micheline type</div>,
      prefix: prefix
    }
  },
  or_to_mich_type: {
    sig: 'todo',
    ref: 'or_to_mich_typel-r-a',
    desc: <div>Makes an <code>or</code> Micheline type of <code>l</code> and <code>r</code></div>,
    parameters: [
      {
        type: 'MichelineType',
        alias: 'l',
        desc: <div>Left Micheline type</div>,
        prefix: prefix
      },
      {
        type: 'MichelineType',
        alias: 'r',
        desc: <div>Right Micheline type</div>,
        prefix: prefix
      },
    ],
    returns: {
      type: 'MichelineType',
      desc: <div><code>or</code> Micheline type</div>,
      prefix: prefix
    }
  },
  pair_to_mich: {
    sig: 'todo',
    ref: 'pair_to_michl',
    desc: <div>Makes a <code>Pair</code> Micheline value with <code>l</code> element as argument</div>,
    parameters: [
      {
        type: 'Array<Micheline>',
        alias: 'l',
        desc: <div>Argument of <code>Pair</code> Micheline value</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'Micheline',
      desc: <div><code>Pair</code> Micheline value</div>,
      prefix: prefix
    }
  },
  pair_annot_to_mich_type: {
    sig: 'todo',
    ref: 'pair_annot_to_mich_typep-a-b-annots',
    desc: <div>Makes a Micheline node with prim <code>p</code> and arguments <code>a</code> and <code>b</code></div>,
    parameters: [
      {
        type: 'string',
        alias: 'p',
        desc: <div>Prim value: one of <code>"big_map"</code> <code>"lambda"</code> <code>"or"</code></div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'a',
        desc: <div>First argument</div>,
        prefix: prefix
      },
      {
        type: 'Micheline',
        alias: 'b',
        desc: <div>Second argument</div>,
        prefix: prefix
      },
      {
        type: 'string[]',
        alias: 'annots',
        desc: <div>Annotations</div>,
        withLink: false
      },
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline value of prim <code>p</code></div>,
      prefix: prefix
    }
  },
  pair_array_to_mich_type: {
    sig: 'todo',
    ref: 'pair_array_to_mich_typel-annots',
    desc: <div>Makes a <code>pair</code> Micheline type of types <code>l</code></div>,
    parameters: [
      {
        type: 'MichelineType[]',
        alias: 'l',
        desc: <div>Array of Micheline Type values</div>,
        withLink: false
      },
      {
        type: 'string[]',
        alias: 'annots',
        desc: <div>Annotations</div>,
        withLink: false
      },
    ],
    returns: {
      type: 'MichelineType',
      desc: <div><code>pair</code> Micheline type</div>,
      prefix: prefix
    }
  },
  pair_to_mich_type: {
    sig: 'todo',
    ref: 'pair_to_mich_typep-a-b',
    desc: <div>Makes a Micheline node with prim <code>p</code> and arguments <code>a</code> and <code>b</code></div>,
    parameters: [
      {
        type: 'string',
        alias: 'p',
        desc: <div>Prim value: one of <code>"big_map"</code> <code>"lambda"</code> <code>"or"</code></div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'a',
        desc: <div>First argument</div>,
        prefix: prefix
      },
      {
        type: 'Micheline',
        alias: 'b',
        desc: <div>Second argument</div>,
        prefix: prefix
      },
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline value of prim <code>p</code></div>,
      prefix: prefix
    }
  },
  prim_annot_to_mich_type: {
    sig: 'todo',
    ref: 'prim_annot_to_mich_typep-a',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'p',
        desc: <div style={{ lineHeight : '28px' }}>"prim" value (one of { prims.map(p => {
          return <span><code>"{p}"</code>  </span>
        }) } )</div>,
        withLink: false
      },
      {
        type: 'string[]',
        alias: 'a',
        desc: <div>Annotations</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'MichelineType',
      desc: <div>Micheline Type with "prim" <code>p</code></div>,
      prefix: prefix
    }
  },
  prim_to_mich_type : {
    sig: 'prim_to_mich_type(p : "int" | "nat" | ...)',
    ref : "prim_to_mich_typep",
    desc: <div>Makes a Michelson type.</div>,
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
    ref: 'left_to_michv',
    desc: <div>Makes a Micheline <code>Right</code> value.</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'v',
        desc: <div>Micheline argument to <code>Right</code> value</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline <code>Right</code> value</div>,
      prefix : prefix
    }
  },
  set_annot_to_mich_type: {
    sig: 'todo',
    ref: 'set_annot_to_mich_typemt-annots',
    desc: <div>Makes a Micheline type <code>set</code> of elements of type <code>mt</code></div>,
    parameters: [
      {
        type: 'MichelineType',
        alias: 'mt',
        desc: <div>Set element type</div>,
        prefix: prefix
      },
      {
        type: 'string[]',
        alias: 'annots',
        desc: <div>Annotations</div>,
        withLink: false
      },

    ],
    returns: {
      type: 'MichelineType',
      desc: <div><code>set</code> Micheline type</div>,
      prefix: prefix
    }
  },
  set_to_mich_type: {
    sig: 'todo',
    ref: 'set_to_mich_typemt',
    desc: <div>Makes a Micheline type <code>set</code> of elements of type <code>mt</code></div>,
    parameters: [
      {
        type: 'MichelineType',
        alias: 'mt',
        desc: <div>Set element type</div>,
        prefix: prefix
      },
    ],
    returns: {
      type: 'MichelineType',
      desc: <div><code>set</code> Micheline type</div>,
      prefix: prefix
    }
  },
  string_cmp: {
    sig: 'todo',
    ref: 'string_cmpa-b',
    desc: <div>Compares two string values.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>String to compare</div>,
        withLink: false
      },
      {
        type: 'string',
        alias: 'b',
        desc: <div>String to compare</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'boolean',
      desc: <div><code>true</code> if <code>a</code> equals <code>b</code></div>,
      withLink: false
    }
  },
  string_to_mich: {
    sig: 'todo',
    ref: 'string_to_michv',
    desc: <div>Converts a string value to its Micheline representation.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'v',
        desc: <div>String value to convert</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline value</div>,
      prefix: prefix
    }
  },
  ticket_annots_to_mich_type: {
    sig: 'todo',
    ref: 'ticket_annots_to_mich_typemt-annots',
    desc: <div>Makes a <code>ticket</code> Micheline type of element of type <code>mt</code></div>,
    parameters: [
      {
        type: 'MichelineType',
        alias: 'mt',
        desc: <div>Micheline type</div>,
        prefix: prefix
      },
      {
        type: 'string[]',
        alias: 'annots',
        desc: <div>Annotations</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'MichelineType',
      desc: <div><code>ticket</code> Micheline type</div>,
      withLink: false
    }
  },
  ticket_to_mich_type: {
    sig: 'todo',
    ref: 'ticket_to_mich_typemt',
    desc: <div>Makes a <code>ticket</code> Micheline type of element of type <code>mt</code></div>,
    parameters: [
      {
        type: 'MichelineType',
        alias: 'mt',
        desc: <div>Micheline type</div>,
        prefix: prefix
      },
    ],
    returns: {
      type: 'MichelineType',
      desc: <div><code>ticket</code> Micheline type</div>,
      withLink: false
    }
  },
  unit_to_mich: {
    sig: 'todo',
    ref: 'unit_to_mich',
    desc: <div>Converts <code>Unit</code> value to Micheline.</div>,
    parameters: [
    ],
    returns: {
      type: 'Micheline',
      desc: <div>Micheline <code>Unit</code> value</div>,
      prefix: prefix
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
    showfail : false,
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
    showfail : false,
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
    showfail : false,
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
    showfail : false,
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
    showfail : false,
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
    showfail : false,
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
    showfail : false,
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
    showfail : false,
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
    showfail : false,
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
  exec_view: {
    sig: 'todo',
    ref: 'exec_viewc-n-a-p',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function to call on on-chain contract's <Link to="/docs/reference/declarations/view"><code>view</code></Link>. It is used by the contract binding to <Link to="/docs/tests/binding#views">call a view</Link>.</div>,
    parameters: [
      {
        type: 'Address',
        alias: 'a',
        desc: <div>Contract address</div>,
        prefix: prefix
      },
      {
        type: 'string',
        alias: 'n',
        desc: <div>View's name</div>,
        withLink : false
      },
      {
        type: 'Micheline',
        alias: 'a',
        desc: <div>View argument</div>,
        prefix : prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Parameters</div>,
        prefix: prefix
      },
    ],
    showfail : false,
    returns: {
      type: 'ViewResult',
      desc: <div>View's returned value</div>,
      withLink: false
    }
  },
  expect_to_fail: {
    sig: 'todo',
    ref: 'expect_to_failf-e',
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function that succeeds (ie. does not fail) if <Link to="/docs/tests/binding#errors">contract's error</Link> <code>e</code> is thrown by <code>f</code>.</div>,
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
    showfail : false,
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
    },
    showfail : false,
    related: [
      { keyword: 'json_micheline_to_expr', link: '/docs/tests/apis/experiment#json_micheline_to_expri' }
    ]
  },
  get_account: {
    sig: 'todo',
    ref: 'get_accountn',
    desc: <div>Returns account from alias.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'n',
        desc: <div>Account name</div>,
        withLink: false
      }
    ],
    showfail : false,
    returns: {
      type: 'Account',
      desc: <div>Account associated to name <code>n</code>, or <code>undefined</code> if not found</div>,
      prefix: exp_prefix
    }
  },
  get_balance: {
    sig: 'todo',
    ref: 'get_balancea',
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function to retrieve contract's balance</div>,
    parameters: [
      {
        type: 'Address',
        alias: 'a',
        desc: <div>Contract address</div>,
        prefix: prefix
      }
    ],
    showfail : false,
    returns: {
      type: 'Tez',
      desc: <div>Contract balance</div>,
      prefix: prefix
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
    showfail : false,
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
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function to get the transaction parameters to call an entry point. It is used by the contract's binding to get entry point transaction parameters for <Link to="/docs/tests/binding#entry-points-parameters">batch</Link> execution of entry points.</div>,
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
        desc: <div>Entry point name</div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'a',
        desc: <div>Entry point argument</div>,
        prefix: prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Parameters</div>,
        prefix: prefix
      },
    ],
    showfail : false,
    returns: {
      type: 'CallParameter',
      desc: <div>Transaction parameter</div>,
      withLink: false
    }
  },
  get_chain_id: {
    sig: 'todo',
    ref: 'get_chain_id',
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function that returns the <Link to="/docs/reference/expressions/constants#self_chain_id">chain id</Link></div>,
    parameters: [
    ],
    showfail : false,
    returns: {
      type: 'Chain_id',
      desc: <div>Chain id</div>,
      prefix: prefix
    }
  },
  get_endpoint: {
    sig: 'todo',
    ref: 'get_endpoint',
    desc: <div>Function that returns current <Link to="https://completium.com/docs/cli/network">endpoint</Link> setting.</div>,
    parameters: [

    ],
    showfail : false,
    returns: {
      type: 'string',
      desc: <div>Currently used endpoint</div>,
      withLink: false
    }
  },
  get_mockup_now: {
    sig: 'todo',
    ref: 'get_mockup_now',
    desc: <div>Function that returns <Link to="/docs/reference/expressions/constants#now"><code>now</code></Link> value in <i>mockup</i> mode only.</div>,
    parameters: [
    ],
    showfail : false,
    returns: {
      type: 'Date',
      desc: <div>Now value used by mockup mode.</div>,
      withLink: false
    }
  },
  get_raw_storage: {
    sig: 'todo',
    ref: 'get_raw_storagea',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function that returns a contract storage in JSON <Link to="/docs/tests/apis/types#micheline"><code>Micheline</code></Link> format. It is used by the contract binding.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    showfail : false,
    returns: {
      type: 'Micheline',
      desc: <div>Contract storage</div>,
      prefix: prefix
    }
  },
  get_storage: {
    sig: 'todo',
    ref: 'get_storagea',
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function that returns the <Link to="https://tezostaquito.io/">Taquito</Link> storage of a contract.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    showfail : false,
    returns: {
      type: 'any',
      desc: <div>Taquito's formatted contract storage.</div>,
      withLink: false
    }
  },
  is_mockup: {
    sig: 'todo',
    ref: 'is_mockup',
    desc: <div>Checks whether current endpoint is <i>mockup</i>.</div>,
    parameters: [
    ],
    showfail : false,
    returns: {
      type: 'boolean',
      desc: <div><code>true</code> if and only if current endpoint is <i>mockup</i></div>,
      withLink: false
    }
  },
  json_micheline_to_expr: {
    sig: 'todo',
    ref: 'json_micheline_to_expri',
    desc: <div>Serializes a <Link to="/docs/tests/apis/types#micheline"><code>Micheline</code></Link> value to a string representation.</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'i',
        desc: <div>Micheline input</div>,
        prefix: prefix
      }
    ],
    showfail : false,
    returns: {
      type: 'string',
      desc: <div>Serialized Micheline</div>,
      withLink: false
    },
    related: [
      { keyword: 'expr_micheline_to_json', link: '/docs/tests/apis/experiment#expr_micheline_to_jsoni' }
    ]
  },
  originate: {
    sig: 'todo',
    ref: 'originatepath-storage-p',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function to deploy an Michelson contract, called by the <Link to="/docs/tests/binding#deploy"><code>deploy</code></Link> method of the contract's binding.</div>,
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
    showfail : false,
    returns: {
      type: 'DeployResult',
      desc: <div>Various data about deployment transaction.</div>,
      withLink: false
    }
  },
  pack: {
    sig: 'todo',
    ref: 'packo-t',
    desc: <div>Serializes any packable <Link to="/docs/tests/apis/types#micheline"><code>Micheline</code></Link> value to a <Link to="/docs/tests/apis/types#bytes"><code>Bytes</code></Link> representation.</div>,
    parameters: [
      {
        type: 'Micheline',
        alias: 'o',
        desc: <div>Micheline value to pack</div>,
        prefix: prefix
      },
      {
        type: 'MichelineType',
        alias: 't',
        desc: <div><i>Optional</i> <code>o</code>'s MichelineType value</div>,
        prefix: prefix
      }
    ],
    showfail : false,
    returns: {
      type: 'Bytes',
      desc: <div>Serialized value</div>,
      prefix: prefix
    }
  },
  set_endpoint: {
    sig: 'todo',
    ref: 'set_endpointe',
    desc: <div>Sets Completium's <Link to="https://completium.com/docs/cli/network">endpoint</Link> value.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'e',
        desc: <div>Endpoint value</div>,
        withLink: false
      },
    ],
    showfail : false,
    related : [
      { keyword: 'set_mockup', link: '/docs/tests/apis/experiment#set_mockup' },
      { keyword: 'get_mockup', link: '/docs/tests/apis/experiment#get_mockup' },
      { keyword: 'get_endpoint', link: '/docs/tests/apis/experiment#get_endpoint' },
    ]
  },
  set_mockup: {
    sig: 'todo',
    ref: 'set_mockup',
    desc: <div>Set Completium's <Link to="https://completium.com/docs/cli/network">endpoint</Link> to <i>mockup</i>.</div>,
    parameters: [

    ],
    showfail : false,
    related : [
      { keyword: 'set_endpoint', link: '/docs/tests/apis/experiment#set_endpoint' },
      { keyword: 'get_mockup', link: '/docs/tests/apis/experiment#get_mockup' },
      { keyword: 'get_endpoint', link: '/docs/tests/apis/experiment#get_endpoint' },
    ]

  },
  set_mockup_chain_id:{
    sig: 'todo',
    ref: 'set_mockup_chain_idc',
    desc: <div>Set mockup mode's <Link to="/docs/reference/expressions/constants#self_chain_id">chain id</Link> value.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'c',
        desc: <div>Chain id value</div>,
        withLink: false
      },
    ],
    showfail : false,
    related : [
      { keyword: 'get_chain_id', link: '/docs/tests/apis/experiment#get_chain_id' },

    ]
  },
  set_mockup_now: {
    sig: 'todo',
    ref: 'set_mockup_nowd',
    desc: <div>Set mockup mode's <Link to="/docs/reference/expressions/constants#now"><code>now</code></Link> value.</div>,
    parameters: [
      {
        type: 'Date',
        alias: 'd',
        desc: <div>Now date. Note that blockchain timestamp precision is second-wise; hence Date's milliseconds are ignored.</div>,
        withLink: false
      }
    ],
    showfail : false,
    related: [
      { keyword: 'delay_mockup_now_by_minute', link: '/docs/tests/apis/experiment#delay_mockup_now_by_minutev' },
      { keyword: 'delay_mockup_now_by_day', link: '/docs/tests/apis/experiment#delay_mockup_now_by_dayv' },
      { keyword: 'delay_mockup_now_by_hour', link: '/docs/tests/apis/experiment#delay_mockup_now_by_hourv' },
      { keyword: 'delay_mockup_now_by_second', link: '/docs/tests/apis/experiment#delay_mockup_now_by_secondv' },
      { keyword: 'delay_mockup_now_by_week', link: '/docs/tests/apis/experiment#delay_mockup_now_by_weekv' },
      { keyword: 'get_mockup_now', link: '/docs/tests/apis/experiment#get_mockup_now' },
      { keyword: 'date_cmp', link: '/docs/tests/apis/types#cmp_datea-b' },
    ]
  },
  set_quiet: {
    sig: 'todo',
    ref: 'set_quietb',
    desc: <div>Set quiet mode on or off. When off, tezos client's output are displayed (mockup mode).</div>,
    parameters: [
      {
        type: 'boolean',
        alias: 'b',
        desc: <div>Quiet setting.</div>,
        withLink: false
      }
    ],
    showfail : false,
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
    showfail : false,
    related: [
      { keyword: 'Micheline', link: '/docs/tests/apis/types#micheline' },
      { keyword: 'MichelineType', link: '/docs/tests/apis/types#michelinetype' },
      { keyword: 'big_map', link: '/docs/reference/types#big_map<K,%20V>' },
    ]
  },
  transfer: {
    sig: 'todo',
    ref: 'transferf-t-a',
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function to transfer Tez from one account to another.</div>,
    parameters: [
      {
        type: 'Account',
        alias: 'f',
        desc: <div>From account</div>,
        prefix: exp_prefix
      },
      {
        type: 'Account | string',
        alias: 'to',
        desc: <div>To account</div>,
        withLink: false
      },
      {
        type: 'bigint',
        alias: 'a',
        desc: <div>Transferred amount in <i>mutez</i></div>,
        withLink: false
      }
    ],
    showfail : false,
    returns: {
      type: 'Transfer Result',
      desc: <div>Transaction information.</div>,
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

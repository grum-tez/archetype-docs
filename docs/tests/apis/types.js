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
  }
}

const prims = [ "address", "bls12_381_fr", "bls12_381_g1", "bls12_381_g2", "bool", "bytes",
    "chain_id", "chest", "chest_key", "int", "key", "key_hash", "mutez", "nat",
    "never", "operation", "signature", "string", "timestamp", "tx_rollup_l2_address", "unit" ]

export const functions = {
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
        }) } )</div>
      }
    ],
    returns: {
      type: 'MichelineType',
      desc: <div>Michelson type with "prim" <code>p</code></div>
    },
    related: [
      { keyword: 'Micheline', link: '/docs/tests/apis/types#MichelineType' },
    ]
  },
}
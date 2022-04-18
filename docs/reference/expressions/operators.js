import React from "react"

import DivDesc from "../../../src/components/desc/div_desc.md"
import ModDesc from "../../../src/components/desc/mod_desc.md"

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference/'

const cmp_types = (ret) => [
  { typa: 'bool',         typb : 'bool',         typr: ret },
  { typa: 'nat',          typb : 'nat',          typr: ret },
  { typa: 'int',          typb : 'int',          typr: ret },
  { typa: 'tez',          typb : 'tez',          typr: ret },
  { typa: 'rational',     typb : 'rational',     typr: ret },
  { typa: 'date',         typb : 'date',         typr: ret },
  { typa: 'duration',     typb : 'duration',     typr: ret },
  { typa: 'enum',         typb : 'enum',         typr: ret },
  { typa: 'key',          typb : 'key',          typr: ret },
  { typa: 'key_hash',     typb : 'key_hash',     typr: ret },
  { typa: 'signature',    typb : 'signature',    typr: ret },
  { typa: 'option<T>',    typb : 'option<T>',    typr: ret,
    comment: <div>when <code>T</code> is comparable.</div> },
  { typa: 'or<T1,T2>',    typb : 'or<T1,T2>',    typr: ret,
    comment: <div>when <code>T1</code> and <code>T2</code> are comparable.</div> },
  { typa: 'pkey<A>',      typb : 'pkey<A>',      typr: ret },
  { typa: 'tuple',        typb : 'tuple',        typr: ret,
    comment: <div>when all composing types are comparable</div> },
  { typa: 'string',       typb : 'string',       typr: ret },
  { typa: 'bytes',        typb : 'bytes',        typr: ret },
  { typa: 'address',      typb : 'address',      typr: ret },
  { typa: 'chain_id',     typb : 'chain_id',     typr: ret },
  { typa: 'unit',         typb : 'unit',         typr: ret },
  { typa: 'never',        typb : 'never',        typr: ret },
]

const cmp_types_promotions = (ret) => [
  { typa: 'int',         typb : 'nat',         typr: ret },
  { typa: 'nat',         typb : 'int',         typr: ret },
  { typa: 'int',         typb : 'rational',    typr: ret },
  { typa: 'rational',    typb : 'int',         typr: ret },
  { typa: 'nat',         typb : 'rational',    typr: ret },
  { typa: 'rational',    typb : 'nat',         typr: ret },

]

export const operators = {
  add: {
    label: 'a + b',
    link: 'a--b',
    desc: <div>Adds numbers or concatenates strings.</div>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'rational',     typb : 'rational',     typr: 'rational' },
      { typa: 'tez',          typb : 'tez',          typr: 'tez' },
      { typa: 'string',       typb : 'string',       typr: 'string' },
      { typa: 'duration',     typb : 'duration',     typr: 'duration' },
      { typa: 'date',         typb : 'duration',     typr: 'date' },
      { typa: 'duration',     typb : 'date',         typr: 'date' },
      { typa: 'bls12_381_fr', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g1', typb : 'bls12_381_g1', typr: 'bls12_381_g1' },
      { typa: 'bls12_381_g2', typb : 'bls12_381_g2', typr: 'bls12_381_g2' },
    ],
    promotions: [
      { typa: 'nat', typb : 'int', typr: 'int' },
      { typa: 'int', typb : 'nat', typr: 'int' },
      { typa: 'rational', typb : 'nat', typr: 'rational' },
      { typa: 'nat', typb : 'rational', typr: 'rational' },
      { typa: 'rational', typb : 'int', typr: 'rational' },
      { typa: 'nat', typb : 'rational', typr: 'rational' },
      { typa: 'bls12_381_fr', typb : 'nat', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_fr', typb : 'int', typr: 'bls12_381_fr' },
      { typa: 'nat', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'int', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
    ],
    fails: [
      {
        keyword: '"proto.alpha.tez.addition_overflow"',
        desc: <div>when <code>a + b</code> value typed <code>tez</code> exceeds <code>9223372036854775807utz</code></div>
      }
    ],
  },
  sub : {
    label: 'a - b',
    link: 'a---b',
    desc: 'Subtracts numbers.',
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'int' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'tez',          typb : 'tez',          typr: 'tez' },
      { typa: 'rational',     typb : 'rational',     typr: 'rational' },
      { typa: 'duration',     typb : 'duration',     typr: 'duration' },
      { typa: 'date',         typb : 'duration',     typr: 'date' },
      { typa: 'bls12_381_fr', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g1', typb : 'bls12_381_g1', typr: 'bls12_381_g1' },
      { typa: 'bls12_381_g2', typb : 'bls12_381_g2', typr: 'bls12_381_g2' },
    ],
    promotions: [
      { typa: 'nat', typb : 'int', typr: 'int' },
      { typa: 'int', typb : 'nat', typr: 'int' },
      { typa: 'rational', typb : 'nat', typr: 'rational' },
      { typa: 'nat', typb : 'rational', typr: 'rational' },
      { typa: 'rational', typb : 'int', typr: 'rational' },
      { typa: 'nat', typb : 'rational', typr: 'rational' },
      { typa: 'bls12_381_fr', typb : 'nat', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_fr', typb : 'int', typr: 'bls12_381_fr' },
      { typa: 'nat', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'int', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
    ],
    fails: [
      {
        keyword: '"INVALID_NEGATIVE_TEZ"',
        desc: <div>when <code>a - b</code> value typed <code>tez</code> is negative.</div>
      }
    ],
  },
  minus : {
    label: '- a',
    link: '--a',
    desc: <div>Returns the opposite of <code>a</code>.</div>,
    binary: false,
    types: [
      { typa: 'int', typr: 'int' },
      { typa: 'nat', typr: 'int' },
      { typa: 'duration', typr: 'duration' },
      { typa: 'rational', typr: 'rational' },
      { typa: 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g1', typr: 'bls12_381_g1' },
      { typa: 'bls12_381_g2', typr: 'bls12_381_g2' },
    ]
  },
  mult: {
    label: 'a * b',
    link: 'a--b-1',
    desc: 'Multiplies two numbers',
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'rational',     typb : 'rational',     typr: 'rational' },
      { typa: 'nat',          typb : 'tez',          typr: 'tez' },
      { typa: 'int',          typb : 'tez',          typr: 'tez' },
      { typa: 'rational',     typb : 'tez',          typr: 'tez',
        comment:'(quotient of euclidean division)' },
      { typa: 'nat',          typb : 'duration',     typr: 'duration' },
      { typa: 'int',          typb : 'duration',     typr: 'duration' },
      { typa: 'bls12_381_fr', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g1', typb : 'bls12_381_fr', typr: 'bls12_381_g1' },
      { typa: 'bls12_381_g2', typb : 'bls12_381_fr', typr: 'bls12_381_g2' },
    ],
    promotions: [
      { typa: 'nat',          typb : 'int',          typr: 'int' },
      { typa: 'int',          typb : 'nat',          typr: 'int' },
      { typa: 'rational',     typb : 'nat',          typr: 'rational' },
      { typa: 'nat',          typb : 'rational',     typr: 'rational' },
      { typa: 'rational',     typb : 'int',          typr: 'rational' },
      { typa: 'int',          typb : 'rational',     typr: 'rational' },
      { typa: 'bls12_381_fr', typb : 'nat',          typr: 'bls12_381_fr' },
      { typa: 'nat',          typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_fr', typb : 'int',          typr: 'bls12_381_fr' },
      { typa: 'int',          typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
    ]
  },
  slash : {
    label: 'a / b',
    link: 'a--b-2',
    desc: 'Divides two numbers as a rational.',
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'rational' },
      { typa: 'int',          typb : 'int',          typr: 'rational' },
      { typa: 'duration',     typb : 'duration',     typr: 'rational' },
      { typa: 'rational',     typb : 'rational',     typr: 'rational' },
    ],
    promotions: [
      { typa: 'nat',          typb : 'int',          typr: 'rational' },
      { typa: 'int',          typb : 'nat',          typr: 'rational' },
      { typa: 'nat',          typb : 'rational',     typr: 'rational' },
      { typa: 'rational',     typb : 'nat',          typr: 'rational' },
      { typa: 'int',          typb : 'rational',     typr: 'rational' },
      { typa: 'rational',     typb : 'int',          typr: 'rational' },
    ]
  },
  div : {
    label: 'a div b',
    link: 'a-div-b',
    desc: <DivDesc/>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'duration',     typb : 'duration',     typr: 'int' },
      { typa: 'duration',     typb : 'nat',          typr: 'duration' },
      { typa: 'duration',     typb : 'int',          typr: 'duration' },
      { typa: 'tez',          typb : 'nat',          typr: 'tez' },
    ],
    promotions: [
      { typa: 'int',          typb : 'nat',          typr: 'int' },
      { typa: 'nat',          typb : 'int',          typr: 'int' },
      { typa: 'int',          typb : 'nat',          typr: 'int' },
    ],
    fails: [
      {
        keyword: '"DivByZero"',
        desc: <div>when <code>b</code> is equal to 0</div>
      }
    ],
  },
  mod: {
    label: 'a % b',
    link: 'a--b-3',
    desc: <ModDesc/>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'duration',     typb : 'duration',     typr: 'int' },
      { typa: 'nat',          typb : 'int',          typr: 'nat' },
      { typa: 'int',          typb : 'nat',          typr: 'nat' },
    ],
    fails: [
      {
        keyword: '"DivByZero"',
        desc: <div>when <code>b</code> is equal to 0</div>
      }
    ],
  },
  divmod: {
    label: 'a /% b',
    link: 'a--b-4',
    desc: <div>Returns the euclidean division of <code>a</code> by <code>b</code>; returns an option of quotient and remainder:<ul>
      <li><code>some(q, r)</code>, when <code>b</code> is different from 0, <code></code><code>q</code> being the quotient and <code>r</code> the remainder</li>
      <li><code>none</code>, when <code>b</code> is equal to 0</li>
    </ul></div>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'option<nat * nat>', withLink: false },
      { typa: 'int',          typb : 'int',          typr: 'option<int * nat>', withLink: false },
      { typa: 'tez',          typb : 'tez',          typr: 'option<nat * tez>', withLink: false },
      { typa: 'nat',          typb : 'int',          typr: 'option<int * nat>', withLink: false },
      { typa: 'int',          typb : 'nat',          typr: 'option<int * nat>', withLink: false },
      { typa: 'tez',          typb : 'nat',          typr: 'option<tez * tez>', withLink: false },
    ]
  },
  lsl: {
    label: 'a <<| b',
    link: 'a--b-5',
    desc: <div>Shifts the bits of <code>a</code> to the left by the number of positions specified by <code>b</code>. Simultaneously, the empty spaces created by the bits shifted to the left are then filled with zeroes.
      It is a fast way to multiply by a power of 2.<br></br><br></br>
    </div>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
    ],
    fails: [
      {
        keyword: '"script_overflow"',
        desc: <div>when <code>b</code> is greater than <code>256</code></div>
      }
    ],
  },
  lsr: {
    label: 'a |>> b',
    link: 'a--b-6',
    desc: <div>Shifts the bits of <code>a</code> to the right by the number of positions specified by <code>b</code>. It is a fast way to divide by a power of 2.<br/><br/>
    </div>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
    ],
    fails: [
      {
        keyword: '"script_overflow"',
        desc: <div>when <code>b</code> is greater than <code>256</code></div>
      }
    ],
  },
  and: {
    label: 'a and b',
    link: 'a-and-b',
    desc: <div><ul>
      <li><code>true</code> if <code>a</code> and <code>b</code> are <code>true</code></li>
      <li><code>false</code> otherwise.</li>
      </ul></div>,
    types: [
      { typa: 'bool',          typb : 'bool',          typr: 'bool' },
    ],
  },
  or: {
    label: 'a or b',
    link: 'a-or-b',
    desc: <div><ul>
    <li><code>true</code> if <code>a</code> or <code>b</code> is <code>true</code></li>
    <li><code>false</code> otherwise</li>
    </ul></div>,
    types: [
      { typa: 'bool',          typb : 'bool',          typr: 'bool' },
    ]
  },
  xor: {
    label: 'a xor b',
    link: 'a-xor-b',
    desc: <div><ul>
    <li><code>true</code> if <code>a</code> and <code>b</code> are different</li>
    <li><code>false</code> otherwise</li>
    </ul></div>,
    types: [
      { typa: 'bool',          typb : 'bool',          typr: 'bool' },
    ]
  },
  not: {
    label: 'not a',
    link: 'not-a',
    binary: false,
    desc: <div><ul>
    <li><code>true</code> if <code>a</code> is <code>false</code></li>
    <li><code>false</code> if <code>a</code> is <code>true</code></li>
    </ul></div>,
    types: [
      { typa: 'bool', typr: 'bool' },
    ]
  },
  eq: {
    label: 'a = b',
    link: 'a--b-7',
    desc: <div>Equality operator</div>,
    types: cmp_types('bool'),
    promotions: cmp_types_promotions('bool')
  },
  neq: {
    label: 'a <> b',
    link: 'a--b-8',
    desc: <div>Difference operator, equivalent to <code>not (a = b)</code>.</div>,
    types: cmp_types('bool'),
    promotions: cmp_types_promotions('bool')
  },
  lt: {
    label: 'a < b',
    link: 'a--b-9',
    desc: <div>'Less than' operator</div>,
    types: cmp_types('bool'),
    promotions: cmp_types_promotions('bool')
  },
  lteq: {
    label: 'a <= b',
    link: 'a--b-10',
    desc: <div>'Less than or equal to' operator</div>,
    types: cmp_types('bool'),
    promotions: cmp_types_promotions('bool')
  },
  gt: {
    label: 'a > b',
    link: 'a--b-11',
    desc: <div>'Greater than' operator</div>,
    types: cmp_types('bool'),
    promotions: cmp_types_promotions('bool')
  },
  gteq: {
    label: 'a >= b',
    link: 'a--b-12',
    desc: <div>'Greater than or equal to' operator</div>,
    types: cmp_types('bool'),
    promotions: cmp_types_promotions('bool')
  },
  cmp: {
    label: 'a <=> b',
    link: 'a--b-13',
    desc: <div>Comparison operator on which above comparison operators are built; it returns:<ul>
        <li><code>-1</code> when <code>a &lt; b</code></li>
        <li><code>1</code>  when <code>a &gt; b</code></li>
        <li><code>0</code> when <code>a = b</code></li>
      </ul></div>,
    types: cmp_types('int'),
    promotions: cmp_types_promotions('int')
  }
}
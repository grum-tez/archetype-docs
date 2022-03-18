import React from "react"
import { MichelsonType } from "../../src/components/MichelsonType"
import ModDesc from "../../src/components/mod_desc.mdx"
import DivDesc from "../../src/components/div_desc.mdx"

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference/'

export const operators = {
  add: {
    label: 'a + b',
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
    desc: 'Divides two numbers.',
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
    desc: <div>Shifts the bits of <code>a</code> to the left by the number of positions specified by <code>b</code>. Simultaneously, the empty spaces created by the bits shifted to the left are then filled with zeroes.
      It is a fast way to multiply by a power of 2.<br></br><br></br>
      Defined only if <code>b</code> is less or equal to 256.
    </div>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
    ]
  },
  lsr: {
    label: 'a |>> b',
    desc: <div>Shifts the bits of <code>a</code> to the right by the number of positions specified by <code>b</code>. It is a fast way to divide by a power of 2.<br/><br/>
      Defined only if <code>b</code> is less or equal to 256.
    </div>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
    ]
  },
  and: {
    label: 'a and b',
    desc: <div><ul>
      <li><code>true</code> if <code>a</code> and <code>b</code> are <code>true</code></li>
      <li><code>false</code> otherwise.</li>
      </ul></div>,
    types: [
      { typa: 'bool',          typb : 'bool',          typr: 'bool' },
    ]
  },
  or: {
    label: 'a or b',
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
    binary: false,
    desc: <div><ul>
    <li><code>true</code> if <code>a</code> is <code>false</code></li>
    <li><code>false</code> if <code>a</code> is <code>true</code></li>
    </ul></div>,
    types: [
      { typa: 'bool', typr: 'bool' },
    ]
  },
}
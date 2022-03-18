import React from "react"
import { MichelsonType } from "../../src/components/MichelsonType"

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
  },
  sub : {
    label: 'a - b',
    desc: 'Subtracts numbers.',
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'int' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'tez',          typb : 'tez',          typr: 'option<tez>',
        withLink: false
      },
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
  },
  mult: {
    label: 'a * b',
    desc: 'Multiplies two numbers',
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'rational',     typb : 'rational',     typr: 'rational' },
      { typa: 'nat',     typb : 'tez',     typr: 'tez' },
      { typa: 'int',     typb : 'tez',     typr: 'tez' },
      { typa: 'rational',     typb : 'tez',     typr: 'tez', comment:'explain process' },
    ],
    promotions: [
      { typa: 'nat',          typb : 'int',          typr: 'int' },
      { typa: 'int',          typb : 'nat',          typr: 'int' },
      { typa: 'rational',     typb : 'nat',          typr: 'rational' },
      { typa: 'nat',          typb : 'rational',     typr: 'rational' },
      { typa: 'int',          typb : 'rational',     typr: 'rational' },
      { typa: 'rational',     typb : 'int',          typr: 'rational' },
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
    desc: 'Euclidean quotient of two numbers.',
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
    ]
  },
  mod: {
    label: 'a % b',
    desc: 'Euclidean remainder of a divided by b (modulus).',
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
    desc: <div>Euclidean division of <code>a</code> by <code>b</code>; returns an option of quotient and remainder:<ul>
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
  }
}
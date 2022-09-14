import React from "react"
import Link from '@docusaurus/Link';


export const assignments = {
  plusequal: {
    label: 'b',
    link: '--a',
    desc: <div>Increments <i>variable</i> <code>a</code> (local variable, tuple dimension or record field) by value of <code>b</code>. It is equivalent to <code>a := a + b</code> (see <Link to="/docs/reference/expressions/operators/arithmetic#a--b"><code>+</code></Link> operator).</div>,
    binary: false,
    types: [
      { typa: 'nat', typr: 'nat' },
      { typa: 'int', typr: 'int' },
      { typa: 'rational', typr: 'rational' },
      { typa: 'duration', typr: 'duration' },
      { typa: 'date', typr: 'duration' },
      { typa: 'tez', typr: 'tez' },
      { typa: 'string', typr: 'string' },
      { typa: 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g1', typr: 'bls12_381_g1' },
      { typa: 'bls12_381_g2', typr: 'bls12_381_g2' },
    ],
    promotions: [
      { typa: 'int', typr: 'nat' },
      { typa: 'rational', typr: 'nat' },
      { typa: 'rational', typr: 'int' },
      { typa: 'bls12_381_fr', typr: 'nat' },
      { typa: 'bls12_381_fr', typr: 'int' },
    ]
  },
  minusequal: {
    label: 'b',
    link: '--a',
    desc: <div>Decrements <i>variable</i> <code>a</code> (local variable, tuple dimension or record field) by value of <code>b</code>. It is similar to <code>a := a - b</code> (see <Link to="/docs/reference/expressions/operators/arithmetic#a---b"><code>-</code></Link> operator). It is not exaclty equivalent because if may fail on <code>nat</code> values (see fail conditions below).</div>,
    binary: false,
    types: [
      { typa: 'nat', typr: 'nat' },
      { typa: 'int', typr: 'int' },
      { typa: 'rational', typr: 'rational' },
      { typa: 'duration', typr: 'duration' },
      { typa: 'date', typr: 'duration' },
      { typa: 'tez', typr: 'tez' },
      { typa: 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g1', typr: 'bls12_381_g1' },
      { typa: 'bls12_381_g2', typr: 'bls12_381_g2' },
    ],
    promotions: [
      { typa: 'int', typr: 'nat' },
      { typa: 'rational', typr: 'nat' },
      { typa: 'rational', typr: 'int' },
      { typa: 'bls12_381_fr', typr: 'nat' },
      { typa: 'bls12_381_fr', typr: 'int' },
    ],
    fails: [
      {
        keyword: '"NAT_NEG_ASSIGN"',
        desc: <div>when <code>a</code> (typed <code>nat</code>)is less than <code>b</code> (typed <code>nat</code>).</div>
      },
      {
        keyword: '"INVALID_NEGATIVE_TEZ"',
        desc: <div>when <code>a - b</code> value typed <code>tez</code> is negative.</div>
      }
    ],
  },
  timesequal: {
    label: 'b',
    link: '--a',
    desc: <div>Multiplies <i>variable</i> <code>a</code> (local variable, tuple dimension or record field) by value of <code>b</code>. It is equivalent to <code>a := a * b</code> (see <Link to="/docs/reference/expressions/operators/arithmetic#a--b-1"><code>*</code></Link> operator).</div>,
    binary: false,
    types: [
      { typa: 'nat', typr: 'nat' },
      { typa: 'int', typr: 'int' },
      { typa: 'rational', typr: 'rational' },
      { typa: 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g1', typr: 'bls12_381_g1' },
      { typa: 'bls12_381_g2', typr: 'bls12_381_g2' },
    ],
    promotions: [
      { typa: 'int', typr: 'nat' },
      { typa: 'rational', typr: 'nat' },
      { typa: 'rational', typr: 'int' },
      { typa: 'bls12_381_fr', typr: 'nat' },
      { typa: 'bls12_381_fr', typr: 'int' },
      { typa: 'bls12_381_g1', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g2', typr: 'bls12_381_fr' },
    ]
  },
  divequal: {
    label: 'b',
    link: '--a',
    desc: <div>Divides <i>variable</i> <code>a</code> (local variable, tuple dimension or record field) by value of <code>b</code>. It is equivalent to <code>a := a / b</code> (see <Link to="/docs/reference/expressions/operators/arithmetic#a--b-2"><code>*</code></Link> operator).</div>,
    binary: false,
    types: [
      { typa: 'rational', typr: 'rational' },
    ],
    promotions: [
      { typa: 'rational', typr: 'nat' },
      { typa: 'rational', typr: 'int' },
    ]
  },
  andequal: {
    label: 'b',
    link: '--a',
    desc: <div>Assigns <code>a and b</code> to <i>variable</i> <code>a</code> (local variable, tuple dimension or record field) (see <Link to="/docs/reference/expressions/operators/arithmetic#a-and-b"><code>and</code></Link> operator).</div>,
    binary: false,
    types: [
      { typa: 'bool', typr : 'bool' },
    ]
  },
  orequal: {
    label: 'b',
    link: '--a',
    desc: <div>Assigns <code>a or b</code> to <i>variable</i> <code>a</code> (local variable, tuple dimension or record field) (see <Link to="/docs/reference/expressions/operators/arithmetic#a-or-b"><code>or</code></Link> operator).</div>,
    binary: false,
    types: [
      { typa: 'bool', typr : 'bool' },
    ]
  }
}

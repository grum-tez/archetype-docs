import React from "react"

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference/'

import DoRequireDesc from '../../src/components/desc/dorequire_desc.md'
import DoFailifDesc from '../../src/components/desc/dofailif_desc.md'

export const divergent = {
  fail: {
    desc: <div>Aborts entrypoint execution with value <code>e</code>.</div>,
    sig: 'fail(e)',
    parameters: [
      {
        type: 'T',
        withLink : false,
        alias: 'e',
        desc: <div>value to fail with (of <i>any</i> type).</div>
      },
    ],
    michelson: "FAILWITH",
    michelson_ref_url: michelson_ref_base_url + '#instr-FAILWITH',
    fails: [
      {
        keyword: 'e',
        desc: <div></div>
      }
    ],
    related: [
      { keyword: 'require', link: '/docs/reference/declarations#require' },
      { keyword: 'failif', link: '/docs/reference/declarations#failif' },
      { keyword: 'dorequire', link: '/docs/reference/instructions#dorequire' },
      { keyword: 'dofailif', link: '/docs/reference/instructions#dofailif' },
    ]
  },
  dorequire: {
    desc: <DoRequireDesc/>,
    sig: 'dorequire(t, e)',
    parameters: [
      {
        type: 'bool',
        alias: 't',
        desc: <div>Boolean expression required to be <code>true</code>.</div>
      },
      {
        type: 'T',
        withLink : false,
        alias: 'e',
        desc: <div>value to fail with (of <i>any</i> type) when <code>t</code> is <code>false</code>.</div>
      },
    ],
    michelson: "FAILWITH",
    michelson_ref_url: michelson_ref_base_url + '#instr-FAILWITH',
    fails: [
      {
        keyword: 'e',
        desc: <div></div>
      }
    ],
    related: [
      { keyword: 'require', link: '/docs/reference/declarations#require' },
      { keyword: 'fail', link: '/docs/reference/instructions#faile' },
      { keyword: 'if', link: '/docs/reference/instructions#if' },
    ]
  },
  dofailif: {
    desc: <DoFailifDesc/>,
    sig: 'dofailif(t, e)',
    parameters: [
      {
        type: 'bool',
        alias: 't',
        desc: <div>Boolean expression required to be <code>false</code>.</div>
      },
      {
        type: 'T',
        withLink : false,
        alias: 'e',
        desc: <div>value to fail with (of <i>any</i> type) when <code>t</code> is <code>true</code>.</div>
      },
    ],
    michelson: "FAILWITH",
    michelson_ref_url: michelson_ref_base_url + '#instr-FAILWITH',
    fails: [
      {
        keyword: 'e',
        desc: <div></div>
      }
    ],
    related: [
      { keyword: 'failif', link: '/docs/reference/declarations#failif' },
      { keyword: 'fail', link: '/docs/reference/instructions#faile' },
      { keyword: 'if', link: '/docs/reference/instructions#if' },
    ]
  }
}

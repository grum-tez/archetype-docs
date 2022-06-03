import React from "react"
import Link from '@docusaurus/Link';


const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference/'

import DoRequireDesc from '../../src/components/desc/dorequire_desc.md'
import DoFailifDesc from '../../src/components/desc/dofailif_desc.md'
import FailsomeDesc from '../../src/components/desc/failsome_desc.md'

export const divergent = {
  fail: {
    desc: <div>Aborts entrypoint execution with value <code>e</code>.</div>,
    sig: 'fail(e)',
    parameters: [
      {
        type: 'T',
        withLink : false,
        alias: 'e',
        desc: <div>value to fail with (of any <Link to="/docs/language-basics/types#packable">packable</Link> type).</div>
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
      { keyword: 'require', link: '/docs/reference/declarations/entrypoint#require' },
      { keyword: 'fail if', link: '/docs/reference/declarations/entrypoint#fail-if' },
      { keyword: 'do_require', link: '/docs/reference/instructions/divergent#do_require' },
      { keyword: 'do_fail_if', link: '/docs/reference/instructions/divergent#do_fail_if' },
    ]
  },
  fail_some: {
    desc: <FailsomeDesc />,
    sig:'fail_some(e : option<T>)',
    parameters: [
      {
        type: 'option<T>',
        alias: 'e',
        desc: <div>Option of any <Link to="/docs/language-basics/types#packable">packable</Link> type</div>
      },
    ],
    michelson: "FAILWITH",
    michelson_ref_url: michelson_ref_base_url + '#instr-FAILWITH',
    fails: [
      {
        keyword: 't',
        desc: <div>Fails with value <code>t</code> when <code>e = some(t)</code></div>
      }
    ],
  },
  do_require: {
    desc: <DoRequireDesc/>,
    sig: 'do_require(t, e)',
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
        desc: <div>value to fail with (of any <Link to="/docs/language-basics/types#packable">packable</Link> type) when <code>t</code> is <code>false</code>.</div>
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
      { keyword: 'require', link: '/docs/reference/declarations/entrypoint#require' },
      { keyword: 'fail', link: '/docs/reference/instructions/divergent#faile' },
      { keyword: 'if', link: '/docs/reference/instructions/control#if' },
    ]
  },
  do_fail_if: {
    desc: <DoFailifDesc/>,
    sig: 'do_fail_if(t, e)',
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
      { keyword: 'fail if', link: '/docs/reference/declarations/entrypoint#fail-if' },
      { keyword: 'fail', link: '/docs/reference/instructions/divergent#faile' },
      { keyword: 'if', link: '/docs/reference/instructions/control#if' },
    ]
  }
}

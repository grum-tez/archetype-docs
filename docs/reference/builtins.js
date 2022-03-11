import React from "react"
import OptGetDesc from "./opt_get_desc.mdx"

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference/'

export const builtins = {
  check_signature : {
    desc: <div>Checks whether signature <code>s</code> is obtained by signing sequence of bytes <code>b</code> with account public key <code>k</code>.</div>,
    parameters: [
      {
        type: 'key',
        alias: 'k',
        desc: <div>Public key of the account to sign <code>b</code>.</div>
      },
      {
        type: 'signature',
        alias: 's',
        desc: <div>Signature to be compared with the one obtained by signing <code>b</code> with <code>k</code>.</div>
      },
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Sequence of bytes to sign with <code>k</code> and to compare to <code>s</code>.</div>
      },
    ],
    returns: {
      type : 'bool',
      desc: <div>Returns <code>true</code> if <code>s</code> is obtained by signing <code>b</code> with <code>k</code>, <code>false</code> otherwise.</div>
    },
    michelson: "CHECK_SIGNATURE",
    michelson_ref_url: michelson_ref_base_url + '#instr-CHECK_SIGNATURE',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  opt_get: {
    desc: <OptGetDesc />,
    parameters: [
      {
        type: 'option<T>',
        alias: 'o',
        desc: 'Optional value to extract some value from.'
      },
    ],
    returns: {
      type : 'T',
      desc: <div>Returns <code>v</code> of type <code>T</code> when <code>o</code> is <code>some(v)</code></div>
    },
    fails: [
      {
        keyword: '"NotFound"',
        desc: <div>when <code>o</code> is <code>none</code></div>
      }
    ],
    related: [
      { keyword: 'Option', link: '/docs/language-basics/composite' },
      { keyword: 'issome', link: '#issome' },
    ]
  }
}

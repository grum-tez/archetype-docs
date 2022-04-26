import React from "react";
import Link from '@docusaurus/Link';

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference/'

export const containerinstructions = {
  setadd: {
    desc: <div>Adds element <code>e</code> to set <code>S</code>. If <code>e</code> is already in <code>S</code>, <code>S</code> is unchanged.</div>,
    sig: 'S.add(e)',
    parameters: [
      {
        type: 'T',
        withLink : false,
        alias: 'e',
        desc: <div>Element to add to the set. Type of <code>e</code> is defined at <Link to="/docs/reference/types#set<T>"><code>set</code></Link> declaration.</div>
      },
    ],
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    fails: [
    ],
    related: [
      { keyword: 'set', link: '/docs/reference/types#set<T>' },
      { keyword: 'remove', link: '/docs/reference/instructions#sremovee' },
      { keyword: 'contains', link: '/docs/reference/expressions/builtins#contains(c%20:%20C,%20i%20:%20T)' },
    ]
  },
  setremove: {
    desc: <div>Removes element <code>e</code> from set <code>S</code>. If <code>e</code> is not in <code>S</code>, <code>S</code> is unchanged.</div>,
    sig: 'S.add(e)',
    parameters: [
      {
        type: 'T',
        withLink : false,
        alias: 'e',
        desc: <div>Element to remove from the set. Type of <code>e</code> is defined at <Link to="/docs/reference/types#set<T>"><code>set</code></Link> declaration.</div>
      },
    ],
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    fails: [
    ],
    related: [
      { keyword: 'set', link: '/docs/reference/types#set<T>' },
      { keyword: 'add', link: '/docs/reference/instructions#sadde' },
      { keyword: 'contains', link: '/docs/reference/expressions/builtins#contains(c%20:%20C,%20i%20:%20T)' },
    ]
  }
}
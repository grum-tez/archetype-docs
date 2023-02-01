import React from "react";
import Link from '@docusaurus/Link';

import ReverseDesc from '../../src/components/desc/reverse_desc.md'
import ConcatDesc from '../../src/components/desc/concat_desc.md'
import ListHead from '../../src/components/desc/list_head.md'
import ListTail from '../../src/components/desc/list_tail.md'

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
      { keyword: 'remove', link: '/docs/reference/instructions/containers#sremovee' },
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
      { keyword: 'add', link: '/docs/reference/instructions/containers#sadde' },
      { keyword: 'contains', link: '/docs/reference/expressions/builtins#contains(c%20:%20C,%20i%20:%20T)' },
    ]
  },
  setupdate: {
    desc: <div>Adds or removes <code>e</code> from set <code>S</code>:<ul>
      <li>adds <code>e</code> if <code>b</code> is <code>true</code></li>
      <li>removes <code>e</code> if <code>b</code> is <code>false</code></li>
      </ul></div>,
    sig: 'S.update(e, b)',
    parameters: [
      {
        type: 'T',
        withLink : false,
        alias: 'e',
        desc: <div>Element to add or remove from the set. Type of <code>e</code> is defined at <Link to="/docs/reference/types#set<T>"><code>set</code></Link> declaration.</div>
      },
      {
        type: 'bool',
        alias: 'b',
        desc: <div>Boolean to decide whether to add or remove element <code>e</code>.</div>
      }
    ],
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    fails: [
    ],
    related: [
      { keyword: 'set', link: '/docs/reference/types#set<T>' },
      { keyword: 'add', link: '/docs/reference/instructions/containers#sadde' },
      { keyword: 'remove', link: '/docs/reference/instructions/containers#sremovee' },
    ]
  },
  prepend: {
    desc: <div>Prepends element <code>e</code> to (ie. puts <code>e</code> in first position of) list <code>L</code>.<p></p>
    (see <Link to="/docs/reference/instructions/control#match-with"><code>match with</code></Link> instruction to <i>remove</i> the head element of the list).
    </div>,
    sig: 'L.prepend(e)',
    parameters: [
      {
        type: 'T',
        withLink : false,
        alias: 'e',
        desc: <div>Element to prepend to the set. Type of <code>e</code> is defined at <Link to="/docs/reference/types#list<T>"><code>list</code></Link> declaration.</div>
      },
    ],
    michelson: "CONS",
    michelson_ref_url: michelson_ref_base_url + '#instr-CONS',
    fails: [
    ],
    related: [
      { keyword: 'list', link: '/docs/reference/types#list<T>' },
      { keyword: 'contains', link: '/docs/reference/expressions/builtins#contains(c%20:%20C,%20i%20:%20T)' },
      { keyword: 'match with', link: '/docs/reference/instructions/control#match-with' }
    ]
  },
  reverse: {
    desc: <ReverseDesc />,
    sig: 'L.reverse()',
    fails: [
    ],
    related: [
      { keyword: 'list', link: '/docs/reference/types#list<T>' },
      { keyword: 'prepend', link: '/docs/reference/instructions/containers#lprepende' }
    ]
  },
  concat: {
    desc: <ConcatDesc/>,
    sig: 'L.concat(l)',
    parameters: [
      {
        type: 'list<T>',
        alias: 'l',
        desc: <div>List to append to list <code>L</code>.</div>
      },
    ],
    fails: [
    ],
    related: [
      { keyword: 'list', link: '/docs/reference/types#list<T>' },
      { keyword: 'prepend', link: '/docs/reference/instructions/containers#lprepende' },
      { keyword: 'reverse', link: '/docs/reference/instructions/containers#lreverse' }
    ]
  },
  put : {
    desc: <div>Associates key <code>k</code> with value <code>v</code> in <Link to="/docs/reference/types#map<K,%20V>">map</Link> (or <Link to="/docs/reference/types#big_map<K,%20V>">big_map</Link>) <code>M</code>.</div>,
    sig: 'M.put(k, v)',
    parameters: [
      {
        type: `K`,
        withLink : false,
        alias: 'k',
        desc: <div>Key to associate a value to.</div>
      },
      {
        type: `V`,
        withLink : false,
        alias: `v`,
        desc: <div>Value associated to the key.</div>
      }
    ],
    fails: [
    ],
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    related: [
      { keyword: 'map', link: '/docs/reference/types#map<K,%20V>' },
      { keyword: 'big_map', link: '/docs/reference/types#big_map<K,%20V>' },
    ]
  },
  mapremove : {
    desc: <div>Removes entry key <code>k</code> in <Link to="/docs/reference/types#map<K,%20V>">map</Link> (or <Link to="/docs/reference/types#big_map<K,%20V>">big_map</Link>) <code>M</code>.</div>,
    sig: 'M.remove(k)',
    parameters: [
      {
        type: `K`,
        withLink : false,
        alias: 'k',
        desc: <div>Key to remove association of.</div>
      },
    ],
    fails: [
    ],
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    related: [
      { keyword: 'map', link: '/docs/reference/types#map<K,%20V>' },
      { keyword: 'big_map', link: '/docs/reference/types#big_map<K,%20V>' },
    ]
  },
  update : {
    desc: <div>Associates or removes the association of key <code>k</code> in <Link to="/docs/reference/types#map<K,%20V>">map</Link> (or <Link to="/docs/reference/types#big_map<K,%20V>">big_map</Link>) <code>M</code> depending on the value of <code>o</code>:
    <ul>
      <li><code>some(v)</code>: associates key <code>k</code> with value <code>v</code> </li>
      <li><code>none</code>: removes entry key <code>k</code> </li>
    </ul></div>,
    sig: 'M.update(k, v)',
    parameters: [
      {
        type: `K`,
        withLink : false,
        alias: 'k',
        desc: <div>Key to associate or remove.</div>
      },
      {
        type: `option<T>`,
        alias: `v`,
        desc: <div>Option Value to associate a value to the key or remove the key.</div>
      }
    ],
    fails: [
    ],
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    related: [
      { keyword: 'map', link: '/docs/reference/types#map<K,%20V>' },
      { keyword: 'big_map', link: '/docs/reference/types#big_map<K,%20V>' },
      { keyword: 'option', link: '/docs/reference/types#option<T>' },
    ]
  },

}
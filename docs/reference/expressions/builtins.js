import Link from '@docusaurus/Link';
import React from "react"

import AbsDesc from "../../../src/components/desc/abs_desc.md"
import ApplyLambdaDesc from "../../../src/components/desc/applylambda_desc.md"
import CallviewDesc from "../../../src/components/desc/callview_desc.md"
import ConcatDesc from "../../../src/components/desc/concat_desc.md"
import CreateContract from "../../../src/components/desc/create_contract.md"
import ExecLambdaDesc from "../../../src/components/desc/execlambda_desc.md"
import FoldDesc from "../../../src/components/desc/fold_desc.md"
import GetEntrypointDesc from "../../../src/components/desc/getentrypoint_desc.md"
import IsNoneDesc from "../../../src/components/desc/is_none_desc.md"
import IsSomeDesc from "../../../src/components/desc/is_some_desc.md"
import LeftDesc from "../../../src/components/desc/left_desc.md"
import MakeAsset from "../../../src/components/desc/make_asset.md"
import MapDesc from "../../../src/components/desc/map_desc.md"
import MutezNatDesc from "../../../src/components/desc/mutez_nat_desc.md"
import NthDesc from "../../../src/components/desc/nth_builtin_desc.md"
import RightDesc from "../../../src/components/desc/right_desc.md"
import SliceDesc from "../../../src/components/desc/slice_desc.md"
import UnpackDesc from "../../../src/components/desc/unpack_desc.md"

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference/'

export const to_link = s => s.replace(/ /g, '%20')

export const builtins = {
  // entrypoint
  call_view: {
    sig: 'call_view<T>(a : address, id : string, arg : X)',
    desc: <CallviewDesc />,
    parameters: [
      {
        type: 'address',
        alias: 'a',
        desc: <div>Address of the contract to call</div>
      },
      {
        type: 'string',
        alias: 'id',
        desc: <div>Name of the view; must be a string literal (e.g. <code>"my_view"</code>)</div>
      },
      {
        type: 'X',
        withLink: false,
        alias: 'arg',
        desc: <div>Argument of the called view</div>
      }
    ],
    returns: {
      type: 'option<T>',
      desc: <div><ul>
        <li><code>none</code> if a problem occured (view not found, or view execution failed)</li>
        <li><code>some(v)</code>, <code>v</code> being the value returned by the view</li>
      </ul></div>
    },
    michelson: "VIEW",
    michelson_ref_url: michelson_ref_base_url + '#VIEW',
    related: [
      { keyword: 'View', link: '/docs/reference/declarations/view' },
    ]
  },
  make_asset: {
    sig: 'make_asset(k : asset_key<A>, v : asset_value<A>)',
    desc: <MakeAsset />,
    parameters: [
      {
        type: 'asset_key<A>',
        alias: 'k',
        desc: <div>Asset identifier</div>
      },
      {
        type: 'asset_value<A>',
        alias: 'v',
        desc: <div>Asset value</div>
      },
    ],
    returns: {
      type: 'A',
      withLink: false,
      desc: <div>Asset literal with identifier <code>k</code> and data <code>v</code>.</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  make_big_map: {
    sig: 'make_big_map<K, T>(m)',
    desc: <div>Create a big_map from literal.<br />This is used for example to create an empty big map with <code>make_big_map&lt;K, V&gt;([])</code>.</div>,
    parameters: [
      {
        type: 'big_map',
        alias: 'm',
        desc: <div>Literal of big_map</div>
      },
    ],
    returns: {
      type: 'big_map<K, T>',
      desc: <div>Returns big_map</div>
    },
  },
  make_big_map: {
    sig: 'make_big_map<K, V>(m)',
    desc: <div>Makes a big_map from <i>literal</i> or variable.<br />This is useful to solve the type amiguity of literals, like for example the empty big_map <code>[]</code>.</div>,
    parameters: [
      {
        type: 'big_map<K, V>',
        alias: 'm',
        desc: <div>Big_map</div>
      },
    ],
    returns: {
      type: 'big_map<K, V>',
      desc: <div>Returns big_map</div>
    },
  },
  make_map: {
    sig: 'make_map<K, V>(m)',
    desc: <div>Makes a map from <i>literal</i> or variable.<br />This is useful to solve the type amiguity of literals, like for example the empty map <code>[]</code>.</div>,
    parameters: [
      {
        type: 'map<K, V>',
        alias: 'm',
        desc: <div>Map</div>
      },
    ],
    returns: {
      type: 'map<K, V>',
      desc: <div>Returns map</div>
    },
  },
  make_list: {
    sig: 'make_list<T>(l)',
    desc: <div>Makes a list from <i>literal</i> or variable.<br />This is useful to solve the type amiguity of literals, like for example the empty list <code>[]</code>.</div>,
    parameters: [
      {
        type: 'list<T>',
        alias: 'l',
        desc: <div>List</div>
      },
    ],
    returns: {
      type: 'list<T>',
      desc: <div>Returns list</div>
    },
  },
  make_set: {
    sig: 'make_set<T>(s)',
    desc: <div>Makes a set from <i>literal</i> or variable.<br />This is useful to solve the type amiguity of literals, like for example the empty set <code>[]</code>.</div>,
    parameters: [
      {
        type: 'set<T>',
        alias: 's',
        desc: <div>Set</div>
      },
    ],
    returns: {
      type: 'set<T>',
      desc: <div>Returns set</div>
    },
  },

  // operation
  make_operation: {
    sig: 'make_operation(a : tez, c : contract<T>, arg : T)',
    desc: <div>Makes an operation.</div>,
    parameters: [
      {
        type: 'tez',
        alias: 'a',
        desc: <div>The amount of tez sent with the operation</div>
      },
      {
        type: 'contract<T>',
        alias: 'c',
        desc: <div>Entrypoint with argument of type <code>T</code> (as returned by <code>get_entrypoint</code>)</div>
      },
      {
        type: 'T',
        withLink: false,
        alias: 'arg',
        desc: <div>The argument of the called entrypoint</div>
      }
    ],
    returns: {
      type: 'operation',
      desc: <div>The generated operation</div>
    },
    michelson: "TRANSFER_TOKENS",
    michelson_ref_url: michelson_ref_base_url + '#instr-TRANSFER_TOKENS',
    related: [
      { keyword: 'Operations', link: '/docs/reference/instructions/operation' },
      { keyword: 'get_entrypoint', link: '/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)' },
    ]
  },

  // control expression
  fold: {
    sig: 'fold (i : or<L, R>, f : L -> or<L, R>)',
    desc: <FoldDesc />,
    parameters: [
      {
        type: 'or<L, R>',
        alias: 'i',
        desc: <div>Initial value</div>
      },
      {
        type: 'function',
        withLink: false,
        alias: 'f',
        desc: <div><i>Inlined</i> folding function that:<ul><li>takes a parameter of type <code>L</code></li><li>returns a values of type <code>or&lt;L, R&gt;</code> </li></ul></div>
      },
    ],
    returns: {
      type: 'R',
      withLink: false,
      desc: <div>Folded value</div>
    },
    michelson: "LOOP_LEFT",
    michelson_ref_url: michelson_ref_base_url + '#instr-LOOP_LEFT',
    related: [
      { keyword: 'or', link: '/docs/reference/types#or<T1,%20T2>' },
      { keyword: 'left', link: '/docs/reference/expressions/builtins#left<(L,)?%20T>(x%20:%20L)' },
      { keyword: 'right', link: '/docs/reference/expressions/builtins#right<T(,%20R)>(x%20:%20R)' },
    ]
  },
  map: {
    sig: 'map',
    desc: <MapDesc />,
    parameters: [
      {
        type: '-',
        withLink: false,
        alias: 's',
        desc: <div>Input to map of type:<ul>
          <li><Link to={'/docs/reference/types#list<T>'}><code>list&lt;T&gt;</code></Link></li>
          <li><Link to={'/docs/reference/types#map<K,%20V>'}><code>map&lt;K, V&gt;</code></Link></li>
          <li><Link to={'/docs/reference/types#option<T>'}><code>option&lt;T&gt;</code></Link></li>
        </ul></div>
      },
      {
        type: 'function',
        withLink: false,
        alias: 'f',
        desc: <div><i>Inlined</i> mapping function.</div>
      },
    ],
    returns: {
      type: '-',
      withLink: false,
      desc: <div>Returns a mapped value of the same type as the input.</div>
    },
    michelson: "MAP",
    michelson_ref_url: michelson_ref_base_url + '#instr-MAP',
    related: [
      { keyword: 'list<T>', link: '/docs/reference/types#list<T>' },
      { keyword: 'map<K, V>', link: '/docs/reference/types#map<K,%20V>' },
      { keyword: 'option<T>', link: '/docs/reference/types#option<T>' },
      { keyword: '? :', link: '/docs/reference/expressions/controls#a--b--c' },
    ]
  },
  exec_lambda: {
    sig: 'exec_lambda(f : lambda<T, R>, x : T)',
    desc: <ExecLambdaDesc />,
    parameters: [
      {
        type: 'lambda<T, R>',
        alias: 'f',
        desc: <div>Lambda to execute</div>
      },
      {
        type: 'T',
        withLink: false,
        alias: 'x',
        desc: <div>Argument</div>
      }
    ],
    returns: {
      type: 'T',
      desc: <div>Evaluation of <i>f(x)</i></div>
    },
    michelson: "EXEC",
    michelson_ref_url: michelson_ref_base_url + '#instr-EXEC',
    related: [
      { keyword: 'lambda', link: '/docs/reference/types#lambda<T,%20R>' },
      { keyword: 'apply_lambda', link: '/docs/reference/expressions/builtins#apply_lambda(f%20:%20lambda<A%20*%20T,%20R>,%20x%20:%20A)' },
    ]
  },
  apply_lambda: {
    sig: 'apply_lambda(f : lambda<A * T, R>, x : A)',
    desc: <ApplyLambdaDesc />,
    parameters: [
      {
        type: 'lambda<A*T,R>',
        withLink: false,
        alias: 'f',
        desc: <div>Lambda to partially apply</div>
      },
      {
        type: 'A',
        alias: 'x',
        withLink: false,
        desc: <div>Lambda argument</div>
      }
    ],
    returns: {
      type: 'lambda<T, R>',
      desc: <div>Partially applied lambda value</div>
    },
    michelson: "APPLY",
    michelson_ref_url: michelson_ref_base_url + '#instr-APPLY',
    related: [
      { keyword: 'lambda', link: '/docs/reference/types#lambda<T,%20R>' },
      { keyword: 'exec_lambda', link: '/docs/reference/expressions/builtins#exec_lambda(f%20:%20lambda<T,%20R>,%20x%20:%20T)' },
    ]
  },

  // arithmetic function
  sub_nat: {
    sig: 'sub_nat(a : nat, b : nat)',
    desc: <div>Subtracts <code>a</code> to <code>b</code> and returns an option of nat value.</div>,
    parameters: [
      {
        type: 'nat',
        alias: 'a',
        desc: <div>Left-hand side operand to subtract</div>
      },
      {
        type: 'nat',
        alias: 'b',
        desc: <div>Right-hand side operand to subtract</div>
      }
    ],
    returns: {
      type: 'option<nat>',
      withLink: false,
      desc: <div>Option of nat value:<ul>
        <li><code>some</code> of <code>a - b</code> when <code>a &gt;= b</code></li>
        <li><code>none</code> otherwise</li>
      </ul></div>
    },
    related: [
      { keyword: 'nat', link: '/docs/reference/types#nat' },
    ]
  },

  sub_mutez: {
    sig: 'sub_mutez(a : tez, b : tez)',
    desc: <div>Subtracts <code>a</code> to <code>b</code> and returns an option of tez value.</div>,
    parameters: [
      {
        type: 'tez',
        alias: 'a',
        desc: <div>Left-hand side operand to subtract</div>
      },
      {
        type: 'tez',
        alias: 'b',
        desc: <div>Right-hand side operand to subtract</div>
      }
    ],
    returns: {
      type: 'option<tez>',
      desc: <div>
        <ul>
          <li><code>none</code> if <code>a - b</code> is negative</li>
          <li><code>some(v)</code>, if <code>a - b</code> is positive, with <code>v = a - b</code></li>
        </ul>
      </div>
    },
    michelson: "SUB_MUTEZ",
    michelson_ref_url: michelson_ref_base_url + '#instr-SUB_MUTEZ',
    related: [
      { keyword: 'tez', link: '/docs/reference/types#tez' },
    ]
  },

  // composite type constructors
  left: {
    sig: 'left<(L,)? T>(x : L)',
    desc: <LeftDesc />,
    parameters: [
      {
        type: 'L',
        alias: 'x',
        withLink: false,
        desc: <div>Value to convert</div>
      }
    ],
    returns: {
      type: 'or<L, T>',
      desc: <div>Value converted to left literal</div>
    },
    michelson: "LEFT",
    michelson_ref_url: michelson_ref_base_url + '#instr-LEFT',
    related: [
      { keyword: 'or', link: '/docs/reference/types#or<T1,%20T2>' },
      { keyword: 'right', link: '/docs/reference/expressions/builtins#right<T(,%20R)>(x%20:%20R)' },
    ]
  },
  right: {
    sig: 'right<T(, R)>(x : R)',
    desc: <RightDesc />,
    parameters: [
      {
        type: 'R',
        withLink: false,
        alias: 'x',
        desc: <div>Value to convert</div>
      }
    ],
    returns: {
      type: 'or<T, R>',
      desc: <div>Value converted to right literal</div>
    },
    michelson: "RIGHT",
    michelson_ref_url: michelson_ref_base_url + '#instr-RIGHT',
    related: [
      { keyword: 'or', link: '/docs/reference/types#or<T1,%20T2>' },
      { keyword: 'left', link: '/docs/reference/expressions/builtins#left<(L,)?%20T>(x%20:%20L)' },
    ]
  },
  none: {
    sig: 'none<T>',
    desc: <div>Optional <code>none</code> value for type <code>option&lt;T&gt;</code>.</div>,
    parameters: [],
    returns: {
      type: 'option<T>',
      desc: <div>Value none</div>
    },
    michelson: "NONE",
    michelson_ref_url: michelson_ref_base_url + '#instr-NONE',
    related: [
      { keyword: 'Option', link: '/docs/language-basics/composite#option' },
      { keyword: 'some', link: '/docs/reference/expressions/builtins#some(v%20:%20T)' },
      { keyword: 'math with', link: '/docs/reference/instructions/control#match-with' },
    ]
  },
  some: {
    sig: 'some(v : T)',
    desc: <div>Optional <code>some</code> value for type <code>option&lt;T&gt;</code>.</div>,
    parameters: [
      {
        type: 'T',
        alias: 'v',
        desc: <div>Some value</div>
      }
    ],
    returns: {
      type: 'option<T>',
      desc: <div>Optional value of <code>v</code></div>
    },
    michelson: "SOME",
    michelson_ref_url: michelson_ref_base_url + '#instr-SOME',
    related: [
      { keyword: 'Option', link: '/docs/language-basics/composite#option' },
      { keyword: 'none', link: '/docs/reference/expressions/builtins#none<T>' },
      { keyword: 'math with', link: '/docs/reference/instructions/control#match-with' },
    ]
  },

  // set api expression
  add: {
    sig: 'add(s : set<T>, e : T)',
    desc: <div>Returns a copy of set <code>s</code> augmented with element <code>e</code>.<p></p>If <code>e</code> is already present in <code>s</code>, it returns a copy of <code>s</code>.</div>,
    parameters: [
      {
        type: 'set<T>',
        alias: 's',
        desc: <div>Input set</div>
      },
      {
        type: 'T',
        withLink: false,
        alias: 'e',
        desc: <div>Element to add</div>
      }
    ],
    returns: {
      type: 'set<T>',
      desc: <div>Set that contains all elements of <code>s</code> and element <code>e</code></div>
    },
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    related: [
      { keyword: 'Set', link: '/docs/language-basics/container#set' },
      { keyword: 'remove', link: '/docs/reference/expressions/builtins#remove(c%20:%20C,%20i%20:%20T)' },
    ]
  },

  // list api expression
  prepend: {
    sig: 'prepend(l : list<T>, e : T)',
    desc: <div>Adds element <code>e</code> at the beginning of list <code>l</code>.</div>,
    parameters: [
      {
        type: 'list<T>',
        alias: 'l',
        desc: <div>List</div>
      },
      {
        type: 'T',
        alias: 'e',
        desc: <div>Element to add</div>
      }
    ],
    returns: {
      type: 'list<T>',
      desc: <div>List with element <code>e</code> followed by list <code>l</code> of elements.</div>
    },
    michelson: "CONS",
    michelson_ref_url: michelson_ref_base_url + '#instr-CONS',
    related: [
      { keyword: 'List', link: '/docs/language-basics/container#list' },
    ]
  },
  nth: {
    sig: 'nth(l : list<T>, n : nat)',
    desc: <NthDesc />,
    parameters: [
      {
        type: 'list<T>',
        alias: 'l',
        desc: <div>List of elements typed <code>T</code></div>
      },
      {
        type: 'nat',
        alias: 'n',
        desc: <div>Position in range <code>0</code> to <code>length(l)-1</code></div>
      }
    ],
    returns: {
      type: 'option<T>',
      desc: <div><ul><li><code>some</code> of element at position <code>n</code></li><li><code>none</code> when <code>n</code> is out of bound</li></ul></div>
    },
    related: [
      { keyword: 'List', link: '/docs/language-basics/container#list' },
      { keyword: 'length', link: '/docs/reference/expressions/builtins#length(o%20:%20T)' },
    ]
  },
  reverse: {
    sig: 'reverse(l : list<T>)',
    desc: <div>Returns a copy of list <code>l</code> with elements in reverse order.</div>,
    parameters: [
      {
        type: 'list<T>',
        alias: 'l',
        desc: <div>List to reverse</div>
      }
    ],
    returns: {
      type: 'list<T>',
      desc: <div>List with reversed elements</div>
    },
    related: [
      { keyword: 'List', link: '/docs/language-basics/container#list' },
      { keyword: 'reverse', link: '/docs/reference/instructions/containers#lreverse' },
      { keyword: 'prepend', link: '/docs/reference/expressions/builtins#prepend(l%20:%20list<T>,%20e%20:%20T)' },
    ]
  },
  // map api expression
  put: {
    sig: 'put(m : map<K, V>, k : K, v : V)',
    desc: <div>Associates value <code>v</code> with key <code>k</code> in map (<code>map</code>, <code>big_map</code> or <code>iterable_map</code>)<code>m</code>.</div>,
    parameters: [
      {
        type: 'map',
        alias: 'm',
        desc: <div>Map (or <Link to="/docs/reference/types#big_map<K,%20V>"><code>big_map</code></Link> or <Link to="/docs/reference/types#iterable_big_map<K,%20V>"><code>iterable_big_map</code></Link>)</div>
      },
      {
        type: 'K',
        alias: 'k',
        desc: <div>Key to put</div>
      },
      {
        type: 'V',
        alias: 'v',
        desc: <div>Value to put</div>
      }
    ],
    returns: {
      type: 'map<K, V>',
      desc: <div>Copy of map <code>m</code> whith new key-value pair (returns same type as <code>m</code>)</div>
    },
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    related: [
      { keyword: 'Map', link: '/docs/language-basics/container#map' },
      { keyword: 'remove', link: '/docs/reference/expressions/builtins#remove(c%20:%20C,%20i%20:%20T)' },
      { keyword: 'update', link: '/docs/reference/expressions/builtins#update(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20option<V>)' },
    ]
  },
  update_set: {
    sig: 'update(s : set<T>, e : T, b : bool)',
    index: 'update',
    desc: <div>Adds or removes element <code>e</code> in set <code>s</code>: <ul>
      <li>removes <code>e</code> when <code>b</code> is <code>false</code></li>
      <li>adds <code>e</code> when <code>b</code> is <code>true</code></li>
    </ul></div>,
    parameters: [
      {
        type: 'set<T>',
        alias: 's',
        desc: <div>Set to add or remove element from</div>
      },
      {
        type: 'T',
        withLink: false,
        alias: 'e',
        desc: <div>element to add/remove</div>
      },
      {
        type: 'bool',
        alias: 'b',
        desc: <div>Optional value to decide to add or remove</div>
      }
    ],
    returns: {
      type: 'setT>',
      desc: <div>Copy of set <code>s</code> with element <code>e</code> added or removed.</div>
    },
    related: [
      { keyword: 'Set', link: '/docs/language-basics/container#set' },
      { keyword: 'add', link: '/docs/reference/instructions/containers#sadde' },
      { keyword: 'remove', link: '/docs/reference/instructions/containers#sremovee' },
    ]
  },
  update_map: {
    sig: 'update(m : map<K, V>, k : K, v : option<T>)',
    index: 'update',
    desc: <div>Adds or removes value <code>v</code> from associated to key <code>k</code> in map <code>m</code>: <ul>
      <li><code>none</code> removes key <code>k</code></li>
      <li><code>some(v)</code>, adds key <code>k</code> with value <code>v</code></li>
    </ul></div>,
    parameters: [
      {
        type: 'map<K, V>',
        alias: 'm',
        desc: <div>Map (or <Link to="/docs/reference/types#big_map<K,%20V>"><code>big_map</code></Link> or <Link to="/docs/reference/types#iterable_big_map<K,%20V>"><code>iterable_big_map</code></Link>)</div>
      },
      {
        type: 'K',
        withLink: false,
        alias: 'k',
        desc: <div>Key to add/remove</div>
      },
      {
        type: 'option<T>',
        alias: 'v',
        desc: <div>Optional value to associate to <code>k</code></div>
      }
    ],
    returns: {
      type: 'map<K, V>',
      desc: <div>Copy of map <code>m</code> where <code>k</code> is associated to <code></code></div>
    },
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    related: [
      { keyword: 'Map', link: '/docs/language-basics/container#map' },
      { keyword: 'put', link: '/docs/reference/instructions/containers#mputk-v' },
      { keyword: 'remove', link: '/docs/reference/expressions/builtins#remove(c%20:%20C,%20i%20:%20T)' },
    ]
  },
  remove: {
    sig: 'remove(c : C, i : T)',
    desc: <div>Returns a copy of <code>c</code> without item <code>i</code>.</div>,
    parameters: [
      {
        type: 'C',
        withLink: false,
        alias: 'c',
        desc: <div>
          Container to remove element from; <code>C</code> is either:
          <ul>
            <li><Link to={'/docs/reference/types#set<T>'}><code>set</code></Link></li>
            <li><Link to={'/docs/reference/types#map<K,%20V>'}><code>map</code></Link></li>
            <li><Link to={'/docs/reference/types#big_map<K,%20V>'}><code>big_map</code></Link></li>
            <li><Link to={'/docs/reference/types#iterable_big_map<K,%20V>'}><code>iterable_big_map</code></Link></li>
          </ul>
        </div>
      },
      {
        type: 'T',
        withLink: false,
        alias: 'i',
        desc: <div>Item to remove (key value for map containers).</div>
      }
    ],
    returns: {
      type: 'C',
      desc: <div>Container that contains all elements from <code>c</code> except <code>i</code></div>
    },
    michelson: "UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-UPDATE',
    related: [
      { keyword: 'Containers', link: '/docs/language-basics/container' },
    ]
  },
  contains: {
    sig: 'contains(c : C, e : T)',
    desc: <div>Tests whether element <code>e</code> is contained in <code>c</code> or not.</div>,
    parameters: [
      {
        type: 'C',
        alias: 'c',
        desc: <div>
          C must be either:
          <ul>
            <li><Link to={'/docs/reference/types#set<T>'}><code>set</code></Link></li>
            <li><Link to={'/docs/reference/types#list<T>'}><code>list</code></Link></li>
            <li><Link to={'/docs/reference/types#map<K,%20V>'}><code>map</code></Link></li>
            <li><Link to={'/docs/reference/types#big_map<K,%20V>'}><code>big_map</code></Link></li>
            <li><Link to={'/docs/reference/types#iterable_big_map<K,%20V>'}><code>iterable_big_map</code></Link></li>
          </ul>
        </div>
      },
      {
        type: 'T',
        alias: 'e',
        desc: <div>Element to test</div>
      }
    ],
    returns: {
      type: 'bool',
      desc: <div>
        <ul>
          <li><code>true</code> when <code>e</code> is contained in <code>c</code></li>
          <li><code>false</code> when <code>e</code> is <i>not</i> contained in <code>c</code></li>
        </ul>
      </div>
    },
    michelson: "MEM",
    michelson_ref_url: michelson_ref_base_url + '#instr-MEM',
    related: [
      { keyword: 'Containers', link: '/docs/language-basics/container' },
    ]
  },

  // builtin functions
  min: {
    sig: 'min(a : T, b : T)',
    desc: <div>Returns minimum value between <code>a</code> and <code>b</code></div>,
    parameters: [
      {
        type: 'T',
        alias: 'a',
        desc: <div>First element to compare</div>
      },
      {
        type: 'T',
        alias: 'b',
        desc: <div>Second element to compare</div>
      }
    ],
    returns: {
      type: 'T',
      desc: <div>Minimum value. <code>T</code> must be a <Link to="/docs/language-basics/types#comparable">comparable</Link> type.</div>
    },
    related: [
      { keyword: 'Basic types', link: '/docs/language-basics/types' },
    ]
  },
  max: {
    sig: 'max(a : T, b : T)',
    desc: <div>Returns maximum value between <code>a</code> and <code>b</code></div>,
    parameters: [
      {
        type: 'T',
        alias: 'a',
        desc: <div>First element to compare</div>
      },
      {
        type: 'T',
        alias: 'b',
        desc: <div>Second element to compare</div>
      }
    ],
    returns: {
      type: 'T',
      desc: <div>Maximum value. <code>T</code> must be a <Link to="/docs/language-basics/types#comparable">comparable</Link> type.</div>
    },
    related: [
      { keyword: 'Basic types', link: '/docs/language-basics/types' },
    ]
  },
  abs: {
    sig: 'abs(t : T)',
    desc: <AbsDesc />,
    parameters: [
      {
        type: 'T',
        alias: 't',
        desc: <div>Value of type <code>int</code> or <code>rational</code></div>
      }
    ],
    returns: {
      type: 'R',
      withLink: false,
      desc: <div>Absolute value of <code>t</code></div>
    },
    michelson: "ABS",
    michelson_ref_url: michelson_ref_base_url + '#instr-ABS',
    related: [
      { keyword: 'int_to_nat', link: '/docs/reference/expressions/builtins#int_to_nat(i%20:%20int)' },
    ]
  },
  concat: {
    sig: 'concat',
    desc: <ConcatDesc />,
    returns: {
      type: 'T',
      withLink: false,
      desc: <div>Concantenation of 2 values or list of values of type
        <ul>
          <li><Link to={'/docs/reference/types#string'}><code>string</code></Link></li>
          <li><Link to={'/docs/reference/types#bytes'}><code>bytes</code></Link></li>
          <li><Link to={'/docs/reference/types#list<T>'}><code>list&lt;T&gt;</code></Link></li>
        </ul></div>
    },
    michelson: "CONCAT",
    michelson_ref_url: michelson_ref_base_url + '#instr-CONCAT',
    related: [
      { keyword: 'string', link: '/docs/reference/types#string' },
      { keyword: 'bytes', link: '/docs/reference/types#bytes' },
      { keyword: '+', link: '/docs/reference/expressions/operators/arithmetic#a--b' },
    ]
  },
  slice: {
    sig: 'slice(s : T, o : nat, l : nat)',
    desc: <SliceDesc />,
    parameters: [
      {
        type: 'T',
        alias: 's',
        desc: <div>
          Sequence to slice, T must be either:
          <ul>
            <li><Link to={'/docs/reference/types#string'}><code>string</code></Link></li>
            <li><Link to={'/docs/reference/types#bytes'}><code>bytes</code></Link></li>
          </ul>
        </div>
      },
      {
        type: 'nat',
        alias: 'o',
        desc: <div>Offset to start sub sequence</div>
      },
      {
        type: 'nat',
        alias: 'l',
        desc: <div>Length of sub sequence</div>
      }
    ],
    returns: {
      type: 'option<T>',
      desc: <div>
        <ul>
          <li><code>none</code> if a problem occured (offset + length out of bounds)</li>
          <li><code>some(v)</code>, <code>v</code> being the value of sub sequence</li>
        </ul>
      </div>
    },
    michelson: "SLICE",
    michelson_ref_url: michelson_ref_base_url + '#instr-SLICE',
    related: [
      { keyword: 'string', link: '/docs/reference/types#string' },
    ]
  },
  length: {
    sig: 'length(o : T)',
    desc: <div>Returns the length of a string or bytes value, or the number of elements of a container.</div>,
    parameters: [
      {
        type: 'T',
        alias: 'o',
        desc: <div>
          T must be either:
          <ul>
            <li><Link to={'/docs/reference/types#string'}><code>string</code></Link></li>
            <li><Link to={'/docs/reference/types#bytes'}><code>bytes</code></Link></li>
            <li><Link to={'/docs/reference/types#set<T>'}><code>set</code></Link></li>
            <li><Link to={'/docs/reference/types#list<T>'}><code>list</code></Link></li>
            <li><Link to={'/docs/reference/types#map<K,%20V>'}><code>map</code></Link></li>
            <li><Link to={'/docs/reference/types#iterable_big_map<K,%20V>'}><code>iterable_big_map</code></Link></li>
          </ul>
        </div>
      }
    ],
    returns: {
      type: 'nat',
      desc: <div>Length or size of argument <code>o</code></div>
    },
    michelson: "SIZE",
    michelson_ref_url: michelson_ref_base_url + '#instr-SIZE',
    related: [
      { keyword: 'string', link: '/docs/reference/types#string' },
      { keyword: 'bytes', link: '/docs/reference/types#bytes' },
      { keyword: 'Containers', link: '/docs/language-basics/container' },
    ]
  },
  is_none: {
    sig: 'is_none(o : option<T>)',
    desc: <IsNoneDesc />,
    parameters: [
      {
        type: 'option<T>',
        alias: 'o',
        desc: <div>Optional value to test if it is none</div>
      }
    ],
    returns: {
      type: 'bool',
      desc: <div>
        <ul>
          <li><code>true</code> when <code>o</code> is none</li>
          <li><code>false</code> when <code>o</code> is some </li>
        </ul>
      </div>
    },
    related: [
      { keyword: 'Option', link: '/docs/language-basics/composite#option' },
    ]
  },
  is_some: {
    sig: 'is_some(o : option<T>)',
    desc: <IsSomeDesc />,
    parameters: [
      {
        type: 'option<T>',
        alias: 'o',
        desc: <div>Optional value to test if it is some</div>
      }
    ],
    returns: {
      type: 'bool',
      desc: <div>
        <ul>
          <li><code>true</code> when <code>o</code> is some</li>
          <li><code>false</code> when <code>o</code> is none </li>
        </ul>
      </div>
    },
    related: [
      { keyword: 'Option', link: '/docs/language-basics/composite#option' },
    ]
  },
  int_to_nat: {
    sig: 'int_to_nat(i : int)',
    desc: <div>Converts an <Link to="/docs/reference/types#int"><code>int</code></Link> value to an <Link to="/docs/reference/types#option<T>"><code>option</code></Link>` of <Link to="/docs/reference/types#nat"><code>nat</code></Link> value.</div>,
    parameters: [
      {
        type: 'int',
        alias: 'i',
        desc: <div>Integer to convert</div>
      }
    ],
    returns: {
      type: 'option<nat>',
      withLink: false,
      desc: <div>Optional natural value:<ul><li><code>some(n)</code> when <code>i</code> is positive</li><li><code>none</code> otherwise</li></ul></div>
    },
    michelson: "ISNAT",
    michelson_ref_url: michelson_ref_base_url + '#instr-ISNAT',
    related: [
      { keyword: 'nat', link: '/docs/reference/types#nat' },
      { keyword: 'int', link: '/docs/reference/types#int' },
      { keyword: 'option', link: '/docs/reference/types#option<T>' },
      { keyword: 'abs', link: '/docs/reference/expressions/builtins#abs(t%20:%20T)' },
    ]
  },
  floor: {
    sig: 'floor(r : rational)',
    desc: <div>Converts a <Link to="/docs/reference/types#rational"><code>rational</code></Link> to an <Link to="/docs/reference/types#int"><code>int</code></Link> with <a href="https://en.wikipedia.org/wiki/Floor_and_ceiling_functions" target="_blank">floor</a> policy</div>, parameters: [
      {
        type: 'rational',
        alias: 'r',
        desc: <div></div>
      }
    ],
    returns: {
      type: 'int',
      desc: <div>Floored integer</div>
    },
    related: [
      { keyword: 'ceil', link: '/docs/reference/expressions/builtins#ceil(r%20:%20rational)' },
    ]
  },
  ceil: {
    sig: 'ceil(r : rational)',
    desc: <div>Converts a <Link to="/docs/reference/types#rational"><code>rational</code></Link> to an <Link to="/docs/reference/types#int"><code>int</code></Link> with <a href="https://en.wikipedia.org/wiki/Floor_and_ceiling_functions" target="_blank">ceiling</a> policy</div>,
    parameters: [
      {
        type: 'rational',
        alias: 'r',
        desc: <div></div>
      }
    ],
    returns: {
      type: 'int',
      desc: <div>Ceiled integer</div>
    },
    related: [
      { keyword: 'floor', link: '/docs/reference/expressions/builtins#floor(r%20:%20rational)' },
    ]
  },
  simplify_rational: {
    sig: 'simplify_rational(r : rational)',
    desc: <div>Simplify a <Link to="/docs/reference/types#rational"><code>rational</code></Link></div>,
    parameters: [
      {
        type: 'rational',
        alias: 'r',
        desc: <div></div>
      }
    ],
    returns: {
      type: 'rational',
      desc: <div>Rational simplified</div>
    },
    related: [
      { keyword: 'rational', link: '/docs/reference/types#rational' },
      { keyword: 'get_numerator', link: '/docs/reference/expressions/builtins#get_numerator(r%20:%20rational)' },
      { keyword: 'get_denominator', link: '/docs/reference/expressions/builtins#get_denominator(r%20:%20rational)' },
    ]
  },
  get_numerator: {
    sig: 'get_numerator(r : rational)',
    desc: <div>Get numerator of a <Link to="/docs/reference/types#rational"><code>rational</code></Link></div>,
    parameters: [
      {
        type: 'rational',
        alias: 'r',
        desc: <div></div>
      }
    ],
    returns: {
      type: 'int',
      desc: <div>Numerator of the rational</div>
    },
    related: [
      { keyword: 'rational', link: '/docs/reference/types#rational' },
      { keyword: 'int', link: '/docs/reference/types#int' },
      { keyword: 'simplify_rational', link: '/docs/reference/expressions/builtins#simplify_rational(r%20:%20rational)' },
      { keyword: 'get_denominator', link: '/docs/reference/expressions/builtins#get_denominator(r%20:%20rational)' },
    ]
  },
  get_denominator: {
    sig: 'get_denominator(r : rational)',
    desc: <div>Get denominator of a <Link to="/docs/reference/types#rational"><code>rational</code></Link></div>,
    parameters: [
      {
        type: 'rational',
        alias: 'r',
        desc: <div></div>
      }
    ],
    returns: {
      type: 'nat',
      desc: <div>Denominator of the rational</div>
    },
    related: [
      { keyword: 'rational', link: '/docs/reference/types#rational' },
      { keyword: 'nat', link: '/docs/reference/types#nat' },
      { keyword: 'simplify_rational', link: '/docs/reference/expressions/builtins#simplify_rational(r%20:%20rational)' },
      { keyword: 'get_numerator', link: '/docs/reference/expressions/builtins#get_numerator(r%20:%20rational)' },
    ]
  },
  bytes_to_nat: {
    sig: 'bytes_to_nat(b : bytes)',
    desc: <div>Converts bytes to a natural.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Bytes to convert</div>
      }
    ],
    returns: {
      type: 'nat',
      desc: <div>Natural converted to bytes</div>
    },
    related: [
      { keyword: 'Conversion', link: '/docs/language-basics/types#conversion' },
      { keyword: 'bytes', link: '/docs/reference/types#bytes' },
      { keyword: 'nat', link: '/docs/reference/types#nat' },
    ]
  },
  nat_to_bytes: {
    sig: 'nat_to_bytes(n : nat)',
    desc: <div>Converts a natural to bytes.</div>,
    parameters: [
      {
        type: 'nat',
        alias: 'n',
        desc: <div>Nat to convert</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Bytes converted to nat</div>
    },
    related: [
      { keyword: 'Conversion', link: '/docs/language-basics/types#conversion' },
      { keyword: 'nat', link: '/docs/reference/types#nat' },
      { keyword: 'bytes', link: '/docs/reference/types#bytes' },
    ]
  },
  nat_to_string: {
    sig: 'nat_to_string(n : nat)',
    desc: <div>Converts a natural to a string.</div>,
    parameters: [
      {
        type: 'nat',
        alias: 'n',
        desc: <div>Nat to convert</div>
      }
    ],
    returns: {
      type: 'string',
      desc: <div>String converted to nat</div>
    },
    related: [
      { keyword: 'Conversion', link: '/docs/language-basics/types#conversion' },
      { keyword: 'nat', link: '/docs/reference/types#nat' },
      { keyword: 'string', link: '/docs/reference/types#string' },
    ]
  },
  pack: {
    sig: 'pack(o : T)',
    desc: <div>Serializes any value of <Link to="/docs/language-basics/types#packable">packable</Link> type to a <Link to="/docs/reference/types#bytes"><code>bytes</code></Link> representation.</div>,
    parameters: [
      {
        type: 'T',
        alias: 'o',
        desc: <div>Value of <Link to="/docs/language-basics/types#packable">packable</Link> type <code>T</code></div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Packed value</div>
    },
    michelson: "PACK",
    michelson_ref_url: michelson_ref_base_url + '#instr-PACK',
    related: [
      { keyword: 'bytes', link: '/docs/reference/types#bytes' },
      { keyword: 'unpack', link: '/docs/reference/expressions/builtins#unpack<T>(b%20:%20bytes)' },
    ]
  },
  unpack: {
    sig: 'unpack<T>(b : bytes)',
    desc: <UnpackDesc />,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Bytes to unpack</div>
      }
    ],
    returns: {
      type: 'option<T>',
      desc: <div>
        <ul>
          <li><code>none</code> when <code>b</code> is unpackable of type <code>T</code></li>
          <li><code>some(v)</code> <code>v</code> being the value returned by unpacking process </li>
        </ul>
      </div>
    },
    michelson: "UNPACK",
    michelson_ref_url: michelson_ref_base_url + '#instr-UNPACK',
    related: [
      { keyword: 'bytes', link: '/docs/reference/types#bytes' },
      { keyword: 'pack', link: '/docs/reference/expressions/builtins#pack(o%20:%20T)' },
    ]
  },
  set_delegate: {
    sig: 'set_delegate(opkh : option<key_hash>)',
    desc: <div>Sets delegate account for current contract.</div>,
    parameters: [
      {
        type: 'option<key_hash>',
        alias: 'opkh',
        desc: <div><ul>
          <li><code>none</code> remove delegation of current contract</li>
          <li><code>some(pkh)</code> update delegation of current contract with address behind <code>pkh</code> </li>
        </ul></div>
      }
    ],
    returns: {
      type: 'operation',
      desc: <div>Operation of type </div>
    },
    michelson: "SET_DELEGATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-SET_DELEGATE',
    related: [
    ]
  },
  key_hash_to_contract: {
    sig: 'key_hash_to_contract(pkh : key_hash)',
    desc: <div>Converts key_hash to contract.</div>,
    parameters: [
      {
        type: 'key_hash',
        alias: 'pkh',
        desc: <div>key hash to convert</div>
      }
    ],
    returns: {
      type: 'contract<unit>',
      withLink: false,
      desc: <div>The extracted contract unit</div>
    },
    michelson: "IMPLICIT_ACCOUNT",
    michelson_ref_url: michelson_ref_base_url + '#instr-IMPLICIT_ACCOUNT',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  contract_to_address: {
    sig: 'contract_to_address(c : contract<T>)',
    desc: <div>Returns the address of a contract.</div>,
    parameters: [
      {
        type: 'contract',
        alias: 'c',
        desc: <div>Contract to get the address of</div>
      }
    ],
    returns: {
      type: 'address',
      desc: <div>Address of <code>c</code></div>
    },
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  address_to_contract: {
    sig: 'address_to_contract<T>(a : address)',
    desc: <div><p>Converts address <code>a</code> to a <code>contract&lt;T&gt;</code> value to be used as parameter of <Link to="/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract<T>,%20arg%20:%20T)"><code>make_operation</code></Link>.</p>
      <p><code>T</code> is:<ul>
        <li><code>unit</code> for an account address (<code>tz1...</code>)</li>
        <li>the type of the <i>parameter</i> section for a contract address</li>
      </ul>When the contract's parameter is annotated it is easier to use <Link to="/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)"><code>get_entrypoint</code></Link> builtin.</p></div>,
    parameters: [
      {
        type: 'address',
        alias: 'a',
        desc: <div>Address to convert</div>
      }
    ],
    returns: {
      type: 'option<contract<T>>',
      withLink: false,
      desc: <div><ul>
        <li><code>none</code> when the address or the path to entrypoint is invalid</li>
        <li><code>some</code> of a <code>contract&lt;T&gt;</code> value</li>
      </ul>
      </div>
    },
    related: [
      { keyword: 'Operation', link: '/docs/reference/instructions/operation' },
      { keyword: 'get_entrypoint', link: '/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)' },
      { keyword: 'make_operation', link: '/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract<T>,%20arg%20:%20T)' },
    ]
  },
  key_to_address: {
    sig: 'key_to_address(k : key)',
    desc: <div>Converts a key to an address</div>,
    parameters: [
      {
        type: 'key',
        alias: 'k',
        desc: <div>Key to convert</div>
      }
    ],
    returns: {
      type: 'address',
      desc: <div>Key converted to address</div>
    },
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },

  //crypto functions
  blake2b: {
    sig: 'blake2b(b : bytes)',
    desc: <div>Hashes bytes value with <a href="https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29" target="_blank">blake2b</a> algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Array of byte to hash</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of bytes <code>b</code></div>
    },
    michelson: "BLAKE2B",
    michelson_ref_url: michelson_ref_base_url + '#instr-BLAKE2B',
    related: [
      { keyword: 'Hash', link: '/docs/language-basics/crypto#hash' },
      { keyword: 'keccak', link: '/docs/reference/expressions/builtins#keccak(b%20:%20bytes)' },
      { keyword: 'sha256', link: '/docs/reference/expressions/builtins#sha256(b%20:%20bytes)' },
      { keyword: 'sha3', link: '/docs/reference/expressions/builtins#sha3(b%20:%20bytes)' },
      { keyword: 'sha512', link: '/docs/reference/expressions/builtins#sha512(b%20:%20bytes)' },
    ]
  },
  sha256: {
    sig: 'sha256(b : bytes)',
    desc: <div>Hashes bytes value with sha256 algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Message to be hashed</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of b bytes</div>
    },
    michelson: "SHA256",
    michelson_ref_url: michelson_ref_base_url + '#instr-SHA256',
    related: [
      { keyword: 'Hash', link: '/docs/language-basics/crypto#hash' },
      { keyword: 'blake2b', link: '/docs/reference/expressions/builtins#blake2b(b%20:%20bytes)' },
      { keyword: 'keccak', link: '/docs/reference/expressions/builtins#keccak(b%20:%20bytes)' },
      { keyword: 'sha3', link: '/docs/reference/expressions/builtins#sha3(b%20:%20bytes)' },
      { keyword: 'sha512', link: '/docs/reference/expressions/builtins#sha512(b%20:%20bytes)' },

    ]
  },
  sha512: {
    sig: 'sha512(b : bytes)',
    desc: <div>Hashes bytes value with sha512 algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Message to be hashed</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of b bytes</div>
    },
    michelson: "SHA512",
    michelson_ref_url: michelson_ref_base_url + '#instr-SHA512',
    related: [
      { keyword: 'Hash', link: '/docs/language-basics/crypto#hash' },
      { keyword: 'blake2b', link: '/docs/reference/expressions/builtins#blake2b(b%20:%20bytes)' },
      { keyword: 'keccak', link: '/docs/reference/expressions/builtins#keccak(b%20:%20bytes)' },
      { keyword: 'sha256', link: '/docs/reference/expressions/builtins#sha256(b%20:%20bytes)' },
      { keyword: 'sha3', link: '/docs/reference/expressions/builtins#sha3(b%20:%20bytes)' },
    ]
  },
  sha3: {
    sig: 'sha3(b : bytes)',
    desc: <div>Hashes bytes value with <a href="https://en.wikipedia.org/wiki/SHA-3" target="_blank">sha3</a> algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Message to be hashed</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of b bytes</div>
    },
    michelson: "SHA3",
    michelson_ref_url: michelson_ref_base_url + '#instr-SHA3',
    related: [
      { keyword: 'Hash', link: '/docs/language-basics/crypto#hash' },
      { keyword: 'blake2b', link: '/docs/reference/expressions/builtins#blake2b(b%20:%20bytes)' },
      { keyword: 'keccak', link: '/docs/reference/expressions/builtins#keccak(b%20:%20bytes)' },
      { keyword: 'sha256', link: '/docs/reference/expressions/builtins#sha256(b%20:%20bytes)' },
      { keyword: 'sha512', link: '/docs/reference/expressions/builtins#sha512(b%20:%20bytes)' },
    ]
  },
  keccak: {
    sig: 'keccak(b : bytes)',
    desc: <div>Hashes bytes value with <a href="https://en.wikipedia.org/wiki/SHA-3" target="_blank">keccak</a> algorithm.</div>,
    parameters: [
      {
        type: 'bytes',
        alias: 'b',
        desc: <div>Array of byte to hash</div>
      }
    ],
    returns: {
      type: 'bytes',
      desc: <div>Hash of <code>b</code></div>
    },
    michelson: "KECCAK",
    michelson_ref_url: michelson_ref_base_url + '#instr-KECCAK',
    related: [
      { keyword: 'Hash', link: '/docs/language-basics/crypto#hash' },
      { keyword: 'blake2b', link: '/docs/reference/expressions/builtins#blake2b(b%20:%20bytes)' },
      { keyword: 'sha256', link: '/docs/reference/expressions/builtins#sha256(b%20:%20bytes)' },
      { keyword: 'sha3', link: '/docs/reference/expressions/builtins#sha3(b%20:%20bytes)' },
      { keyword: 'sha512', link: '/docs/reference/expressions/builtins#sha512(b%20:%20bytes)' },
    ]
  },
  key_to_key_hash: {
    sig: 'key_to_key_hash(k : key)',
    desc: <div>Converts a key to key_hash.</div>,
    parameters: [
      {
        type: 'key',
        alias: 'k',
        desc: <div>key to hash</div>
      }
    ],
    returns: {
      type: 'key_hash',
      desc: <div>hashed value of <code>k</code></div>
    },
    michelson: "HASH_KEY",
    michelson_ref_url: michelson_ref_base_url + '#instr-HASH_KEY',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },
  check_signature: {
    sig: 'check_signature(k : key, s : signature, b : bytes)',
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
      type: 'bool',
      desc: <div>Returns <code>true</code> if <code>s</code> is obtained by signing <code>b</code> with <code>k</code>, <code>false</code> otherwise.</div>
    },
    michelson: "CHECK_SIGNATURE",
    michelson_ref_url: michelson_ref_base_url + '#instr-CHECK_SIGNATURE',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },

  // voting
  voting_power: {
    sig: 'voting_power(k : key_hash)',
    desc: <div>Gets the voting power from a <code>key_hash</code> value.</div>,
    parameters: [
      {
        type: 'key_hash',
        alias: 'k',
        desc: <div>Value to get the voting power of</div>
      }
    ],
    returns: {
      type: 'nat',
      desc: <div>Voting power</div>
    },
    michelson: "VOTING_POWER",
    michelson_ref_url: michelson_ref_base_url + '#instr-VOTING_POWER',
    related: [
    ]
  },

  // ticket
  create_ticket: {
    sig: 'create_ticket(s : T, n : nat)',
    desc: <div>Creates a <Link to={'/docs/reference/types#s-t'}>ticket</Link> from a value typed T and an amount.</div>,
    parameters: [
      {
        type: 'T',
        alias: 's',
        desc: <div>The information of the ticket</div>
      },
      {
        type: 'nat',
        alias: 'n',
        desc: <div>The amount of the ticket</div>
      }
    ],
    returns: {
      type: 'option<ticket<T>>',
      withLink: false,
      desc: <div>Returns an <Link to={'/docs/reference/types#option<T>'}>option</Link> of ticket. It is <Link to={'/docs/reference/expressions/builtins#none<T>'}><code>none</code></Link> if <code>n</code> is equal to <code>0</code> (ie. it is not possible to create 0-valued ticket).</div>
    },
    michelson: "TICKET",
    michelson_ref_url: michelson_ref_base_url + '#instr-TICKET',
    related: [
      { keyword: "join_tickets", link: "/docs/reference/expressions/builtins#join_tickets(t1%20:%20ticket<T>,%20t2%20:%20ticket<T>)" },
      { keyword: "read_ticket", link: "/docs/reference/expressions/builtins#read_ticket(t%20:%20ticket<T>)" },
      { keyword: "split_ticket", link: "/docs/reference/expressions/builtins#split_ticket(t%20:%20ticket<T>,%20n1%20:%20nat,%20n2%20:%20nat)" },
    ]
  },
  read_ticket: {
    sig: 'read_ticket(t : ticket<T>)',
    desc: <div>Reads ticket's origin contract, value and amount.</div>,
    parameters: [
      {
        type: 'ticket<T>',
        alias: 't',
        desc: <div>Ticket to read</div>
      }
    ],
    returns: {
      type: 'address * T * nat',
      withLink: false,
      desc: <div>Tuple of ticket's address of origin contract, value and the amount</div>
    },
    michelson: "READ_TICKET",
    michelson_ref_url: michelson_ref_base_url + '#instr-READ_TICKET',
    related: [
      { keyword: "create_ticket", link: "/docs/reference/expressions/builtins#create_ticket(s%20:%20T,%20n%20:%20nat)" },
      { keyword: "join_tickets", link: "/docs/reference/expressions/builtins#join_tickets(t1%20:%20ticket<T>,%20t2%20:%20ticket<T>)" },
      { keyword: "split_ticket", link: "/docs/reference/expressions/builtins#split_ticket(t%20:%20ticket<T>,%20n1%20:%20nat,%20n2%20:%20nat)" },]
  },
  split_ticket: {
    sig: 'split_ticket(t : ticket<T>, n1 : nat, n2 : nat)',
    desc: <div>Splits ticket in two new tickets.</div>,
    parameters: [
      {
        type: 'ticket<T>',
        alias: 't',
        desc: <div>Ticket to split</div>
      },
      {
        type: 'nat',
        alias: 'n1',
        desc: <div>Amount of first created ticket</div>
      },
      {
        type: 'nat',
        alias: 'n2',
        desc: <div>Amount of second created ticket</div>
      }
    ],
    returns: {
      type: 'option<ticket<T> * ticket<T>>',
      withLink: false,
      desc: <div>Option of pair of created tickets, respectively with <code>n1</code> and <code>n2</code> values.</div>
    },
    michelson: "SPLIT_TICKET",
    michelson_ref_url: michelson_ref_base_url + '#instr-SPLIT_TICKET',
    related: [
      { keyword: "create_ticket", link: "/docs/reference/expressions/builtins#create_ticket(s%20:%20T,%20n%20:%20nat)" },
      { keyword: "join_tickets", link: "/docs/reference/expressions/builtins#join_tickets(t1%20:%20ticket<T>,%20t2%20:%20ticket<T>)" },
      { keyword: "read_ticket", link: "/docs/reference/expressions/builtins#read_ticket(t%20:%20ticket<T>)" },
    ]
  },
  join_tickets: {
    sig: 'join_tickets(t1 : ticket<T>, t2 : ticket<T>)',
    desc: <div>Joins two compatible tickets (same value, same origin contract).</div>,
    parameters: [
      {
        type: 'ticket<T>',
        alias: 't1',
        desc: <div>First ticket to join</div>
      },
      {
        type: 'ticket<T>',
        alias: 't2',
        desc: <div>Second ticket to join</div>
      }
    ],
    returns: {
      type: 'option<ticket<T>>',
      withLink: false,
      desc: <div>Joined ticket</div>
    },
    michelson: "JOIN_TICKETS",
    michelson_ref_url: michelson_ref_base_url + '#instr-JOIN_TICKETS',
    related: [
      { keyword: "create_ticket", link: "/docs/reference/expressions/builtins#create_ticket(s%20:%20T,%20n%20:%20nat)" },
      { keyword: "read_ticket", link: "/docs/reference/expressions/builtins#read_ticket(t%20:%20ticket<T>)" },
      { keyword: "split_ticket", link: "/docs/reference/expressions/builtins#split_ticket(t%20:%20ticket<T>,%20n1%20:%20nat,%20n2%20:%20nat)" },]
  },

  // sapling
  sapling_empty_state: {
    sig: 'sapling_empty_state(k : key_hash)',
    desc: <div>Creates a sapling state with the specified memo size. The memo is an arbitrary string message encrypted and available to anyone owning the outgoing viewing key.</div>,
    parameters: [
      {
        type: 'nat',
        alias: 'n',
        desc: <div>Memo size</div>
      }
    ],
    returns: {
      type: 'sapling_state(n)',
      desc: <div>The fresh sapling state</div>
    },
    michelson: "SAPLING_EMPTY_STATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-SAPLING_EMPTY_STATE',
    related: [
      { keyword: 'Sapling', link: '/docs/language-basics/crypto#sapling' },
    ]
  },
  sapling_verify_update: {
    sig: 'sapling_verify_update(s, t)',
    desc: <div>Applies sapling transaction on sapling state.</div>,
    parameters: [
      {
        type: 'sapling_state(n)',
        alias: 's',
        desc: <div>Sapling state</div>
      },
      {
        type: 'sapling_transaction(n)',
        alias: 't',
        desc: <div>Sapling transaction</div>
      }
    ],
    returns: {
      type: 'option<bytes * int * sapling_state(n)>',
      withLink: false,
      desc: <div>The result</div>
    },
    michelson: "SAPLING_VERIFY_UPDATE",
    michelson_ref_url: michelson_ref_base_url + '#instr-SAPLING_VERIFY_UPDATE',
    related: [
      { keyword: 'Sapling', link: '/docs/language-basics/crypto#sapling' },
    ]
  },

  // bls curve
  pairing_check: {
    sig: 'pairing_check(l : list<bls12_381_g1 * bls12_381_g2>)',
    desc: <div>Checks pairing of pairs of <a href="https://en.wikipedia.org/wiki/BLS_digital_signature" target="_blank">BLS</a> values.</div>,
    parameters: [
      {
        type: 'list<bls12_381_g1 * bls12_381_g2>',
        withLink: false,
        alias: 'l',
        desc: <div>List of pairs of bls curves</div>
      }
    ],
    returns: {
      type: 'bool',
      desc: <div>The result</div>
    },
    michelson: "PAIRING_CHECK",
    michelson_ref_url: michelson_ref_base_url + '#instr-PAIRING_CHECK',
    related: [
      { keyword: 'Elliptic curves', link: '/docs/language-basics/crypto#elliptic-curves' },
    ]
  },

  // timelock
  open_chest: {
    sig: 'open_chest(k : chest_key, c : chest, t : nat)',
    desc: <div>Opens chest <code>c</code> with key <code>k</code> under time <code>t</code>.</div>,
    parameters: [
      {
        type: 'chest_key',
        alias: 'k',
        desc: <div>Chest key</div>
      },
      {
        type: 'chest',
        alias: 'c',
        desc: <div>Chest</div>
      },
      {
        type: 'nat',
        alias: 't',
        desc: <div>"Time" (number of operations) used to lock the chest</div>
      }
    ],
    returns: {
      type: 'or<bytes, bool>',
      withLink: false,
      desc: <div>The returned value has 3 possible values:<ul>
        <li><code>left(v)</code>, <code>v</code> being the value in the chest</li>
        <li><code>right(true)</code> when chest key <code>k</code> does not open the chest</li>
        <li><code>right(false)</code> when chest key <code>k</code> opens the chest but <code>t</code> parameter is not the value used to lock the chest</li>
      </ul></div>
    },
    michelson: "OPEN_CHEST",
    michelson_ref_url: michelson_ref_base_url + '#instr-OPEN_CHEST',
    related: [
      { keyword: 'Cryptography', link: '/docs/language-basics/crypto' },
    ]
  },

  // others
  int_to_date: {
    sig: 'int_to_date(i : int)',
    desc: <div>Converts an integer value <code>i</code> to a date, where <code>i</code> is considered as a tiemstamp value, that is the number of seconds since <code>1970-01-01</code>.</div>,
    parameters: [
      {
        type: 'int',
        alias: 'i',
        desc: <div>The timestamp to convert</div>
      }
    ],
    returns: {
      type: 'date',
      desc: <div>Date corresponding to timestamp <code>i</code></div>
    },
    related: [
      { keyword: 'Conversion', link: '/docs/language-basics/types#conversion' },
      { keyword: 'int', link: '/docs/reference/types#int' },
      { keyword: 'date', link: '/docs/reference/types#date' },
    ]
  },
  mutez_to_nat: {
    sig: 'mutez_to_nat(v : tez)',
    desc: <MutezNatDesc />,
    parameters: [
      {
        type: 'tez',
        alias: 'v',
        desc: <div>The amount of tez to convert</div>
      }
    ],
    returns: {
      type: 'nat',
      desc: <div>The amount of mutez</div>
    },
    related: [
      { keyword: 'tez', link: '/docs/reference/types#tez' },
      { keyword: 'nat', link: '/docs/reference/types#nat' },
    ]
  },
  get_entrypoint: {
    sig: 'get_entrypoint<T>(s, a : address)',
    desc: <GetEntrypointDesc />,
    parameters: [
      {
        type: 'string literal',
        withLink: false,
        alias: 's',
        desc: <div>Entrypoint name as string literal prefixed by <code>%</code></div>
      },
      {
        type: 'address',
        alias: 'a',
        desc: <div>Address of the entrypoint's contract</div>
      }
    ],
    returns: {
      type: 'option<contract<T>>',
      withLink: false,
      desc: <div>Option of entrypoint as a <code>contract</code> value</div>
    },
    related: [
      { keyword: 'transfer', link: '/docs/reference/instructions/operation#transfer' },
      { keyword: 'make_operation', link: '/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract<T>,%20arg%20:%20T)' },
    ],
    michelson: "CONTRACT",
    michelson_ref_url: michelson_ref_base_url + '#instr-CONTRACT',
  },
  greedy_and: {
    sig: 'greedy_and(a : bool, b : bool)',
    desc: <div>Greedy evaluation of boolean conjonction of <code>a</code> and <code>b</code>, meaning that <code>b</code> is evaluated even if <code>a</code> is false.</div>,
    parameters: [
      {
        type: 'bool',
        alias: 'a',
        desc: <div>Boolean input</div>
      },
      {
        type: 'bool',
        alias: 'b',
        desc: <div>Boolean input</div>
      },
    ],
    returns: {
      type: 'bool',
      desc: <div>true if <code>a</code> <i>and</i> <code>b</code> are true, false otherwise.</div>
    },
    related: [
      { keyword: 'and', link: '/docs/reference/expressions/operators/arithmetic#a-and-b' },
      { keyword: 'greedy_or', link: '/docs/reference/expressions/builtins#greedy_or(a%20:%20bool,%20b%20:%20bool)' },
    ],
    michelson: "AND",
    michelson_ref_url: michelson_ref_base_url + '#instr-AND',
  },
  greedy_or: {
    sig: 'greedy_or(a : bool, b : bool)',
    desc: <div>Greedy evaluation of boolean disjonction of <code>a</code> and <code>b</code>, meaning that <code>b</code> is evaluated even if <code>a</code> is true.</div>,
    parameters: [
      {
        type: 'bool',
        alias: 'a',
        desc: <div>Boolean input</div>
      },
      {
        type: 'bool',
        alias: 'b',
        desc: <div>Boolean input</div>
      },
    ],
    returns: {
      type: 'bool',
      desc: <div>true if <code>a</code> <i>or</i> <code>b</code> is true, false otherwise.</div>
    },
    related: [
      { keyword: 'or', link: '/docs/reference/expressions/operators/arithmetic#a-or-b' },
      { keyword: 'greedy_and', link: '/docs/reference/expressions/builtins#greedy_and(a%20:%20bool,%20b%20:%20bool)' },
    ],
    michelson: "OR",
    michelson_ref_url: michelson_ref_base_url + '#instr-OR',
  },
  create_contract: {
    sig: 'create_contract(path, delegator, amount, storage)',
    desc: <CreateContract />,
    parameters: [
      {
        type: 'string literal',
        withLink: false,
        alias: 'path',
        desc: <div>Path to Michelson code file to create (*.tz)</div>
      },
      {
        type: 'option<address>',
        alias: 'del',
        withLink: false,
        desc: <div>Option of delegate address</div>
      },
      {
        type: 'amount',
        alias: 'tez',
        desc: <div>Amount of balance to transfer to new contract</div>
      },
      {
        type: 'any',
        withLink: false,
        alias: 'storage',
        desc: <div>Initial storage value</div>
      },
    ],
    returns: {
      type: 'operation * address',
      withLink: false,
      desc: <div>Returns a pair of:<ul>
        <li>Operation for contract creation</li>
        <li>Address of created contract</li>
      </ul></div>
    },
    related: [
      { keyword: 'operation', link: '/docs/reference/types#operation' },
      { keyword: 'set_delegate', link: '/docs/reference/expressions/builtins#set_delegate(opkh%20:%20option<key_hash>)' },
    ],
    michelson: "CREATE_CONTRACT",
    michelson_ref_url: michelson_ref_base_url + '#instr-CREATE_CONTRACT',
  }
}

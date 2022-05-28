import React from "react"

import GetDesc from "../../../src/components/desc/get_desc.md"
import GetFieldDefaultDesc from "../../../src/components/desc/get_field_default_desc.md"
import GetOptionFieldDesc from "../../../src/components/desc/get_option_field_desc.md"
import GetoptDesc from "../../../src/components/desc/getopt_desc.md"
import SelectDesc from "../../../src/components/desc/select_desc.md"
import SortDesc from "../../../src/components/desc/sort_desc.md"
import SumDesc from "../../../src/components/desc/sum_desc.md"

export const assetbuiltins = {
  get: {
    sig: 'get',
    desc: <GetoptDesc />,
    appliesto: [ 'asset', 'asset to big_map', 'asset to iterable_big_map' ],
    parameters: [
      {
        type: 'asset_key<A>',
        alias: 'k',
        desc: <div>Asset key</div>
      },
    ],
    returns: {
      type: 'option<asset_value<A>>',
      withLink: false,
      desc: <div>Returns an option of the record value of asset <code>k</code>.</div>
    },
    fails : [],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'get', link: '/docs/reference/expressions/builtins#get(m%20:%20(big_)?map<K,%20V>,%20k%20:%20K)' }
    ]
  },
  get: {
    sig: 'A[k]',
    desc: <GetDesc />,
    appliesto: [ 'asset', 'asset to big_map', 'asset to iterable_big_map' ],
    parameters: [
      {
        type: 'asset_key<A>',
        alias: 'k',
        desc: <div>Asset key</div>
      },
    ],
    returns: {
      type: 'asset_value<A>',
      desc: <div>Returns a record value of asset <code>k</code>.</div>
    },
    fails : [
      {
        keyword: 'Pair("A", "AssetNotFound")',
        desc: <div>when asset with key <code>k</code> is not found in collection <code>A</code>.</div>
      }
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  getof: {
    sig: 'A[k]?f',
    desc: <GetOptionFieldDesc />,
    appliesto: [ 'asset', 'asset to big_map', 'asset to iterable_big_map' ],
    parameters: [
      {
        type: 'asset_key<A>',
        alias: 'k',
        desc: <div>Key of asset to access</div>
      },
      {
        type: 'literal',
        withLink : false,
        alias: 'f',
        desc: <div>field name to access</div>
      },
    ],
    returns: {
      type: 'T',
      withLink: false,
      desc: <div>Returns an option of field <code>f</code> value of asset <code>k</code>.</div>
    },
    fails : [ ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  getfd: {
    sig: 'A[k]?e:d',
    desc: <GetFieldDefaultDesc />,
    appliesto: [ 'asset', 'asset to big_map', 'asset to iterable_big_map' ],
    parameters: [
      {
        type: 'asset_key<A>',
        alias: 'k',
        desc: <div>Key of asset to access</div>
      },
      {
        type: 'expression',
        withLink : false,
        alias: 'e',
        desc: <div>Expression to evaluate when asset <code>k</code> is found</div>
      },
      {
        type: 'any',
        withLink : false,
        alias: 'd',
        desc: <div>Default value to return when key not found (same type as <code>f</code>)</div>
      },
    ],
    returns: {
      type: 'T',
      withLink: false,
      desc: <div>Evaluation of expression <code>e</code> when asset <code>k</code> is found in collection <code>A</code>, and <code>d</code> otherwise.</div>
    },
    fails : [ ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  contains: {
    sig: 'A.contains(k)',
    desc: <div>Tests whether collection <code>A</code> contains asset with key <code>k</code>.</div>,
    appliesto: [ 'asset', 'asset to big_map', 'asset to iterable_big_map', 'aggregate', 'partition', 'asset_view' ],
    parameters: [
      {
        type: 'asset_key<A>',
        alias: 'k',
        desc: <div>Key value to test</div>
      },
    ],
    returns: {
      type: 'bool',
      desc: <div><ul>
        <li><code>true</code> if <code>A</code> contains <code>k</code></li>
        <li><code>false</code> otherwise</li>
      </ul></div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  count: {
    sig: 'A.count()',
    desc: <div>Retuns the number of elements in collection <code>A</code>.</div>,
    appliesto: [ 'asset', 'asset to iterable_big_map', 'aggregate', 'partition', 'asset_view' ],
    returns: {
      type: 'nat',
      desc: 'Number of elements'
    }
  },
  nth: {
    sig: 'A.nth(i)',
    desc: <div>Returns the key of element number <code>i</code> (starting from 0) of collection <code>A</code>, according to its order (natural key order for <code>asset</code> collection).</div>,
    appliesto: [ 'asset', 'asset to iterable_big_map', 'aggregate', 'partition', 'asset_view' ],
    parameters: [
      {
        type: 'nat',
        alias: 'i',
        desc: <div>Position of element (between 0 and <code>A.count()</code> - 1)</div>
      }
    ],
    returns: {
      type: 'asset_key<A>',
      desc: 'Key of the ith element of the collection.'
    },
    fails : [
      {
        keyword: '"NotFound"',
        desc: <div>when <code>i</code> is greater or equal to <code>A.count()</code></div>
      }
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  sort: {
    sig: 'A.sort(f)',
    desc: <SortDesc />,
    appliesto: [ 'asset', 'asset to iterable_big_map', 'aggregate', 'partition', 'asset_view' ],
    parameters: [
      {
        type: 'asset field',
        withLink: false,
        alias: 'f',
        desc: <div>Asset field name of comparable type; it accepts wrapping decorator to specify sort order:<ul>
            <li><code>asc(f)</code> for ascending order; <code>asc</code> is by default and may be omitted</li>
            <li><code>desc(f)</code> for descending order</li>
          </ul></div>
      },
    ],
    returns: {
      type: 'asset_view<A>',
      desc: <div>A asset_view of asset <code>A</code> sorted by values of field <code>f</code>.</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  sum: {
    sig: 'A.sum(f)',
    desc: <SumDesc />,
    appliesto: [ 'asset', 'asset to iterable_big_map', 'aggregate', 'partition', 'asset_view' ],
    parameters: [
      {
        type: 'asset field',
        withLink: false,
        alias: 'f',
        desc: <div>Asset field name of type <code>int</code> or <code>nat</code>.</div>
      },
    ],
    returns: {
      type: 'int',
      desc: <div>The sum of field <code>f</code> values in collection <code>A</code>.</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'int', link: '/docs/reference/types#int' },
      { keyword: 'nat', link: '/docs/reference/types#nat' },
    ]
  },
  select: {
    sig: 'A.select(p)',
    desc: <SelectDesc />,
    appliesto: [ 'asset', 'asset to iterable_big_map', 'aggregate', 'partition', 'asset_view' ],
    parameters: [
      {
        type: 'predicate',
        withLink: false,
        alias: 'p',
        desc: <div>Predicate to select assets.</div>
      },
    ],
    returns: {
      type: 'asset_view<A>',
      desc: <div>A asset_view of asset <code>A</code> that verifies predicate <code>p</code>.</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  head: {
    sig: 'A.head(i : nat)',
    desc: <div>Returns the first i elements of collection <code>A</code> according to its order (natural key order for <code>asset</code> collection).</div>,
    appliesto: [ 'asset', 'asset to iterable_big_map', 'aggregate', 'partition', 'asset_view' ],
    parameters: [
      {
        type: 'nat',
        alias: 'i',
        desc: <div>Number of elements to consider</div>
      }
    ],
    returns: {
      type: 'asset_view<A>',
      desc: <div>A asset_view of the first <code>i</code> elements of <code>A</code> (or all elements if <code>A.count() &lt;= i</code>).</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  tail: {
    sig: 'A.head(i : nat)',
    desc: <div>Returns the last i elements of collection <code>A</code> according to its order (natural key order for <code>asset</code> collection).</div>,
    appliesto: [ 'asset', 'asset to iterable_big_map', 'aggregate', 'partition', 'asset_view' ],
    parameters: [
      {
        type: 'nat',
        alias: 'i',
        desc: <div>Number of elements to consider</div>
      }
    ],
    returns: {
      type: 'asset_view<A>',
      desc: <div>A asset_view of the last <code>i</code> elements of <code>A</code> (or all elements if <code>A.count() &lt;= i</code>).</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  }
}
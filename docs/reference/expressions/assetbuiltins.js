import React from "react"

import SelectDesc from "../../../src/components/select_desc.mdx"

export const assetbuiltins = {
  contains: {
    sig: 'A.contains(k)',
    desc: <div>Tests whether collection <code>A</code> contains asset with key <code>k</code>.</div>,
    appliesto: [ 'asset', 'asset to big_map', 'aggregate', 'partition', 'view' ],
    parameters: [
      {
        type: 'pkey<A>',
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
    appliesto: [ 'asset', 'aggregate', 'partition', 'view' ],
    returns: {
      type: 'nat',
      desc: 'Number of elements'
    }
  },
  nth: {
    sig: 'A.nth(i)',
    desc: <div>Returns the key of element number <code>i</code> (starting from 0) of collection <code>A</code>, based on the natural order of asset key.</div>,
    appliesto: [ 'asset', 'aggregate', 'partition', 'view' ],
    parameters: [
      {
        type: 'nat',
        alias: 'i',
        desc: <div>Position of element (between 0 and <code>A.count()</code> - 1)</div>
      }
    ],
    returns: {
      type: 'pkey<A>',
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
    desc: <div>Sorts collection <code>A</code> according to asset field <code>f</code> values in ascending order.</div>,
    appliesto: [ 'asset', 'aggregate', 'partition', 'view' ],
    parameters: [
      {
        type: 'asset field',
        alias: 'f',
        desc: <div>Asset field name of comparable type.</div>
      },
    ],
    returns: {
      type: 'view<A>',
      desc: <div>A view of asset <code>A</code> sorted by values of field <code>f</code>.</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  sum: {
    sig: 'A.sum(f)',
    desc: <div>Sums values of asset field <code>f</code> over collection <code>A</code>.</div>,
    appliesto: [ 'asset', 'aggregate', 'partition', 'view' ],
    parameters: [
      {
        type: 'asset field',
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
    appliesto: [ 'asset', 'aggregate', 'partition', 'view' ],
    parameters: [
      {
        type: 'predicate',
        alias: 'p',
        desc: <div>Predicate to select assets.</div>
      },
    ],
    returns: {
      type: 'view<A>',
      desc: <div>A view of asset <code>A</code> that verifies predicate <code>p</code>.</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  head: {
    sig: 'A.head(i : nat)',
    desc: <div>Returns the first i elements of collection <code>A</code> according to asset key ascending order.</div>,
    appliesto: [ 'asset', 'aggregate', 'partition', 'view' ],
    parameters: [
      {
        type: 'nat',
        alias: 'i',
        desc: <div>Number of elements to consider</div>
      }
    ],
    returns: {
      type: 'view<A>',
      desc: <div>A view of the first <code>i</code> elements of <code>A</code> (or all elements if <code>A.count() &lt;= i</code>).</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  tail: {
    sig: 'A.head(i : nat)',
    desc: <div>Returns the last i elements of collection <code>A</code> according to asset key ascending order.</div>,
    appliesto: [ 'asset', 'aggregate', 'partition', 'view' ],
    parameters: [
      {
        type: 'nat',
        alias: 'i',
        desc: <div>Number of elements to consider</div>
      }
    ],
    returns: {
      type: 'view<A>',
      desc: <div>A view of the last <code>i</code> elements of <code>A</code> (or all elements if <code>A.count() &lt;= i</code>).</div>
    },
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  }
}
import AssetAddDesc from '../../src/components/desc/assetadd_desc.mdx'
import AssetUpdateDesc from '../../src/components/desc/assetupdate_desc.mdx'
import React from "react"

export const assetinstructions = {
  add : {
    desc: <AssetAddDesc />,
    sig: 'A.add(a)',
    parameters: [
      {
        type: 'asset literal',
        withLink : false,
        alias: 'a',
        desc: <div>Asset literal to be added, formed of the value of asset fields.</div>
      },
    ],
    fails: [
      {
        keyword: '(Pair "A" "KeyExists")',
        desc: <div>when an asset with same key is already in the collection. (<code>"A"</code> above is the name of the asset collection).</div>
      }
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  update : {
    desc: <AssetUpdateDesc />,
    parameters: [
      {
        type: 'pkey<A>',
        alias: 'k',
        desc: <div>Key of the asset to update fields of.</div>
      },
      {
        type: 'update literal',
        withLink : false,
        alias: 'u',
        desc: <div>Set of update instructions: <ul>
          <li><code>=</code> assigns a new value</li>
          <li><code>+=</code> increments </li>
        </ul></div>
      },
    ],
    fails: [
      {
        keyword: 'NotFound',
        desc: <div>when no asset with key <code>k</code> is in the collection.</div>
      }
    ],
  }
}
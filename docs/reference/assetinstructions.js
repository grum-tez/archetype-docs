import AssetAddDesc from '../../src/components/desc/assetadd_desc.mdx'
import AssetUpdateDesc from '../../src/components/desc/assetupdate_desc.mdx'
import AssetAddUpdateDesc from '../../src/components/desc/assetaddupdate_desc.mdx'
import React from "react"

export const assetinstructions = {
  add : {
    desc: <AssetAddDesc />,
    sig: 'A.add(a)',
    appliesto: [ 'asset', 'asset to big_map', 'aggregate' ],
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
        desc: <div>when an asset with same key is already in the collection. (<code>"A"</code> being the name of the asset collection).</div>
      }
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
    ]
  },
  update : {
    desc: <AssetUpdateDesc />,
    appliesto: [ 'asset', 'asset to big_map', 'aggregate', 'partition' ],
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
        desc: <div>Curly bracketed list of fields' assignment instructions (separated by <code>;</code>); these instructions are presented in the section above (
          <code>:=</code>&nbsp;
          <code>+=</code>&nbsp;
          <code>-=</code>&nbsp;
          <code>*=</code>&nbsp;
          <code>/=</code>&nbsp;
          <code>&=</code>&nbsp;
          <code>|=</code>).</div>
      },
    ],
    fails: [
      {
        keyword: '(Pair "A" "AssetNotFound")',
        desc: <div>when no asset with key <code>k</code> is in the collection (<code>"A"</code> being the name of the asset collection).</div>
      }
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'Assignment', link: '/docs/reference/instructions#assignment' },
      { keyword: 'addupdate', link: '/docs/reference/instructions#aaddupdatek--u-' },
    ]
  },
  addupdate : {
    desc: <AssetAddUpdateDesc />,
    appliesto: [ 'asset', 'asset to big_map', 'aggregate' ],
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
        desc: <div>Curly bracketed list of fields' assignment instructions (separated by <code>;</code>); these instructions are presented in the section above (
          <code>:=</code>&nbsp;
          <code>+=</code>&nbsp;
          <code>-=</code>&nbsp;
          <code>*=</code>&nbsp;
          <code>/=</code>&nbsp;
          <code>&=</code>&nbsp;
          <code>|=</code>).<br/><br/>
          <code>+=</code>&nbsp;
          <code>-=</code>&nbsp;
          <code>*=</code>&nbsp;
          <code>/=</code>&nbsp;
          <code>&=</code>&nbsp;
          <code>|=</code> instructions are only available for fields with a specified default value.
          </div>
      },
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'Assignment', link: '/docs/reference/instructions#assignment' },
      { keyword: 'add', link: '/docs/reference/instructions#aadda' },
      { keyword: 'update', link: '/docs/reference/instructions#aupdatek--u-' },
    ]
  }
}
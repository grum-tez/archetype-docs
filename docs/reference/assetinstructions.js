import React from "react"

import AssetAddDesc from '../../src/components/desc/assetadd_desc.md'
import AssetAddUpdateDesc from '../../src/components/desc/assetaddupdate_desc.md'
import AssetClearDesc from '../../src/components/desc/assetclear_desc.md'
import AssetRemoveDesc from '../../src/components/desc/assetremove_desc.md'
import AssetRemoveClearDesc from '../../src/components/desc/assetremoveclear_desc.md'
import AssetRemoveIfDesc from '../../src/components/desc/assetremoveif_desc.md'
import AssetUpdateDesc from '../../src/components/desc/assetupdate_desc.md'

export const assetinstructions = {
  add : {
    desc: <AssetAddDesc />,
    sig: 'A.add(a)',
    appliesto: [ 'asset', 'asset to big_map', 'asset to iterable_big_map', 'aggregate', 'partition' ],
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
      { keyword: 'Asset', link: '/docs/asset', code : false },
      { keyword: 'update', link: '/docs/reference/instructions#aupdatek--u-' },
      { keyword: 'remove', link: '/docs/reference/instructions#aremovek' },
    ]
  },
  update : {
    desc: <AssetUpdateDesc />,
    appliesto: [ 'asset', 'asset to big_map', 'asset to iterable_big_map' ],
    parameters: [
      {
        type: 'asset_key<A>',
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
    appliesto: [ 'asset', 'asset to big_map', 'asset to iterable_big_map', 'partition' ],
    parameters: [
      {
        type: 'asset_key<A>',
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
  },
  remove : {
    desc: <AssetRemoveDesc/>,
    appliesto: ['asset', 'asset to big_map', 'asset to iterable_big_map', 'aggregate', 'partition'],
    parameters: [
      {
        type: 'asset_key<A>',
        alias: 'k',
        desc: <div>Key of the asset to remove.</div>
      },
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'add', link: '/docs/reference/instructions#aadda' },
    ]
  },
  removeif : {
    desc: <AssetRemoveIfDesc/>,
    appliesto: ['asset', 'aggregate', 'partition'],
    parameters: [
      {
        type: 'predicate',
        alias: 'p',
        withLink: false,
        desc: <div>Predicate.</div>
      },
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'remove', link: '/docs/reference/instructions#remove' },
    ]
  },
  clear: {
    desc: <AssetClearDesc />,
    appliesto: ['asset', 'asset to iterable_big_map', 'aggregate', 'partition', 'asset_view'],
    parameters: [],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'remove', link: '/docs/reference/instructions#remove' },
      { keyword: 'removeall', link: '/docs/reference/instructions#removeall' },
      { keyword: 'select', link: '/docs/reference/expressions/asset#aselectp' },
    ]
  },
  removeclear: {
    desc: <AssetRemoveClearDesc />,
    appliesto: [ 'aggregate' ],
    parameters: [],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'remove', link: '/docs/reference/instructions#remove' },
      { keyword: 'clear', link: '/docs/reference/instructions#clear' },
    ]
  }
}
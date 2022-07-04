import React from "react"
import Link from '@docusaurus/Link';

import AssetAddDesc from '../../src/components/desc/assetadd_desc.md'
import AssetPutDesc from '../../src/components/desc/assetput_desc.md'
import AssetAddUpdateDesc from '../../src/components/desc/assetaddupdate_desc.md'
import AssetClearDesc from '../../src/components/desc/assetclear_desc.md'
import AssetRemoveDesc from '../../src/components/desc/assetremove_desc.md'
import AssetRemoveClearDesc from '../../src/components/desc/assetremoveclear_desc.md'
import AssetRemoveIfDesc from '../../src/components/desc/assetremoveif_desc.md'
import AssetUpdateDesc from '../../src/components/desc/assetupdate_desc.md'
import AssetUpdateAllDesc from '../../src/components/desc/assetupdateall_desc.md'
import PutRemove from '../../src/components/desc/put_remove.md'

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
        keyword: '(Pair "A" "KEY_EXISTS")',
        desc: <div>when an asset with same key is already in the collection. (<code>"A"</code> being the name of the asset collection).</div>
      }
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset', code : false },
      { keyword: 'put',    link: '/docs/reference/instructions/containers#aputa' },
      { keyword: 'update', link: '/docs/reference/instructions/containers/#aupdatek--u-' },
      { keyword: 'remove', link: '/docs/reference/instructions/containers#aremovek' },
    ]
  },
  put: {
    desc: <AssetPutDesc />,
    sig: 'A.put(a)',
    appliesto: [ 'asset', 'asset to big_map', 'asset to iterable_big_map' ],
    parameters: [
      {
        type: 'asset literal',
        withLink : false,
        alias: 'a',
        desc: <div>Asset literal to be added.</div>
      },
    ],
    fails: [],
    related: [
      { keyword: 'Asset', link: '/docs/asset', code : false },
      { keyword: 'add',    link: '/docs/reference/instructions/asset#aadda' },
      { keyword: 'update', link: '/docs/reference/instructions/asset/#aupdatek--u-' },
      { keyword: 'remove', link: '/docs/reference/instructions/asset/#aremovek' },
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
        desc: <div>Curly bracketed list of fields' assignment instructions (separated by <code>;</code>); these instructions are presented in the <Link to="/docs/reference/instructions/assignment">assignment</Link> section (
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
        keyword: '(Pair "A" "ASSET_NOT_FOUND")',
        desc: <div>when no asset with key <code>k</code> is in the collection (<code>"A"</code> being the name of the asset collection).</div>
      }
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'Assignment', link: '/docs/reference/instructions/asset#assignment' },
      { keyword: 'add_update', link: '/docs/reference/instructions/asset#aadd_updatek--u-' },
    ]
  },
  update_all : {
    desc: <AssetUpdateAllDesc />,
    appliesto:['asset', 'asset to iterable_big_map', 'partition', 'aggregate', 'asset_view'],
    parameters: [
      {
        type: 'update literal',
        withLink : false,
        alias: 'u',
        desc: <div>Curly bracketed list of fields' assignment instructions (separated by <code>;</code>); these instructions are presented in the <Link to="/docs/reference/instructions/assignment">assignment</Link> section (
          <code>:=</code>&nbsp;
          <code>+=</code>&nbsp;
          <code>-=</code>&nbsp;
          <code>*=</code>&nbsp;
          <code>/=</code>&nbsp;
          <code>&=</code>&nbsp;
          <code>|=</code>).</div>
      },
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'Assignment', link: '/docs/reference/instructions/asset#assignment' },
      { keyword: 'update', link: '/docs/reference/instructions/asset#aupdatek--u-' },
    ]
  },
  add_update : {
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
        desc: <div>Curly bracketed list of fields' assignment instructions (separated by <code>;</code>); these instructions are presented in the <Link to="/docs/reference/instructions/assignment">assignment</Link> section (
          <code>:=</code>&nbsp;
          <code>+=</code>&nbsp;
          <code>-=</code>&nbsp;
          <code>*=</code>&nbsp;
          <code>/=</code>&nbsp;
          <code>&=</code>&nbsp;
          <code>|=</code>).<br/><br/>
          Note that these update instructions are only available for fields with a specified default value.
          </div>
      },
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'Assignment', link: '/docs/reference/instructions/asset#assignment' },
      { keyword: 'add', link: '/docs/reference/instructions/asset#aadda' },
      { keyword: 'update', link: '/docs/reference/instructions/asset#aupdatek--u-' },
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
      { keyword: 'add', link: '/docs/reference/instructions/asset#aadda' },
    ]
  },
  put_remove : {
    desc: <PutRemove />,
    appliesto: ['asset', 'asset to big_map', 'asset to iterable_big_map'],
    parameters: [
      {
        type: 'asset_key<A>',
        alias: 'k',
        desc: <div>Key of the asset to add or remove.</div>
      },
      {
        type: 'option<asset_value<A>>',
        alias: 'o',
        withLink: false,
        desc: <div>Option of asset value to add or remove.</div>
      },
    ],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'put', link: '/docs/reference/instructions/asset#aputa' },
      { keyword: 'remove', link: '/docs/reference/instructions/asset#aremovek' },
      { keyword: 'make_asset', link: '/docs/reference/expressions/builtins#make_asset(k%20:%20asset_key<A>,%20v%20:%20asset_value<A>)' },
    ]
  },
  remove_if : {
    desc: <AssetRemoveIfDesc/>,
    appliesto: ['aggregate', 'partition'],
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
      { keyword: 'remove', link: '/docs/reference/instructions/asset#aremovek' },
      { keyword: 'remove_all', link: '/docs/reference/instructions/asset#aremove_all' },
    ]
  },
  remove_all: {
    desc: <AssetClearDesc />,
    appliesto: ['asset', 'asset to iterable_big_map', 'aggregate', 'partition'],
    parameters: [],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'remove', link: '/docs/reference/instructions/asset#aremovek' },
      { keyword: 'remove_if', link: '/docs/reference/instructions/asset#aremove_ifp' },
      { keyword: 'select', link: '/docs/reference/expressions/asset#aselectp' },
    ]
  },
  clear: {
    desc: <AssetRemoveClearDesc />,
    appliesto: [ 'asset_view' ],
    parameters: [],
    related: [
      { keyword: 'Asset', link: '/docs/asset' },
      { keyword: 'remove', link: '/docs/reference/instructions/asset#remove' },
      { keyword: 'remove_all', link: '/docs/reference/instructions/asset#remove_all' },
    ]
  }
}
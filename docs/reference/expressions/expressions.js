const link_prefix = '/docs/reference/expressions'

export const expressions = {
  controls: [
    { label : 'if then else', link : link_prefix + '/controls#if-then-else' },
    { label : 'match with'  , link : link_prefix + '/controls#match-with' },
    { label : '? :'  , link : link_prefix + '/controls#a--b--c' },
  ],
  declaration: [
    { label : 'let in', link : link_prefix + '/declaration' }
  ],
  asset: [
    { label : '[]'      , link : link_prefix + '/asset#ak--asset_keya', desc : 'Gets asset record value from key' },
    { label : '[].'      , link : link_prefix + '/asset#ak--asset_keyaf', desc : 'Gets an asset field from key' },
    { label : '[]?.'      , link : link_prefix + '/asset#ak--asset_keyaf-1', desc : 'Gets an option of asset field from key' },
    { label : 'contains', link : link_prefix + '/asset#acontainsk--asset_keya', desc : 'Tests whether the collection contains an asset' },
    { label : 'count'   , link : link_prefix + '/asset#acount', desc : 'Returns the number of assets in collection' },
    { label : 'nth'     , link : link_prefix + '/asset#anthi--nat', desc : 'Returns nth element in collection' },
    { label : 'sort'    , link : link_prefix + '/asset#asortf', desc : 'Sorts assets according to a field' },
    { label : 'sum'     , link : link_prefix + '/asset#asumf', desc : 'Sums values of asset field' },
    { label : 'select'  , link : link_prefix + '/asset#aselectp', desc : 'Selects assets that verify a predicate' },
    { label : 'head'    , link : link_prefix + '/asset#aheadi--nat', desc : 'Returns first assets' },
    { label : 'tail'    , link : link_prefix + '/asset#ataili--nat', desc : 'Returns last assets' },
    { label : 'to_container'    , link : link_prefix + '/asset#ato_container', desc : 'Returns collection as basic container' },

  ],
  assettypes: [
    { label : 'asset_key<A>', link: '/docs/reference/types#asset_key<A>', desc: 'Type of the asset identifier' },
    { label : 'asset_value<A>', link: '/docs/reference/types#asset_value<A>', desc: 'Type of the asset data' },
    { label : 'asset_container<A>', link: '/docs/reference/types#asset_container<A>', desc: 'Type of the asset collection' },
    { label : 'asset_view<A>', link: '/docs/reference/types#asset_view<A>', desc: 'Read-only collection of assets' },
  ],
  assetbuiltins: [
    { label : 'make_asset', link: '/docs/reference/expressions/builtins#make_asset(k%20:%20asset_key<A>,%20v%20:%20asset_value<A>)', desc: 'Creates an asset object from key and value' }
  ]
}
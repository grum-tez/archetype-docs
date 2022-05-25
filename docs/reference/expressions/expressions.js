const link_prefix = '/docs/reference/expressions'

export const expressions = {
  controls: [
    { label : 'if then else', link : link_prefix + '/controls' },
    { label : 'match with'  , link : link_prefix + '/controls' },
  ],
  asset: [
    { label : 'getopt'      , link : link_prefix + '/asset#agetoptk--asset_keya', desc : 'Gets an option of asset record value from key' },
    { label : '[]'      , link : link_prefix + '/asset#ak--asset_keya', desc : 'Gets asset record value from key' },
    { label : '[].?'      , link : link_prefix + '/asset#ak--asset_keyaf', desc : 'Gets an option of asset field from key' },
    { label : '[].?:'      , link : link_prefix + '/asset#ak--asset_keya-e--d', desc : 'Evaluates an expression on asset' },
    { label : 'contains', link : link_prefix + '/asset#acontainsk--asset_keya', desc : 'Tests whether the collection contains an asset' },
    { label : 'count'   , link : link_prefix + '/asset#acount', desc : 'Returns the number of assets in collection' },
    { label : 'nth'     , link : link_prefix + '/asset#anthi--nat', desc : 'Returns nth element in collection' },
    { label : 'sort'    , link : link_prefix + '/asset#asortf', desc : 'Sorts assets according to a field' },
    { label : 'sum'     , link : link_prefix + '/asset#asumf', desc : 'Sums values of asset field' },
    { label : 'select'  , link : link_prefix + '/asset#aselectp', desc : 'Selects assets that verify a predicate' },
    { label : 'head'    , link : link_prefix + '/asset#aheadi--nat', desc : 'Returns first assets' },
    { label : 'tail'    , link : link_prefix + '/asset#ataili--nat', desc : 'Returns last assets' },
  ]
}
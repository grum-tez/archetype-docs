const link_prefix = '/docs/reference/instructions#'

export const instructions = {
    sequence: [
      { label : 'begin end', link : link_prefix + 'sequence' },
      { label : '( )', link : link_prefix + 'sequence' },
      { label : ' ; ', link : link_prefix + 'sequence' },
    ],
    assignements: [
      { label : ':=', link : link_prefix + 'a--b' },
      { label : '+=', link : link_prefix + 'a--b-1' },
      { label : '-=', link : link_prefix + 'a---b' },
      { label : '*=', link : link_prefix + 'a--b-2' },
      { label : '/=', link : link_prefix + 'a--b-3' },
      { label : '&=', link : link_prefix + 'a--b-4' },
      { label : '|=', link : link_prefix + 'a--b-5' },
    ],
    controls: [
      { label : 'if then', link : link_prefix + 'control' },
      { label : 'if then else', link : link_prefix + 'control' },
      { label : 'match with end', link : link_prefix + 'control' },
      { label : 'for in do done', link : link_prefix + 'control' },
      { label : 'while do done', link : link_prefix + 'control' },
      { label : 'iter from to do done', link : link_prefix + 'control' },
    ],
    divergent: [
      { label : 'fail', link : link_prefix + 'divergent' },
      { label : 'dorequire', link : link_prefix + 'divergent' },
      { label : 'dofailif', link : link_prefix + 'divergent' },
    ],
    sets: [
      { label : 'add', link : link_prefix + 'set' },
      { label : 'remove', link : link_prefix + 'set' },
    ],
    lists: [
      { label : 'prepend', link : link_prefix + 'list' },
      { label : 'add', link : link_prefix + 'list' },
      { label : 'remove', link : link_prefix + 'list' },
    ],
    maps: [
      { label : 'put', link : link_prefix + 'map' },
      { label : 'remove', link : link_prefix + 'map' },
      { label : 'update', link : link_prefix + 'map' },
    ],
    assets: [
      { label : 'add', link : link_prefix + 'aadda', desc : 'Adds a new asset in collection' },
      { label : 'update', link : link_prefix + 'aupdatek--u-', desc : 'Updates one or several fields of an asset in collection ' },
      { label : 'addupdate', link : link_prefix + 'aaddupdatek--u-', desc : 'Adds a new asset or updates an asset in collection' },
      { label : 'remove', link : link_prefix + 'aremovek', desc : 'Removes asset from collection' },
      { label : 'removeif', link : link_prefix + 'aremoveifp', desc : 'Removes assets that verify a predicate' },
      { label : 'clear', link : link_prefix + 'aclear', desc : 'Removes all assets from collection' },
      { label : 'removeclear', link : link_prefix + 'aremoveclear', desc : 'Removes all references and referenced assets from aggregate field' },
    ],
    blockchain: [
      { label : 'transfer', link : link_prefix + 'blockchain' },
      { label : 'emit', link : link_prefix + 'blockchain' },
    ]
}
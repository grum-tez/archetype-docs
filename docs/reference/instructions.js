const link_prefix = '/docs/reference/instructions#'

export const instructions = {
    sequence: [
      { label : 'begin end', link : link_prefix + 'sequence' },
      { label : '( )', link : link_prefix + 'sequence' },
      { label : ' ; ', link : link_prefix + 'sequence' },
    ],
    assignements: [
      { label : ':=', link : link_prefix + 'assignement' },
      { label : '+=', link : link_prefix + 'assignement' },
      { label : '-=', link : link_prefix + 'assignement' },
      { label : '*=', link : link_prefix + 'assignement' },
      { label : '/=', link : link_prefix + 'assignement' },
      { label : '&=', link : link_prefix + 'assignement' },
      { label : '|=', link : link_prefix + 'assignement' },
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
      { label : 'add', link : link_prefix + 'aadda' },
      { label : 'update', link : link_prefix + 'aupdatek--u-' },
      { label : 'addupdate', link : link_prefix + 'aaddupdatek--u-' },
      { label : 'remove', link : link_prefix + 'aremovek' },
      { label : 'removeif', link : link_prefix + 'aremoveifp' },
      { label : 'clear', link : link_prefix + 'aclear' },
      { label : 'removeclear', link : link_prefix + 'aremoveclear' },
    ],
    blockchain: [
      { label : 'transfer', link : link_prefix + 'blockchain' },
      { label : 'emit', link : link_prefix + 'blockchain' },
    ]
}
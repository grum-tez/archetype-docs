const link_prefix = '/docs/reference/instructions'

export const instructions = {
    sequence: [
      { label : 'begin end', link : link_prefix + '/sequence' },
      { label : ' ; ', link : link_prefix + '/sequence' },
    ],
    localvar: [
      { label : 'var', link : link_prefix + '/localvariable#var' },
      { label : 'const', link : link_prefix + '/localvariable#const' },
    ],
    assignements: [
      { label : ':=', link : link_prefix + '/assignment#a--b' },
      { label : '+=', link : link_prefix + '/assignment#a--b-1' },
      { label : '-=', link : link_prefix + '/assignment#a---b' },
      { label : '*=', link : link_prefix + '/assignment#a--b-2' },
      { label : '/=', link : link_prefix + '/assignment#a--b-3' },
      { label : '&=', link : link_prefix + '/assignment#a--b-4' },
      { label : '|=', link : link_prefix + '/assignment#a--b-5' },
    ],
    controls: [
      { label : 'if', link : link_prefix + '/control#if' },
      { label : 'match', link : link_prefix + '/control#match-with' },
      { label : 'for', link : link_prefix + '/control#for' },
      { label : 'while', link : link_prefix + '/control#while' },
      { label : 'iter', link : link_prefix + '/control#iter' },
    ],
    divergent: [
      { label : 'fail', link : link_prefix + '/divergent#faile' },
      { label : 'do_require', link : link_prefix + '/divergent#do_requiret-e' },
      { label : 'do_fail_if', link : link_prefix + '/divergent#do_fail_ift-e' },
    ],
    sets: [
      { label : 'add', link : link_prefix + '/containers#sadde' },
      { label : 'remove', link : link_prefix + '/containers#sremovee' },
    ],
    lists: [
      { label : 'prepend', link : link_prefix + '/containers#lprepende' },
      { label : 'reverse', link : link_prefix + '/containers#lreverse' },
      { label : 'concat', link : link_prefix + '/containers#lconcatl' },
    ],
    maps: [
      { label : 'put', link : link_prefix + '/containers#mputk-v' },
      { label : 'remove', link : link_prefix + '/containers#mremovek' },
      { label : 'update', link : link_prefix + '/containers#mupdatek--k-o--optiont' },
    ],
    assets: [
      { label : 'add', link : link_prefix + '/asset#aadda', desc : 'Adds a new asset in collection' },
      { label : 'put', link : link_prefix + '/asset#aputa', desc : 'Adds or replace an asset in collection' },
      { label : 'update', link : link_prefix + '/asset#aupdatek--u-', desc : 'Updates one or several fields of an asset in collection ' },
      { label : 'add_update', link : link_prefix + '/asset#aadd_updatek--u-', desc : 'Adds a new asset or updates an asset in collection' },
      { label : 'remove', link : link_prefix + '/asset#aremovek', desc : 'Removes asset from collection' },
      { label : 'remove_if', link : link_prefix + '/asset#aremove_ifp', desc : 'Removes assets that verify a predicate' },
      { label : 'clear', link : link_prefix + '/asset#aclear', desc : 'Removes all assets from collection' },
      { label : 'remove_clear', link : link_prefix + '/asset#aremove_clear', desc : 'Removes all references and referenced assets from aggregate field' },
    ],
    blockchain: [
      { label : 'transfer', link : link_prefix + '/operation#transfer' },
      { label : 'emit', link : link_prefix + '/operation#emit' },
    ]
}
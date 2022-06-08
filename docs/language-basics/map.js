export const map = {
  instructions: [
    { label: 'put', link: '/docs/reference/instructions/containers#mputk-v', desc: 'Associates key to value' },
    { label: 'remove', link: '/docs/reference/instructions/containers#mremovek', desc: 'Removes key from map' },
    { label: 'update', link: '/docs/reference/instructions/containers#mupdatek--k-o--optiont', desc: 'Adds key or removes key from map' },
    { label: 'for', link: '/docs/reference/instructions/control#map', desc: "Iterates over map's key-value pairs" },
  ],
  builtins: [
    { label: 'get', link: '/docs/reference/expressions/builtins#get(m%20:%20map<K,%20T>,%20k%20:%20K)', desc: 'Returns value associated to key in map'},
    { label: 'put', link: '/docs/reference/expressions/builtins#put(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20V)', desc: 'Associates key to value'},
    { label: 'remove', link: '/docs/reference/expressions/builtins#remove(c%20:%20C,%20i%20:%20T)', desc: 'Removes key from map'},
    { label: 'update', link: '/docs/reference/expressions/builtins#update(m%20:%20map<K,%20V>,%20k%20:%20K,%20v%20:%20option<T>)', desc: 'Adds key or removes key from map'},
    { label: 'contains', link: '/docs/reference/expressions/builtins#contains(c%20:%20C,%20e%20:%20T)', desc: 'Tests if a key is in map'},
    { label: 'length', link: '/docs/reference/expressions/builtins#length(o%20:%20T)', desc: 'Number of keys in map'},
    { label: 'map', link: '/docs/reference/expressions/builtins#map', desc: 'Maps key value pairs in map'},
  ]
}
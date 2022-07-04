export const set = {
  instructions: [
    { label: 'add', link: '/docs/reference/instructions/containers#sadde', desc: 'Adds an element to a set' },
    { label: 'remove', link: '/docs/reference/instructions/containers#sremovee', desc: 'Removes an element from a set' },
    { label: 'update', link: '/docs/reference/instructions/containers#supdatee-b', desc: 'Adds or removes an element from a set' },
    { label: 'for', link: '/docs/reference/instructions/control#set', desc: 'Iterates over set elements'}
  ],
  builtins: [
    { label: 'add', link: '/docs/reference/expressions/builtins#add(s%20:%20set<T>,%20e%20:%20T)', desc: 'Adds an element to set' },
    { label: 'remove', link: '/docs/reference/expressions/builtins#remove(c%20:%20C,%20i%20:%20T)', desc: 'Removes an element from set' },
    { label: 'update', link: '/docs/reference/expressions/builtins#update(s%20:%20set<T>,%20e%20:%20T,%20b%20:%20bool)', desc: 'Adds or removes an element from set' },
    { label: 'contains', link: '/docs/reference/expressions/builtins#contains(c%20:%20C,%20e%20:%20T)', desc: 'Tests if set contains an elements' },
    { label: 'length', link: '/docs/reference/expressions/builtins#length(o%20:%20T)', desc: 'Number of element in set' },
    { label: 'make_set', link: '/docs/reference/expressions/builtins#make_set<T>(s)', desc: 'Makes set from literal' },
  ]
}
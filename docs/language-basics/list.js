export const list = {
  instructions: [
    { label: 'prepend', link: '/docs/reference/instructions/containers#lprepende', desc: 'Adds first element to list'},
    { label: 'reverse', link: '/docs/reference/instructions/containers#lreverse', desc: "Reverse list's element order"},
    { label: 'concat', link: '/docs/reference/instructions/containers#lconcatl', desc: "Concatenates two lists"},
    { label: 'for', link: '/docs/reference/instructions/control#list-1', desc: 'Iterates over list elements'},
    { label: 'match with', link: '/docs/reference/instructions/control#list', desc: 'Controls execution flow based on list structure'}
  ],
  builtins: [
    { label: 'contains', link: '/docs/reference/expressions/builtins#contains(c%20:%20C,%20e%20:%20T)', desc: 'Tests if an element is in list'},
    { label: 'length', link: '/docs/reference/expressions/builtins#length(o%20:%20T)', desc: 'Number of elements in list'},
    { label: 'prepend', link: '/docs/reference/expressions/builtins#prepend(l%20:%20list<T>,%20e%20:%20T)', desc: 'Adds first element to list'},
    { label: 'reverse', link: '/docs/reference/expressions/builtins#reverse(l%20:%20list<T>)', desc: "Reverse list's element order"},
    { label: 'concat', link: '/docs/reference/expressions/builtins#list', desc: "Concatenates two lists"},
    { label: 'nth', link: '/docs/reference/expressions/builtins#nth(l%20:%20list<T>,%20n%20:%20nat)', desc: 'Nth element of list' },
    { label: 'map', link: '/docs/reference/expressions/builtins#list', desc: 'Maps list elements'},
    { label: 'match with', link: '/docs/reference/expressions/controls#match-with', desc: "Controls expression value based on list structure"},
  ]
}
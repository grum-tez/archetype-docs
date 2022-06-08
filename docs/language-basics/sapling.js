export const sapling = {
  types: [
    { label: 'sapling_state', link: '/docs/reference/types#sapling_state(n)', desc: 'Sapling state' },
    { label: 'sapling_transaction', link: '/docs/reference/types#sapling_transaction(n)', desc: 'Sapling transaction' },
  ],
  builtins: [
    { label: 'sapling_empty_state', link: '/docs/reference/expressions/builtins#sapling_empty_state(k%20:%20key_hash)', desc: 'Creates sapling state' },
    { label: 'sapling_verify_update', link: '/docs/reference/expressions/builtins#sapling_verify_update(s,%20t)', desc: 'Applies sapling transaction' },
  ]
}
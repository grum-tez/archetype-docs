export const timelock = {
  types: [
    { label: 'chest', link: '/docs/reference/types#chest', desc: 'Timelock encrypted data' },
    { label: 'chest_key', link: '/docs/reference/types#chest_key', desc: 'Key for chest' },
  ],
  builtins: [
    { label: 'open_chest', link: '/docs/reference/expressions/builtins#open_chest(k%20:%20chest_key,%20c%20:%20chest,%20t%20:%20nat)', desc: 'Decrypt chest data' },
  ]
}
export const elliptic = {
  types: [
    { label: 'bls12_381_fr', link: '/docs/reference/types#bls12_381_fr', desc: 'Multiplicative scalar for g1 and g2' },
    { label: 'bls12_381_g1', link: '/docs/reference/types#bls12_381_g1', desc: 'Point on g1' },
    { label: 'bls12_381_g2', link: '/docs/reference/types#bls12_381_g2', desc: 'Point on g2' },
  ],
  builtins: [
    { label: 'pairing_check', link: '/docs/reference/expressions/builtins#pairing_check(l%20:%20list<bls12_381_g1%20*%20bls12_381_g2>)', desc: 'Checks pairing of pairs of BLS values' },
  ]
}
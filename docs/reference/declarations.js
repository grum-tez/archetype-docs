
const link_prefix = '/docs/reference/declarations#'

export const declarations = {
  storage : [
    { label: 'variable', link: link_prefix + 'storage' },
    { label: 'asset', link: link_prefix + 'storage' },
  ],
  types : [
    { label: 'record', link: link_prefix + '#types' },
    { label: 'enum', link: link_prefix + '#types' },
    { label: 'states', link: link_prefix + '#types' },
    { label: 'event', link: link_prefix + '#types' },
  ],
  inlined : [
    { label: 'record', link: link_prefix + '#inlined' },
  ],
  entrypoints : [
    { label: 'entry', link: link_prefix + '#entrypoints' },
    { label: 'transition', link: link_prefix + '#entrypoints' },
    { label: 'getter', link: link_prefix + '#entrypoints' },
  ],
  sections : [
    { label: 'refuse transfer', link: link_prefix + '#sections' },
    { label: 'sourced by', link: link_prefix + '#sections' },
    { label: 'called by', link: link_prefix + '#sections' },
    { label: 'state is', link: link_prefix + '#sections' },
    { label: 'require', link: link_prefix + '#sections' },
    { label: 'failif', link: link_prefix + '#sections' },
    { label: 'effect', link: link_prefix + '#sections' },
  ],
  functions : [
    { label: 'function', link: link_prefix + '#function' },

  ],
  views : [
    { label: 'view', link: link_prefix + '#views' },
  ]
}

const link_prefix = '/docs/reference/declarations#'

export const declarations = {
  storage : [
    { label: 'parameter', link: link_prefix + 'parameter' },
    { label: 'variable', link: link_prefix + 'variable' },
    { label: 'asset', link: link_prefix + 'asset' },
  ],
  types : [
    { label: 'record', link: link_prefix + 'record' },
    { label: 'enum', link: link_prefix + 'enum' },
    { label: 'states', link: link_prefix + 'states' },
    { label: 'event', link: link_prefix + 'event' },
  ],
  inlined : [
    { label: 'constant', link: link_prefix + 'constant' },
  ],
  entrypoints : [
    { label: 'entry', link: link_prefix + 'entry' },
    { label: 'transition', link: link_prefix + 'transition' },
    { label: 'getter', link: link_prefix + 'getter' },
  ],
  sections : [
    { label: 'refuse transfer', link: link_prefix + 'refuse-transfer' },
    { label: 'sourced by', link: link_prefix + 'sourced-by' },
    { label: 'called by', link: link_prefix + 'called-by' },
    { label: 'state is', link: link_prefix + 'state-is' },
    { label: 'require', link: link_prefix + 'require' },
    { label: 'failif', link: link_prefix + 'failif' },
    { label: 'effect', link: link_prefix + 'effect' },
  ],
  functions : [
    { label: 'function', link: link_prefix + '#function' },

  ],
  views : [
    { label: 'view', link: link_prefix + '#views' },
  ]
}
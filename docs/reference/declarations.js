
const link_prefix = '/docs/reference/declarations'

export const declarations = {
  storage : [
    { label: 'parameter', link: link_prefix + '/storage#parameter' },
    { label: 'variable', link: link_prefix + '/storage#variable' },
    { label: 'asset', link: link_prefix + '/storage#asset' },
  ],
  types : [
    { label: 'record', link: link_prefix + '/compositetypes#record' },
    { label: 'enum', link: link_prefix + '/compositetypes#enum' },
    { label: 'states', link: link_prefix + '/compositetypes#states' },
    { label: 'event', link: link_prefix + '/compositetypes#event' },
  ],
  inlined : [
    { label: 'constant', link: link_prefix + '/inlined#constant' },
  ],
  entrypoints : [
    { label: 'entry', link: link_prefix + '/entrypoint#entry' },
    { label: 'transition', link: link_prefix + '/entrypoint#transition' },
    { label: 'getter', link: link_prefix + '/entrypoint#getter' },
  ],
  sections : [
    { label: 'no transfer', link: link_prefix + '/entrypoint#no-transfer' },
    { label: 'sourced by', link: link_prefix + '/entrypoint#sourced-by' },
    { label: 'called by', link: link_prefix + '/entrypoint#called-by' },
    { label: 'state is', link: link_prefix + '/entrypoint#state-is' },
    { label: 'require', link: link_prefix + '/entrypoint#require' },
    { label: 'fail if', link: link_prefix + '/entrypoint#fail-if' },
    { label: 'effect', link: link_prefix + '/entrypoint#effect' },
  ],
  functions : [
    { label: 'function', link: link_prefix + '/function' },

  ],
  views : [
    { label: 'view', link: link_prefix + '/views' },
  ]
}
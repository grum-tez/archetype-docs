import React from "react"

import OperationsDesc from '@site/src/components/desc/operations_desc.md'
import MetadataDesc from '@site/src/components/desc/metadata_desc.md'

export const variables = {
  metadata:
  {
    desc: <MetadataDesc />,
    type: 'map<string, bytes>',
    typeUrl: 'map<K,%20V>',
    related: [
      { keyword: 'string', link: '/docs/reference/types#string'},
      { keyword: 'bytes', link: '/docs/reference/types#bytes'},
    ],
  },
  operations:
  {
    desc: <OperationsDesc />,
    type: 'list<operation>',
    typeUrl: 'list<T>',
    related: [
      { keyword: 'transfer', link: '/docs/reference/instructions/operation#transfer' },
      { keyword: 'operation', link: '/docs/reference/types#operation' },
    ],
  },
}
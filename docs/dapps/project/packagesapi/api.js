import React from "react"
import Link from '@docusaurus/Link';

const prefix = "/docs/tests/apis/types#"

export const dapp = {
  call: {
    sig: 'todo',
    ref: 'callc-e-a-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  deploy: {
    sig: 'todo',
    ref: 'deploypath-params-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  exec_batch: {
    sig: 'todo',
    ref: 'exec_batchcps-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  exec_getter: {
    sig: 'todo',
    ref: 'exec_getterc-e-a-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  exec_view: {
    sig: 'todo',
    ref: 'exec_viewc-e-a-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_balance: {
    sig: 'todo',
    ref: 'get_balancea',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_big_map_value : {
    sig: 'get_big_map_value(id, key, kt, vt)',
    ref : "get_big_map_valueid-key-kv-kt",
    desc: <div>Returns the value associated to <code>key</code> in <Link to="/docs/reference/types#big_map<K,%20V>"><code>big_map</code></Link> with id <code>id</code>. It is used by the generated big map <Link to="/docs/tests/binding#storage-getters">getter</Link> of the contract's binding.</div>,
    parameters: [
      {
        type: 'number',
        alias: 'id',
        desc: <div>Big map identifier</div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'key',
        desc: <div>Key value</div>,
        prefix: prefix
      },
      {
        type: 'MichelineType',
        alias: 'kt',
        desc: <div>Key type</div>,
        prefix: prefix
      },
      {
        type: 'MichelineType',
        alias: 'vt',
        desc: <div>Value type</div>,
        prefix: prefix
      }
    ],
    returns: {
      type: 'Promise<any>',
      desc: <div>Micheline value associated to <code>key</code>, <code>null</code> if not found.</div>,
      withLink: false
    },
    related: [
      { keyword: 'Micheline', link: '/docs/tests/apis/types#micheline' },
      { keyword: 'MichelineType', link: '/docs/tests/apis/types#michelinetype' },
      { keyword: 'big_map', link: '/docs/reference/types#big_map<K,%20V>' },
    ]
  },
  get_call_param: {
    sig: 'todo',
    ref: 'get_call_paramc-e-a-p',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  get_storage: {
    sig: 'todo',
    ref: 'get_storagea',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  set_binder_tezos_toolkit: {
    sig: 'todo',
    ref: 'set_binder_tezos_toolkitttk',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
}

export const event = {
  registerevent: {
    sig: 'todo',
    ref: 'registereventp',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  run_listener: {
    sig: 'todo',
    ref: 'run_listenero',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
  stop_listener: {
    sig: 'todo',
    ref: 'stop_listener',
    desc: <div>TODO</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    returns: {
      type: 'any',
      desc: <div>TODO</div>,
      withLink: false
    }
  },
}
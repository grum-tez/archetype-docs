import Link from '@docusaurus/Link';
import React from "react"

const prefix = "/docs/tests/apis/types#"
const exp_prefix = "/docs/tests/apis/experiment#"

export const dapp = {
  call: {
    sig: 'todo',
    ref: 'callc-e-a-p',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> call to contract's entry points used by <Link to="/docs/tests/binding#entry-points">contract binding</Link>.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'c',
        desc: <div>Contract address</div>,
        withLink: false
      },
      {
        type: 'string',
        alias: 'e',
        desc: <div>entry point name</div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'a',
        desc: <div>entry point argument</div>,
        prefix : prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Call parameter (<Link to="/docs/reference/expressions/constants#caller"><code>caller</code></Link> and <Link to="/docs/reference/expressions/constants#transferred"><code>transferred</code></Link>)</div>,
        withLink: false
      },
    ],
    returns: {
      type: 'CallResult',
      desc: <div>Various data about transaction.</div>,
      prefix : exp_prefix
    },
    related: [
      { keyword: 'exec_batch', link:'/docs/dapps/project/packagesapi/#exec_batchcps-p' }
    ],
    fails: [
      {
        keyword: 'Error',
        desc: <div>An error is thrown if the transaction fails.</div>
      }
    ]
  },
  deploy: {
    sig: 'todo',
    ref: 'deploypath-params-p',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function to deploy an Archetype contract, called by the <Link to="/docs/tests/binding#deploy"><code>deploy</code></Link> method of the contract's binding.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'path',
        desc: <div>Path to contract (relative to command's execution folder)</div>,
        withLink: false
      },
      {
        type: 'any',
        alias: 'params',
        desc: <div>Contract intital storage values</div>,
        prefix: prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Call parameter (<Link to="/docs/reference/expressions/constants#caller"><code>caller</code></Link> and <Link to="/docs/reference/expressions/constants#transferred"><code>transferred</code></Link>)</div>,
        withLink: false
      },
    ],
    showfail : false,
    returns: {
      type: 'DeployResult',
      desc: <div>Various data about deployment transaction.</div>,
      withLink: false
    }
  },
  exec_batch: {
    sig: 'todo',
    ref: 'exec_batchcps-p',
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function to execute calls to entry points in <i>batch</i> mode. See <Link to="/docs/tests/binding#entry-points-parameters">here</Link> for more information.</div>,
    parameters: [
      {
        type: 'Array<CallParameter>',
        alias: 'cps',
        desc: <div>Array of <Link to="/docs/tests/apis/types#callparameter"><code>CallParameter</code></Link> values</div>,
        withLink: false
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Call parameter (<Link to="/docs/reference/expressions/constants#caller"><code>caller</code></Link> and <Link to="/docs/reference/expressions/constants#transferred"><code>transferred</code></Link>)</div>,
        withLink: false
      },
    ],
    returns: {
      type: 'CallResult',
      desc: <div>Transaction information.</div>,
      prefix: exp_prefix
    },
    related: [
      { keyword: 'call', link:'/docs/tests/apis/experiment#callc-e-a-p' }
    ],
    fails: [
      {
        keyword: 'Error',
        desc: <div>An error is thrown if one the transactions fails.</div>
      }
    ]
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
    ref: 'exec_viewc-n-a-p',
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function to call on on-chain contract's <Link to="/docs/reference/declarations/view"><code>view</code></Link>. It is used by the contract binding to <Link to="/docs/tests/binding#views">call a view</Link>.</div>,
    parameters: [
      {
        type: 'Address',
        alias: 'a',
        desc: <div>Contract address</div>,
        prefix: prefix
      },
      {
        type: 'string',
        alias: 'n',
        desc: <div>View's name</div>,
        withLink : false
      },
      {
        type: 'Micheline',
        alias: 'a',
        desc: <div>View argument</div>,
        prefix : prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Parameters</div>,
        prefix: prefix
      },
    ],
    showfail : false,
    returns: {
      type: 'ViewResult',
      desc: <div>View's returned value</div>,
      withLink: false
    }
  },
  get_balance: {
    sig: 'todo',
    ref: 'get_balancea',
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function to retrieve contract's balance</div>,
    parameters: [
      {
        type: 'Address',
        alias: 'a',
        desc: <div>Contract address</div>,
        prefix: prefix
      }
    ],
    showfail : false,
    returns: {
      type: 'Tez',
      desc: <div>Contract balance</div>,
      prefix: prefix
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
    desc: <div>Low-level <Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>asynchronous</i></Link> function to get the transaction parameters to call an entry point. It is used by the contract's binding to get entry point transaction parameters for <Link to="/docs/tests/binding#entry-points-parameters">batch</Link> execution of entry points.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'c',
        desc: <div>Contract address</div>,
        withLink: false
      },
      {
        type: 'string',
        alias: 'e',
        desc: <div>Entry point name</div>,
        withLink: false
      },
      {
        type: 'Micheline',
        alias: 'a',
        desc: <div>Entry point argument</div>,
        prefix: prefix
      },
      {
        type: 'Parameters',
        alias: 'p',
        desc: <div>Parameters</div>,
        prefix: prefix
      },
    ],
    showfail : false,
    returns: {
      type: 'CallParameter',
      desc: <div>Transaction parameter</div>,
      withLink: false
    }
  },
  get_storage: {
    sig: 'todo',
    ref: 'get_storagea',
    desc: <div><Link to="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html"><i>Asynchronous</i></Link> function that returns the <Link to="https://tezostaquito.io/">Taquito</Link> storage of a contract.</div>,
    parameters: [
      {
        type: 'string',
        alias: 'a',
        desc: <div>Contract address</div>,
        withLink: false
      }
    ],
    showfail : false,
    returns: {
      type: 'any',
      desc: <div>Taquito's formatted contract storage.</div>,
      withLink: false
    }
  },
  set_binder_tezos_toolkit: {
    sig: 'todo',
    ref: 'set_binder_tezos_toolkittk',
    desc: <div>Sets the <Link to="/docs/dapps/project/#tezos-library">Taquito Toolkit</Link>. It is used by the <Link to="/docs/tests/binding">binding</Link> object to make calls to the blockchain.</div>,
    parameters: [
      {
        type: 'TezosToolkit',
        alias: 'tk',
        desc: <div><Link to="https://tezostaquito.io/docs/quick_start/#import-tezostoolkit-from-taquitotaquito-and-instantiate-it">Taquito</Link>'s toolkit</div>,
        withLink: false
      }
    ],
    showfail: false
  },
}

export const event = {
  register_event: {
    sig: 'todo',
    ref: 'register_eventp',
    desc: <div>Low-level function to register an event listener. It is used by contract binding's <Link to="/docs/tests/binding#events">register event methods</Link>.</div>,
    parameters: [
      {
        type: 'RegisterParam',
        alias: 'p',
        desc: <div>Parameter object:<ul>
          <li>source as <code>string</code>: emiting contract's address</li>
          <li>filter as <code>EventFilter</code>: filter function to discriminate the event to listen to</li>
          <li>process as <code>EventProcessor</code>: callback function to trigger when an event is emitted</li>
        </ul></div>,
        withLink: false
      }
    ],
    showfail: false
  },
  run_listener: {
    sig: 'todo',
    ref: 'run_listenero',
    desc: <div>Starts event listener "worker" (potentially-indefinite loop with timer)</div>,
    parameters: [
      {
        type: 'EventListenerOptions',
        alias: 'o',
        desc: <div>Event listener optional options:<ul>
          <li>delay: number of milliseconds between two lookups of the event well contract </li>
          <li>horizon: number of blocks to look back (the higher, the higher the probability to read the main branch)</li>
          <li>endpoint: endpoint used by the event listener</li>
          <li>bottom: block hash to start crawling from (defaulted to <code>head~2</code>)</li>
          <li>verbose: flag to turn crank's verbose mode on/off</li>
        </ul></div>,
        withLink: false
      }
    ],
    showfail: false
  },
  stop_listener: {
    sig: 'todo',
    ref: 'stop_listener',
    desc: <div>Stops event listener.</div>,
    parameters: [

    ],
    showfail: false
  },
}
import React from "react"
import Link from '@docusaurus/Link';

export const templates = {
  fa12: {
    info: {
      repo: 'https://completium.com/docs/templates/fa12',
      author: 'Completium',
      authorurl: 'https://completium.com/',
      tzip: 'TZIP7',
      tzipurl:'https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-7/tzip-7.md'
    },
    transfer: {
      desc: <div><p>Transfers <code>value</code> tokens from <code>from</code> to <code>to</code>. If the caller is not equal to <code>from</code>, then <code>caller</code> must have been allowed by from to transfer this amount to <code>to</code></p><p>
          Approved amount is decreased by <code>value</code> if applicable.
        </p></div>,
      sig: 'transfer(from, to, value)',
      parameters: [
        {
          type: 'address',
          alias: 'from',
          desc: <div>Sending tokens address</div>
        },
        {
          type: 'address',
          alias: 'to',
          desc: <div>Receiving tokens address</div>
        },
        {
          type: 'nat',
          alias: 'value',
          desc: <div>Number of tokens to transfer</div>
        },
      ],
      fails: [
        {
          keyword: '("ASSET_NOT_FOUND", "ledger")',
          desc: <div>When address <code>from</code> is not found in <Link to="/docs/templates/fa12#ledger"><code>ledger</code></Link></div>
        },
        {
          keyword: 'NotEnoughBalance',
          desc: <div>When number of tokens owned by <code>from</code> is less than <code>value</code></div>
        },
        {
          keyword: '("ASSET_NOT_FOUND", "allowance")',
          desc: <div>When <code>caller</code> is not allowed by <code>from</code> to transfer tokens</div>
        },
        {
          keyword: 'NotEnoughAllowance',
          desc: <div>When <code>caller</code>'s allowed transfer is less than <code>value</code></div>
        }
      ],
      related: [
        { keyword: 'transfer', link: '/docs/reference/instructions/operation#transfer' },
        { keyword: 'ledger', link: '/docs/templates/fa12#ledger' },
        { keyword: 'allowance', link: '/docs/templates/fa12#allowance' },
      ]
    },
    approve: {
      desc: <div>Approves <code>spender</code> to transfer <code>value</code> tokens owned by <Link to="/docs/reference/expressions/constants#caller"><code>caller</code></Link>.</div>,
      sig: 'approve',
      parameters: [
        {
          type: 'address',
          alias: 'spender',
          desc: <div>Approved address to transfer tokens from <Link to="/docs/reference/expressions/constants#caller"><code>caller</code></Link></div>
        },
        {
          type: 'nat',
          alias: 'value',
          desc: <div>Number of tokens approved for transfer</div>
        },
      ],
      fails: [
        {
          keyword: '("UnsafeAllowanceChange", previous)',
          desc: <div>When <code>spender</code> is already approved a non-zero amount of tokens (<code>previous</code>)</div>
        },
      ],
      related: [
        { keyword: 'allowance', link: '/docs/templates/fa12#allowance' },
      ]
    },
    getallowance: {
      desc:<div><Link to="/docs/reference/declarations/entrypoint#getter">Getter</Link> of the allowed value <code>spender</code> can transfer on behalf of <code>owner</code>.</div>,
      sig: 'getallowance',
      parameters: [
        {
          type: 'address',
          alias: 'owner',
          desc: <div>Tokens owner</div>
        },
        {
          type: 'address',
          alias: 'spender',
          desc: <div>Approved address to transfer tokens from <code>owner</code></div>
        },
      ],
      returns: {
        type: 'nat',
        desc: <div>Number of tokens <code>spender</code> can transfer on behalf of <code>owner</code></div>
      }
    },
    getbalance: {
      desc: <div><Link to="/docs/reference/declarations/entrypoint#getter">Getter</Link> of the number of tokens owned by <code>owner</code>.</div>,
      sig: 'getbalance',
      parameters: [
        {
          type: 'address',
          alias: 'owner',
          desc: <div>Tokens owner</div>
        },
      ],
      returns: {
        type: 'nat',
        desc: <div>Number of tokens owned by <code>owner</code></div>
      }
    },
    gettotalsupply: {
      desc: <div><Link to="/docs/reference/declarations/entrypoint#getter">Getter</Link> of <Link to="/docs/templates/fa12#total_supply"><code>total_supply</code></Link></div>,
      sig: 'gettotalsupply',
      returns: {
        type: 'nat',
        desc: <div>Value of <Link to="/docs/templates/fa12#total_supply"><code>total_supply</code></Link></div>
      }
    },
    initialholder: {
      desc: <div>Initial owner of the total supply of tokens</div>,
      type: 'address',
      related: [
        { keyword: 'total_supply', link: '/docs/templates/fa12#total_supply' },
      ],
    },
    totalsupply: {
      desc: <div>Total number of tokens. Note that this value is a constant since there is no <i>mint</i> or <i>burn</i> mechanism in this version.</div>,
      type: 'nat',
      related: [
        { keyword: 'initial_holder', link: '/docs/templates/fa12#initial_holder' },
        { keyword: 'getTotalSupply', link: '/docs/templates/fa12#gettotalsupply' },
      ],
    },
    ledger: {
      desc: <div>Associates an address to the number of tokens it owns.</div>,
      type: 'big_map<address, nat>',
      typeUrl : 'big_map<K,%20V>',
      related: [
        { keyword: 'transfer', link: '/docs/templates/fa12#transferfrom-to-value' },
      ],
    },
    allowance: {
      desc: <div>Associates an <i>owner</i> address and a <i>spender</i> address to an amount of tokens.</div>,
      type: 'big_map<address * address, nat>',
      typeUrl : 'big_map<K,%20V>',
      related: [
        { keyword: 'transfer', link: '/docs/templates/fa12#transferfrom-to-value' },
        { keyword: 'approve', link: '/docs/templates/fa12#approvespender-value' },
      ],
    }
  }
}
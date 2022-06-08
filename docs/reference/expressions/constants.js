
import React from "react"

import BalanceDesc from '../../../src/components/desc/balance_desc.md'
import ChainidDesc from '../../../src/components/desc/chainid_desc.md'

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference'

export const constants = {
  balance:
  {
    desc: <BalanceDesc />,
    type: 'tez',
    michelson: "BALANCE",
    michelson_ref_url: michelson_ref_base_url + '/#instr-BALANCE',
    related: [],
  },
  self_chain_id:
  {
    desc: <ChainidDesc />,
    type: 'chain_id',
    michelson: "CHAIN_ID",
    michelson_ref_url: michelson_ref_base_url + '/#instr-CHAIN_ID',
    related: [],
  },
  caller:
  {
    desc: 'Address calling the contract. It may be an account or another smart contract.',
    type: 'address',
    michelson: "SENDER",
    michelson_ref_base_url: michelson_ref_base_url + '/#SENDER',
    related: [
      { keyword: "source", link: "/docs/reference/expressions/constants#source" },
      { keyword: "called by", link: "/docs/reference/declarations/entrypoint#called-by" },
    ]
  },
  level:
  {
    desc: <div>Current block level.</div>,
    type: 'nat',
    michelson: "LEVEL",
    michelson_ref_url: michelson_ref_base_url + '/#instr-LEVEL',
    related: [],
  },
  now:
  {
    desc: <div>Block date. It is constant throughout endpoint execution.</div>,
    type: 'date',
    michelson: "NOW",
    michelson_ref_url: michelson_ref_base_url + '/#instr-NOW',
    related: [],
  },
  self_address:
  {
    desc: <div>Address of current contract.</div>,
    type: 'address',
    michelson: "SELF_ADDRESS",
    michelson_ref_url: michelson_ref_base_url + '/#instr-SELF_ADDRESS',
    related: [
      { keyword: "caller", link: "/docs/reference/expressions/constants#caller" },
      { keyword: "sourced by", link: "/docs/reference/declarations/entrypoint#sourced-by" },
    ],
  },
  source:
  {
    desc: 'Address of the account at the origin of the call to the entrypoint. If Alice calls contract A, which calls contract B, then source in contract B is Alice (and caller in contract B is contract A).',
    type: 'address',
    michelson: "SOURCE",
    michelson_ref_url: michelson_ref_base_url + '/#instr-SOURCE',
    related: [
      { keyword: "caller", link: "/docs/reference/expressions/constants#caller" },
      { keyword: "sourced by", link: "/docs/reference/declarations/entrypoint#sourced-by" },
    ],
  },
  state:
  {
    desc: <div>State of the contract when designed as a state machine. It is changed with <code>transition</code> entrypoints, not assignment instructions.<p></p>
    The Michelson representation is a <code>nat</code> storage variable named <code>_state</code>.
    </div>,
    related: [
      { keyword: "State Machine", link: "/docs/statemachine" },
      { keyword: "States declaration", link: "/docs/reference/declarations/compositetypes#states" },
      { keyword: "Transition", link: "/docs/reference/declarations/compositetypes#transition" },
      { keyword: "Assignment", link: "/docs/reference/instructions/assignment"}
    ],
  },
  transferred:
  {
    desc: <div>Amount of tez sent to current entrypoint execution.</div>,
    type: 'tez',
    michelson: "AMOUNT",
    michelson_ref_url: michelson_ref_base_url + '/#instr-AMOUNT',
    related: [
      { keyword: 'tez', link: '/docs/reference/types#tez' },
      { keyword: 'balance', link: '/docs/reference/expressions/constants#balance' }
    ],
  },
  total_voting_power: {
    desc: 'Total voting power of all contracts.',
    type: 'nat',
    michelson: "TOTAL_VOTING_POWER",
    michelson_ref_url: michelson_ref_base_url + '/#instr-TOTAL_VOTING_POWER',
    related: [
      { keyword: 'voting_power', link: '/docs/reference/expressions/builtins#voting_power(k%20:%20key_hash)' }
    ],
  },
};



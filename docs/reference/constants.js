
const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference'

export const constants = {
    balance :
    {
      desc: 'TODO',
      type: 'tez',
      michelson: "BALANCE",
      michelson_ref_url: michelson_ref_base_url + '/#instr-BALANCE',
      related: [ ],
    },
    caller :
    {
      desc: 'Address of the account (or contract) calling the entrypoint.',
      type: 'address',
      michelson: "SENDER",
      michelson_ref_url: michelson_ref_base_url + '/#instr-SENDER',
      related: [
        { keyword: "caller", link:"/docs/reference/constants#caller" },
        { keyword: "called by", link:"/docs/declarations/entrypoint" },
      ],
    },
    chainid :
    {
      desc: 'TODO',
      type: 'chain_id',
      michelson: "CHAIN_ID",
      michelson_ref_url: michelson_ref_base_url + '/#instr-CHAIN_ID',
      related: [ ],
    },
    level :
    {
      desc: 'TODO',
      type: 'nat',
      michelson: "LEVEL",
      michelson_ref_url: michelson_ref_base_url + '/#instr-LEVEL',
      related: [ ],
    },
    now :
    {
      desc: 'TODO',
      type: 'date',
      michelson: "NOW",
      michelson_ref_url: michelson_ref_base_url + '/#instr-NOW',
      related: [ ],
    },
    selfaddress :
    {
      desc: 'TODO',
      type: 'address',
      michelson: "SELF_ADDRESS",
      michelson_ref_url: michelson_ref_base_url + '/#instr-SELF_ADDRESS',
      related: [ ],
    },
    source :
    {
      desc: 'Address of the account at the origin of the call to the entrypoint. If Alice calls contract A, which calls contract B, then source in contract B is Alice (and caller in contract B is contract A).',
      type: 'address',
      michelson: "SOURCE",
      michelson_ref_url: michelson_ref_base_url + '/#instr-SOURCE',
      related: [
        { keyword: "source", link:"/docs/reference/constants#source" },
        { keyword: "sourced by", link:"/docs/declarations/entrypoint" },
      ],
    },
    state :
    {
      desc: 'TODO',
      related: [ ],
    },
    transferred :
    {
      desc: 'TODO',
      type: 'tez',
      michelson: "AMOUNT",
      michelson_ref_url: michelson_ref_base_url + '/#instr-AMOUNT',
      related: [ ],
    }
  };



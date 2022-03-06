export const constants = {
    caller :
    {
      desc: 'Address of the account (or contract) calling the entrypoint.',
      type: 'address',
      michelson: "SENDER",
      related: [
        { keyword: "source", link:"/docs/reference/constants#source" },
        { keyword: "called by", link:"/docs/declarations/entrypoint" },
      ],
    },
    source :
    {
      desc: 'Address of the account (or contract) at the origin of the call to the entrypoint. If Alice calls contract A, which calls contract B, then source in contract B is Alice (and caller in contract B is contract A).',
      type: 'address',
      michelson: "SOURCE",
      related: [
        { keyword: "caller", link:"/docs/reference/constants#caller" },
        { keyword: "sourced by", link:"/docs/declarations/entrypoint" },
      ],
    }
  };
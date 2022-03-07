const michelson_prefix = 'https://tezos.gitlab.io/michelson-reference/'

export const builtins = {
  check_signature : {
    desc: 'Verfies that a signature is obtained by signing a sequence of bytes with an account public key.',
    parameters: [
      {
        type: 'key',
        desc: 'Public key of the account to sign the sequence of bytes.'
      },
      {
        type: 'signature',
        desc: 'Signature to be compared to the one obtained by signing the sequence of bytes by the key.'
      },
      {
        type: 'bytes',
        desc: 'Sequence of bytes to sign by the key and to be compared to the signature.'
      },
    ],
    returns: {
      type : 'bool',
      desc: 'Returns true if the parameter signature is obtained by signing the sequence of bytes with the key, false otherwise.'
    },
    michelson: {
      keyword: 'CHECK_SIGNATURE',
      link: michelson_prefix + '#instr-CHECK_SIGNATURE'
    },
    related: [
      { keyword: 'Check signature', link: '' },
    ]
  }
}

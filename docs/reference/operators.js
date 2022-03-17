import React from "react"
import { MichelsonType } from "../../src/components/MichelsonType"

const michelson_ref_base_url = 'https://tezos.gitlab.io/michelson-reference/'

export const operators = {
  add: {
    desc: <div>Adds numbers or concatenates strings.</div>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'rational',     typb : 'rational',     typr: 'rational' },
      { typa: 'tez',          typb : 'tez',          typr: 'tez' },
      { typa: 'string',       typb : 'string',       typr: 'string',
        comment: <div>(compiles to Michelson instruction <MichelsonType michelson="CONCAT" michelson_ref_url={michelson_ref_base_url} />)</div> },
      { typa: 'duration',     typb : 'duration',     typr: 'duration' },
      { typa: 'date',         typb : 'duration',     typr: 'date' },
      { typa: 'duration',     typb : 'date',         typr: 'date' },
      { typa: 'bls12_381_fr', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g1', typb : 'bls12_381_g1', typr: 'bls12_381_g1' },
      { typa: 'bls12_381_g2', typb : 'bls12_381_g2', typr: 'bls12_381_g2' },
    ],
    promotions: [
      { typa: 'nat', typb : 'int', typr: 'int' },
      { typa: 'int', typb : 'nat', typr: 'int' },
      { typa: 'rational', typb : 'nat', typr: 'rational' },
      { typa: 'nat', typb : 'rational', typr: 'rational' },
      { typa: 'rational', typb : 'int', typr: 'rational' },
      { typa: 'nat', typb : 'rational', typr: 'rational' },
      { typa: 'bls12_381_fr', typb : 'nat', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_fr', typb : 'int', typr: 'bls12_381_fr' },
      { typa: 'nat', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'int', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
    ],
    michelson: "ADD",
    michelson_ref_url: michelson_ref_base_url + '#instr-ADD',
  },
  sub : {
    desc: 'Subtracts numbers.',
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'int' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'tez',          typb : 'tez',          typr: 'tez' },
      { typa: 'rational',     typb : 'rational',     typr: 'rational' },
      { typa: 'duration',     typb : 'duration',     typr: 'duration' },
      { typa: 'date',         typb : 'duration',     typr: 'date' },
      { typa: 'date',         typb : 'duration',     typr: 'date' },
      { typa: 'bls12_381_fr', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_g1', typb : 'bls12_381_g1', typr: 'bls12_381_g1' },
      { typa: 'bls12_381_g2', typb : 'bls12_381_g2', typr: 'bls12_381_g2' },
    ],
    promotions: [
      { typa: 'nat', typb : 'int', typr: 'int' },
      { typa: 'int', typb : 'nat', typr: 'int' },
      { typa: 'rational', typb : 'nat', typr: 'rational' },
      { typa: 'nat', typb : 'rational', typr: 'rational' },
      { typa: 'rational', typb : 'int', typr: 'rational' },
      { typa: 'nat', typb : 'rational', typr: 'rational' },
      { typa: 'bls12_381_fr', typb : 'nat', typr: 'bls12_381_fr' },
      { typa: 'bls12_381_fr', typb : 'int', typr: 'bls12_381_fr' },
      { typa: 'nat', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
      { typa: 'int', typb : 'bls12_381_fr', typr: 'bls12_381_fr' },
    ],
    michelson: "SUB",
    michelson_ref_url: michelson_ref_base_url + '#instr-SUB',
  }
}
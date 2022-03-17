import React from "react"

export const operators = {
  add: {
    desc: <div>Adds numbers or concatenates strings.</div>,
    types: [
      { typa: 'nat',          typb : 'nat',          typr: 'nat' },
      { typa: 'int',          typb : 'int',          typr: 'int' },
      { typa: 'rational',     typb : 'rational',     typr: 'rational' },
      { typa: 'tez',     typb : 'tez',     typr: 'tez' },
      { typa: 'string',       typb : 'string',       typr: 'string' },
      { typa: 'duration',       typb : 'duration',       typr: 'duration' },
      { typa: 'date', typb : 'duration', typr: 'date' },
      { typa: 'duration', typb : 'date', typr: 'date' },
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
    ]
  }
}
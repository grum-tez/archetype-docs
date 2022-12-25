import React from "react"
export const bindings = [
  { link: 'address', archetype : 'address', michelson : 'address', ts : 'Address' },
  { link: 'bls12_381_fr', archetype: 'bls12_381_fr', michelson: 'bls12_381_fr', ts: 'Bls12_381_fr' },
  { link: 'bls12_381_g1', archetype: 'bls12_381_g1', michelson: 'bls12_381_g1', ts: 'Bls12_381_g1' },
  { link: 'bls12_381_g2', archetype: 'bls12_381_g2', michelson: 'bls12_381_g2', ts: 'Bls12_381_g2' },
  { link: 'bool', archetype: 'bool', michelson: 'bool', ts: 'boolean', native: true },
  { link: 'bytes', archetype: 'bytes', michelson: 'bytes', ts: 'Bytes' },
  { link: 'chain_id', archetype: 'chain_id', michelson: 'chain_id', ts: 'Chain_id' },
  { link: 'chest', archetype: 'chest', michelson: 'chest', ts: 'Chest' },
  { link: 'chest_key', archetype: 'chest_key', michelson: 'chest_key', ts: 'Chest_key' },
  { link: 'contract<T>', archetype: 'contract', michelson: 'contract', ts: 'Entrypoint' },
  { link: 'date', archetype: 'date', michelson: 'timestamp', ts: 'date', native: true },
  { link: 'duration', archetype: 'duration', ts: 'Duration' },
  { link: 'event', archetype: 'event', ts: 'Event' },
  { link: 'int', archetype : 'int', michelson : 'int', ts : 'Int' },
  { link: 'key', archetype: 'key', michelson: 'key', ts: 'Key' },
  { link: 'key_hash', archetype: 'key_hash', michelson: 'Key_hash', ts: 'Key_hash' },
  { link: 'list<T>', archetype: 'list', michelson: 'list', ts: 'Array', native: true },
  { link: 'nat', archetype : 'nat', michelson : 'nat', ts : 'Nat' },
  { link: 'never', archetype: 'never', michelson: 'never', ts: 'never', native: true },
  { link: 'operation', archetype: 'operation', michelson: 'operation' },
  { link: 'option<T>', archetype: 'option', michelson: 'option', ts: 'Option' },
  { link: 'or<T1,%20T2>', archetype: 'or', michelson: 'or', ts: 'Or' },
  { link: 'rational', archetype: 'rational', ts: 'Rational' },
  { link: 'sapling_state(n)', archetype: 'sapling_state', michelson: 'sapling_state', ts: 'Sapling_state' },
  { link: 'sapling_transaction(n)', archetype: 'sapling_transaction', michelson: 'sapling_transaction', ts: 'Sapling_transaction' },
  { link: 'set<T>', archetype: 'set', michelson: 'set', ts: 'Array', native: true },
  { link: 'signature', archetype: 'signature', michelson: 'signature', ts: 'Signature' },
  { link: 'string', archetype: 'string', michelson: 'string', ts: 'string', native: true },
  { link: 'tez', archetype: 'tez', michelson: 'tez', ts: 'Tez' },
  { link: 'ticket<T>', archetype: 'ticket', michelson: 'ticket', ts: 'Ticket' },
  { link: 'unit', archetype: 'unit', michelson: 'unit', ts: 'Unit' }
]

const exp_prefix = "/docs/tests/apis/experiment#"

export const now = [
  { label: 'set_mockup_now', link: exp_prefix+'set_mockup_nowd', desc: <div>Sets mockup now value.</div> },
  { label: 'delay_mockup_now_by_day', link: exp_prefix+'delay_mockup_now_by_dayv', desc: <div>Delays mockup now value by a number of days.</div> },
  { label: 'delay_mockup_now_by_minute', link: exp_prefix+'delay_mockup_now_by_minutev', desc: <div>Delays mockup now by a number of minutes.</div> },
  { label: 'delay_mockup_now_by_hour', link: exp_prefix+'delay_mockup_now_by_hourv', desc: <div>Delays mockup now by a number of hours.</div> },
  { label: 'delay_mockup_now_by_second', link: exp_prefix+'delay_mockup_now_by_secondv', desc: <div>Delays mockup now by a number of seconds.</div> },
  { label: 'delay_mockup_now_by_week', link: exp_prefix+'delay_mockup_now_by_weekv', desc: <div>Delays mockup now by a number of weeks.</div> },
  { label: 'get_mockup_now', link: exp_prefix+'get_mockup_now', desc: <div>Gets mockup now value.</div> },
]

export const experiment = [
  { label: 'blake2b', link: exp_prefix+'blake2bb', desc: <div>Hashes bytes data accourding to blake2b algorithm.</div> },
  { label: 'sign', link: exp_prefix+'signb-a', desc: <div>Signs packed data.</div> },
  { label: 'pack', link: exp_prefix+'packo-t', desc: <div>Packs bytes data.</div> },
  { label: 'transfer', link: exp_prefix+'transferf-t-a', desc: <div>Transfers tez from one account to another.</div> },
]

const utils_prefix = "/docs/tests/apis/typeutils#"

export const types = [
  { label: 'date_cmp', link: utils_prefix+'cmp_datea-b', desc: <div>Compares javascript dates at second precision (as Tezos dates are).</div> },
  { label: 'is_left', link: utils_prefix+'is_leftv', desc: <div>Tests whether a Micheline <code>or</code> value is <code>left</code>.</div> },
  { label: 'is_right', link: utils_prefix+'is_rightv', desc: <div>Tests whether a Micheline <code>or</code> value is <code>right</code>.</div> },
]

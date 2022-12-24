import { types as T, types_functions as F, experiment as E } from './types'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getTypes = (C, p, filter, cap = false) => {
  const prefix = "/docs/tests/apis/" + p
  return Object.keys(C).filter(x => filter(x)).map(t => {
    return {
      label: cap ? capitalizeFirstLetter(t) : t,
      link: prefix + '#' + (C[t].ref ? C[t].ref : t)
    }
  })
}

function isFromMich(x) {
  return x.startsWith("mich_to") || x.startsWith("annotated_mich_to")
}

function isToMich(x) {
  return x.endsWith("to_mich")
}

function isToMichType(x) {
  return x.endsWith("to_mich_type")
}

function isUtils(x) {
  return !(isFromMich(x)) && !(isToMich(x)) && !(isToMichType(x))
}

export const types = getTypes(T, "types", _ => true, true)

export const utils = getTypes(F, "typeutils", isUtils)
export const fromMich = getTypes(F, "typeutils", isFromMich)
export const toMich = getTypes(F, "typeutils", isToMich)
export const toMichType = getTypes(F, "typeutils", isToMichType)

export const experiment = getTypes(E, "experiment", _ => true)
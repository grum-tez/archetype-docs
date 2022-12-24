import { types as T, types_functions as F, experiment as E } from './types'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getTypes = (C, p, cap = false) => {
  const prefix = "/docs/tests/apis/" + p
  return Object.keys(C).map(t => {
    return {
      label: cap ? capitalizeFirstLetter(t) : t,
      link: prefix + '#' + (C[t].ref ? C[t].ref : t)
    }
  })
}

export const types = getTypes(T, "types", true)
export const functions = getTypes(F, "typeutils")
export const experiment = getTypes(E, "experiment")
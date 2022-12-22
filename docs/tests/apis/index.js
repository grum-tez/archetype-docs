import { types as T, functions as F } from './types'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getTypes = (C, p) => {
  const prefix = "/docs/tests/apis/" + p
  return Object.keys(C).map(t => {
    return {
      label: capitalizeFirstLetter(t),
      link: prefix + '#' + (C[t].ref ? C[t].ref : t)
    }
  })
}

export const types = getTypes(T, "types")
export const functions = getTypes(F, "typeutils")
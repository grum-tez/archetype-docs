

export const PASSABLE = 0
export const STORABLE = 1

export const types = {
  string :
  {
    desc: 'Basic string type to store and manipulate array of non-extended ASCII characters.',
    examples: [ '"This is a string"', '"12345"' ],
    tags: [ PASSABLE, STORABLE ],
    michelson: "STRING",
    related: [
      { keyword: "Presentation", link:"/docs/language-basics/string" },
      { keyword: "Operators", link:"/docs/reference/operators" }
    ],
  }
};
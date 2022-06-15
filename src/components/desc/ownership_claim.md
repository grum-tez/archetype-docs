import NamedDivider from '@site/src/components/NamedDivider.js';

Declared candidate calls this method to confirm it is the new contract owner.

<NamedDivider title="Code" width="1.5"/>

```archetype
entry claim_ownership() {
  require {
    r1: (claim_ownership ? the = caller : false) otherwise "INVALID_CALLER"
  }
  effect {
    owner := caller;
    owner_candidate := none
  }
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`require`](/docs/reference/declarations/entrypoint#require) [`?:`](/docs/reference/expressions/controls#a--b--c) [`effect`](/docs/reference/declarations/entrypoint#effect) [`:=`](/docs/reference/instructions/assignment#a--b) [`caller`](/docs/reference/expressions/constants#caller) [`none`](/docs/reference/expressions/builtins#none)

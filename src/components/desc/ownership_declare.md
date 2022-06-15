import NamedDivider from '@site/src/components/NamedDivider.js';

Declares a condidate address to be the contract's owner.

<NamedDivider title="Code" width="1.5"/>

```archetype
entry declare_ownership(candidate : address) {
  called by owner
  effect {
    owner_candidate := some(candidate);
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`address`](/docs/reference/types#address) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`effect`](/docs/reference/declarations/entrypoint#effect) [`:=`](/docs/reference/instructions/assignment#a--b) [`some`](/docs/reference/expressions/builtins#some(v%20:%20T))

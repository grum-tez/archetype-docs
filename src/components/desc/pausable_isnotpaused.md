import NamedDivider from '@site/src/components/NamedDivider.js';

Utility function to call in [`require`](/docs/reference/declarations/entrypoint#require) section of entrypoints, like in [`pause()`](/docs/templates/pausable#pause) entrypoint below for example.

<NamedDivider title="Code" width="1.5"/>

```archetype
function is_not_paused() : bool {
  do_fail_if(paused, "CONTRACT_PAUSED");
  return true
}
```

[`function`](/docs/reference/declarations/function) [`do_fail_if`](/docs/reference/instructions/divergent#do_fail_ift--bool-e--t)

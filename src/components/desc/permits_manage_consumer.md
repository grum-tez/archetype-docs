import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
enum consumer_op =
| add<address>
| remove<address>

entry manage_consumer(op : consumer_op) {
  called by owner
  effect {
    match op with
    | add(a)    -> consumer.add({ a })
    | remove(a) -> consumer.remove(a)
    end
  }
}
```
[`enum`](/docs/language-basics/composite#enum) [`address`](/docs/reference/types#address) [`entry`](/docs/reference/declarations/entrypoint#entry) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`effect`](/docs/reference/declarations/entrypoint#effect) [`match`](/docs/reference/instructions/control#match-with) [`add`](/docs/reference/instructions/asset#aadda) [`remove`](/docs/reference/instructions/asset#aremovek)
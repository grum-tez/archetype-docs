import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
enum update_for_all_op =
| add_for_all<address>
| remove_for_all<address>

entry update_operators_for_all (upl : list<update_for_all_op>) {
  require { fa2_r2 : is_not_paused() }
  effect {
    for up in upl do
      match up with
      | add_for_all(op)  ->
        operator_for_all.put({fa_oaddr = op; fa_oowner = caller})
      | remove_for_all(op) ->
        operator_for_all.remove((op, caller))
      end;
    done;
  }
}
```
[`enum`](/docs/language-basics/composite#enum) [`address`](/docs/reference/types#address) [`entry`](/docs/reference/declarations/entrypoint#entry) [`list`](/docs/reference/types#list<T>) [`require`](/docs/reference/declarations/entrypoint#require) [`for`](/docs/reference/instructions/control#for) [`match`](/docs/reference/instructions/control#match-with) [`do_require`](/docs/reference/instructions/divergent#do_requiret--bool-e--t) [`put`](/docs/reference/instructions/asset#aputa) [`remove`](/docs/reference/instructions/asset#aremovek) [`caller`](/docs/reference/expressions/constants#caller)
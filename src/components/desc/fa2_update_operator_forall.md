import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
enum update_for_all_op =
| add_for_all<address>
| remove_for_all<address>

entry update_operators_for_all (upl : list<update_for_all>) {
  require { r1 : is_not_paused() }
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
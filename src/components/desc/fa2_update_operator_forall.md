import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
entry update_operators_for_all (upl : list<or<address, address>>) {
  require { r1 : is_not_paused() }
  effect {
    for up in upl do
      match up with
      | left(op)  -> /* add */
        operator_for_all.put({fa_oaddr = op; fa_oowner = caller})
      | right(op) -> /* remove */
        operator_for_all.remove((op, caller))
      end;
    done;
  }
}
```
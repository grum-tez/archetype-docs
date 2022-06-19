import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record operator_param {
  opp_owner    : address;
  opp_operator : address;
  opp_token_id : nat
} as ((owner, (operator, token_id)))

enum update_op =
| add_operator<operator_param>
| remove_operator<operator_param>

entry update_operators (upl : list<update_op>) {
  require { r0 : is_not_paused() }
  effect {
    for up in upl do
      match up with
      | add_operator(param) ->
        do_require(param.opp_owner = caller , CALLER_NOT_OWNER);
        operator.put({
          oaddr  = param.opp_operator;
          otoken = param.opp_token_id;
          oowner = param.opp_owner
        })
      | remove_operator(param) ->
        do_require(param.opp_owner = caller , CALLER_NOT_OWNER);
        operator.remove((param.opp_operator, param.opp_token_id, param.opp_owner))
      end;
    done;
  }
}
```
[`record`](/docs/language-basics/composite#record) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`enum`](/docs/language-basics/composite#enum) [`entry`](/docs/reference/declarations/entrypoint#entry) [`list`](/docs/reference/types#list<T>) [`require`](/docs/reference/declarations/entrypoint#require) [`for`](/docs/reference/instructions/control#for) [`match`](/docs/reference/instructions/control#match-with) [`do_require`](/docs/reference/instructions/divergent#do_requiret--bool-e--t) [`put`](/docs/reference/instructions/asset#aputa) [`remove`](/docs/reference/instructions/asset#aremovek) [`caller`](/docs/reference/expressions/constants#caller)
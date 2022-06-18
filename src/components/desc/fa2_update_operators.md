import NamedDivider from '@site/src/components/NamedDivider.js';

<NamedDivider title="Code" width="1.5"/>

```archetype
record operator_param {
  opp_owner    : address;
  opp_operator : address;
  opp_token_id : nat
} as ((owner, (operator, token_id)))

entry update_operators (upl : list<or<operator_param, operator_param>>) {
  require { r0 : is_not_paused() }
  effect {
    for up in upl do
      match up with
      | left(param) -> /* add */
        do_require(param.opp_owner = caller , CALLER_NOT_OWNER);
        operator.put({
          oaddr  = param.opp_operator;
          otoken = param.opp_token_id;
          oowner = param.opp_owner
        })
      | right(param) -> /* remove */
        do_require(param.opp_owner = caller , CALLER_NOT_OWNER);
        operator.remove((param.opp_operator, param.opp_token_id, param.opp_owner))
      end;
    done;
  }
}
```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Approves `spender` to transfer `value` tokens owned by [`caller`](/docs/reference/expressions/constants#caller).

<Tabs defaultValue="code">

<TabItem value="code" label="Code">

```archetype
entry approve(spender : address, value : nat) {
  var k = (caller, spender);
  if allowance.contains(k) then (
    var previous = allowance[k].amount;
    do_fail_if(previous > 0 and value > 0, (("UnsafeAllowanceChange", previous)));
  );
  allowance.add_update( k, { amount = value });
}
```

</TabItem>

<TabItem value="spec" label="Formal Specification">


```archetype
specification entry approve(spender : address, value : nat) {
  fails {
    f2 with (msg : (string * nat)) :
      let some allowance_caller_spender = allowance[(caller, spender)] in
        msg = ("UnsafeAllowanceChange", allowance_caller_spender.amount) and
        value > 0 and
        allowance_caller_spender.amount > 0
      otherwise false;
  }
  postcondition approve_p1 { /* effect on allowance asset */
    let some after_allowance_caller_spender = allowance[(caller,spender)] in
    let some before_allowance_caller_spender = before.allowance[(caller,spender)] in
      after_allowance_caller_spender = { before_allowance_caller_spender with
        amount = value
      }
    otherwise
      after_allowance_caller_spender = { addr_owner = caller; addr_spender = spender; amount = value }
    otherwise false
  }

  postcondition approve_p2 { /* other allowance assets are unchanged */
    forall a in allowance,
      (a.addr_owner, a.addr_spender) <> (caller, spender) ->
      before.allowance[(a.addr_owner, a.addr_spender)] = some(a)
  }

  postcondition approve_p3 { /* added allowance */
    let some allowance_caller_spender = before.allowance[(caller, spender)] in
      added.allowance.isempty()
    otherwise
      added.allowance = [ { addr_owner = caller; addr_spender = spender; amount = value } ]
  }

  postcondition approve_p4 { /* no allowance asset is removed */
    removed.allowance.isempty()
  }

  postcondition approve_p5 {
    ledger = before.ledger
  }

  postcondition approve_p6 { /* no operation generated */
    length (operations) = 0
  }
}
```

</TabItem>

</Tabs>

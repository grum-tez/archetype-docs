import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Transfers `value` tokens from `from` to `to`.

If the caller is not equal to `from`, then [`caller`](/docs/reference/expressions/constants#caller) must have been allowed by from to transfer this amount to `to`

Approved amount is decreased by `value` if applicable.

<Tabs defaultValue="code">

<TabItem value="code" label="Code">

```archetype
entry %transfer (%from : address, %to : address, value : nat) {
  require {
    r1 : ledger[%from].tokens >= value otherwise "NotEnoughBalance";
  }
  effect {
    if caller <> %from then (
      var current = allowance[(%from, caller)].amount;
      do_fail_if(current < value, ("NotEnoughAllowance", ((value, current))));
      allowance.update((%from, caller), { amount -=  value });
    );
    ledger.update(%from, { tokens -= value });
    ledger.add_update(%to, { tokens += value });
  }
}
```

</TabItem>

<TabItem value="spec" label="Formal Specification" default>

```archetype
specification entry %transfer (%from : address, %to : address, value : nat) {
  fails {
    f0 with (msg : string) :
      let some after_ledger_from = ledger[%from] in
        msg = "NotEnoughBalance" and
        after_ledger_from.tokens < value
      otherwise true;
    f1 with (msg : string * (nat * nat)) :
      let some after_allowance_from_caller = allowance[(%from,caller)] in
        msg = ("NotEnoughAllowance", ((value, after_allowance_from_caller.amount))) and
        caller <> %from and
        after_allowance_from_caller.amount < value
      otherwise false;
  }
  /* LEDGER ASSET */
  postcondition transfer_p1 { /* effect on %from nbtokens */
    %from <> %to ->
    let some before_ledger_from = before.ledger[%from] in
    let some after_ledger_from  = ledger[%from] in
    after_ledger_from = { before_ledger_from with
      tokens = abs (before_ledger_from.tokens - value)
    }
    otherwise false otherwise false
  }
  postcondition transfer_p2 { /* effect on %to nbtokens */
    %from <> %to ->
    let some after_ledger_to = ledger[%to] in
    let some before_ledger_to = before.ledger[%to] in
      after_ledger_to = { before_ledger_to with
        tokens = (before_ledger_to.tokens + value)
      }
    otherwise
      after_ledger_to = { holder = %to; tokens = value }
    otherwise false /* %to ledger asset exists after transfer */
  }
  postcondition transfer_p3 {
    %from = %to -> ledger = before.ledger
  }
  postcondition transfer_p4 { /* other ledger assets are unchanged */
    forall tokenholder in ledger,
      tokenholder.holder <> %from ->
      tokenholder.holder <> %to ->
      before.ledger[tokenholder.holder] = some(tokenholder)
  }
  postcondition transfer_p5 { /* no ledger asset is removed */
    removed.ledger.isempty()
  }
  postcondition transfer_p6 { /* number of added asset may be one */
    let some before_to = before.ledger[%to] in
      added.ledger.isempty()
    otherwise
      added.ledger = [ { holder = %to; tokens = value } ]
  }
  /* ALLOWANCE ASSET */
  postcondition transfer_p7 { /* effect on allowance */
    caller <> %from ->
    let some before_from_caller = before.allowance[(%from,caller)] in
    let some after_from_caller = allowance[(%from,caller)] in
      before_from_caller.amount > value ->
      after_from_caller = { before_from_caller with
        amount = abs (before_from_caller.amount - value)
      }
    otherwise false
    otherwise true
  }
  postcondition transfer_p8 { /* effect on allowance */
    caller = %from -> allowance = before.allowance
  }
  postcondition transfer_p9 { /* other allowance assets are unchanged */
    forall a in allowance,
      a.addr_owner <> %from and a.addr_spender <> caller ->
      before.allowance[(a.addr_owner, a.addr_spender)] = some(a)
  }
  postcondition transfer_p10 { /* no allowance is added or removed */
    removed.allowance.isempty() and added.allowance.isempty()
  }

  postcondition transfer_p11 { /* no operation generated */
    length (operations) = 0
  }
}
```

</TabItem>

</Tabs>





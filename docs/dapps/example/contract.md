---
sidebar_position: 1
sidebar_label: Smart Contract
---
import Builtin from '@site/src/components/Builtin.js';
import TemplateInfo from '@site/src/components/TemplateInfo.js';
import NamedDivider from '@site/src/components/NamedDivider.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Poll Contract

The poll contract stores polls' IPFS hash and users' answers. It guarantees that an account can only answer once to a poll. It also computes the number of times an answer has been selected.

When a user adds a poll (IPFS hash), it needs to be approved by a special account, called contract's *owner*. The owner can also remove any existing poll.

<TemplateInfo data={{
  repo: 'https://github.com/completium/poll-dapp/tree/main/poll-contract',
  author: 'Completium',
  authorurl: 'https://completium.com/',
  norms: [
    { label : 'Metadata', url: '/docs/templates/metadata' },
    { label : 'Pausable', url: '/docs/templates/pausable' },
    { label : 'Ownership', url: '/docs/templates/ownership' },
  ]
}}/>

## Project

Poll contract project was created with the following [Completium CLI](/docs/cli/introduction) command:
```completium
completium-cli create project poll-contract
```
Command `npm i` installs required packages:
* typescript util packages
* `mocha` for test suite
* archetype's packages for binding

`package.json` file is created with utility commands, including:
* `npm run "gen-binding"` to generate contract(s)' binding
* `npm test` to launch tests in `tests` directory

## Deployment

The following [Completium CLI](/docs/cli/introduction) command is used to deploy the contract:
```completium
completium-cli deploy ./contracts/poll.arl --parameters '{ "owner": "tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P" }' --metadata-uri "ipfs://QmXbuUyyJXW1RRuL3k81Kpe2HULbYLj1sUUq44Nuxa5z8h"
```

where `QmXbuUyyJXW1RRuL3k81Kpe2HULbYLj1sUUq44Nuxa5z8h` is the IPFS hash of the [contract metadata](/docs/templates/metadata#example) file:
```json (metadata.json)
{
  "name": "Poll Dapp",
  "description": "An example of Dapp built with Archetype & Completium",
  "version": "2.0",
  "license": { "name": "MIT" },
  "authors": ["Completium team <contact@completium.com>"],
  "homepage": "https://completium.github.io/poll-dapp/",
  "interfaces": ["TZIP-016"]
}
```

## Storage

### `owner`

Contract owner's address, passed as contract parameter. Only the owner can:
* approve a poll
* remove a poll
* transfer contract ownership
* pause contract
* unpause contract

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
archetype poll(owner : address)
with metadata ""
```
[`archetype`](/docs/reference/declarations/contract) [`address`](/docs/reference/types#address) [`with metadata`](/docs/reference/declarations/contract#metadata)


</TabItem>
<TabItem value="TS Binding API">

```ts
(method) Poll.get_owner() : Promise<Address>
```

</TabItem>
</Tabs>


### `poll_counter`

Number of polls added, used as poll key in [`poll`](/docs/dapps/example/contract#poll) asset collection (see [`approve`](/docs/dapps/example/contract#approve) entry point).

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
variable polls_counter : nat = 0
```
[`variable`](/docs/reference/declarations/storage#variable) [`nat`](/docs/reference/types#nat)


</TabItem>
<TabItem value="TS Binding API">

```ts
(method) Poll.get_polls_counter() : Promise<Nat>
```

</TabItem>
</Tabs>

### `poll`

Collection of polls.

A poll is identified by a natural integer rather than by its IPFS hash. This is to minimize the required storage of the [`responder`](/docs/dapps/example/contract#responder) information, that stores which polls an user has answered.

The `responses` field stores the numbers of responses to poll's possible answers.

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
asset poll {
  poll_pk   : nat;
  ipfs_hash : bytes;
  creation  : date          = now;
  responses : map<nat, nat> = []
}
```
[`asset`](/docs/asset) [`nat`](/docs/reference/types#nat) [`bytes`](/docs/reference/types#bytes) [`date`](/docs/reference/types#date) [`now`](/docs/reference/expressions/constants#now) [`map`](/docs/reference/types#map<K,%20V>)

</TabItem>
<TabItem value="TS Binding API">

```ts
export type poll_key = Nat

export class poll_value {
  constructor(
    ipfs_hash: Bytes,
    responses: Array<[ Nat, Nat ]>,
    creation: Date)
}

export type poll_container = Array<[ poll_key, poll_value ]>;

(method) Poll.get_poll(): Promise<poll_container>
```

</TabItem>
</Tabs>

### `poll_to_approve`

Collection of polls' IPFS hashes proposed by users. When approved by [`owner`](/docs/dapps/example/contract#owner), a poll asset is created.

Note that the asset collection is created as a [`big_map`](/docs/reference/types#big_map<K,%20V>), to be able to handle an arbitrary large amount of poll proposition.

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
asset poll_to_approve to big_map {
  ipfs_hash_to_approve : bytes;
  poll_creator         : address = caller
}
```
[`asset`](/docs/asset) [`bytes`](/docs/reference/types#bytes) [`address`](/docs/reference/types#address) [`caller`](/docs/reference/expressions/constants#caller)

</TabItem>
<TabItem value="TS Binding API">

```ts
export type poll_to_approve_value = Address;

export type poll_to_approve_key = Bytes;

(method) Poll.get_poll_to_approve_value(key: poll_to_approve_key): Promise<poll_to_approve_value | undefined>

(method) Poll.has_poll_to_approve_value(key: poll_to_approve_key): Promise<boolean>
```

</TabItem>
</Tabs>


### `responder`

Collection of responders' lists (set) of answered polls. This is to decide whether a responder has already answered a poll or not (see [`respond`](/docs/dapps/example/contract#respond) entrypoint).

It is specified as a [`big_map`](/docs/reference/types#big_map<K,%20V>) to be able to handle an arbitrary large number of responders.

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">


```archetype
asset responder to big_map {
  res_addr : address;
  polls    : set<nat> = [];
}
```
[`asset`](/docs/asset) [`address`](/docs/reference/types#address) [`set`](/docs/language-basics/container#set) [`nat`](/docs/reference/types#nat)


</TabItem>
<TabItem value="TS Binding API">

```ts
export type responder_key = Address

export type responder_value = Array<Nat>

(method) Poll.get_responder_value(key: responder_key): Promise<responder_value | undefined>

(method) Poll.has_responder_value(key: responder_key): Promise<boolean>
```

</TabItem>
</Tabs>

## Entry

### `add_poll`

Entry to call to propose a new poll. The poll's IPFS hash is added to the collection of hashes to approve.

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
entry add_poll(h : bytes) {
  require {
    r1 : is_not_paused()
  }
  effect {
    poll_to_approve.add({ ipfs_hash_to_approve = h });
    emit<NewPoll>({ caller; h })
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`bytes`](/docs/reference/types#bytes) [`require`](/docs/reference/declarations/entrypoint#require) [`is_not_paused`](/docs/templates/pausable#is_not_paused) [`effect`](/docs/reference/declarations/entrypoint#effect) [`add`](/docs/reference/instructions/asset#aadda) [`caller`](/docs/reference/expressions/constants#caller) [`emit`](/docs/reference/instructions/operation#emit)


</TabItem>
<TabItem value="TS Binding API">

```ts
(method) Poll.add_poll(h: Bytes, params: Partial<Parameters>): Promise<any>
```

</TabItem>

<TabItem value="Ts Test">

```ts
describe("[POLL] 'add_poll' entry", async () => {
  it("add 'Food' poll", async () => {
    const b = Bytes.hex_encode(food_hash)
    await poll.add_poll(Bytes.hex_encode(food_hash), { as: bob });
    const has_poll = await poll.has_poll_to_approve_value(b)
    assert(has_poll)
  })
  it("'add' cannot be called with same hash", async () => {
    const b = Bytes.hex_encode(food_hash)
    expect_to_fail(async () => {
      await poll.add_poll(Bytes.hex_encode(food_hash), { as: alice });
    }, error_key_exists("poll_to_approve"))
  })
  it("add 'Dancer' poll", async () => {
    const b = Bytes.hex_encode(dancer_hash)
    await poll.add_poll(b, { as: bob });
    const has_poll = await poll.has_poll_to_approve_value(b)
    assert(has_poll)
  })
  it("add 'Squares' poll", async () => {
    const b = Bytes.hex_encode(squares_hash)
    await poll.add_poll(b, { as: bob });
    const has_poll = await poll.has_poll_to_approve_value(b)
    assert(has_poll)
  })
})
```

</TabItem>

</Tabs>

<Builtin data={{
  sig: 'add_poll(h)',
  parameters: [
    {
      type: 'bytes',
      alias: 'h',
      desc: <div>Poll's IPFS hash</div>
    }
  ],
  fails: [
    {
      keyword: 'CONTRACT_PAUSED',
      desc: <div>When contract has been paused by <code>owner</code></div>
    },
    {
      keyword: '("KEY_EXISTS", "poll_to_approve")',
      desc: <div>When poll's IPFS hash <code>h</code> has already been proposed</div>
    },
  ],
  emits: [
    { keyword: 'NewPoll', link : '/docs/dapps/example/contract#newpoll' },
  ],
  related: [
    { keyword: 'poll_to_approve', link: '/docs/dapps/example/contract#poll_to_approve' },
  ]
}} />

### `respond`

Entry to call to answer a poll. It fails if:
* the poll hash is not registered
* the caller has already responded

The number of times someone has responded to the poll's answer (`choice_id`) is incremented, and the poll id is registered in the set of polls `caller` has already responded to.

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">


```archetype
entry respond(pk : nat, choice_id : nat) {
  constant {
    selection_count is poll[pk] ? (the.responses[choice_id] ? the : 0) : 0;
  }
  require {
    r2 : is_not_paused();
    r3 : poll.contains(pk) otherwise POLL_NOT_FOUND;
  }
  fail if {
    f1 : responder[caller] ? the.polls.contains(pk) : false with CANNOT_RESPOND_TWICE
  }
  effect {
    responder.add_update(caller, { polls += [pk] } );
    poll.update(pk, {
      responses += [(choice_id, selection_count + 1)]
    });
    emit<Response>({ caller; pk; choice_id })
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`nat`](/docs/reference/types#nat) [`constant`](/docs/reference/declarations/entrypoint#constant) [`require`](/docs/reference/declarations/entrypoint#require) [`is_not_paused`](/docs/templates/pausable#is_not_paused) [`contains`](/docs/reference/expressions/asset#acontainsk--asset_keya) [`fail if`](/docs/reference/declarations/entrypoint#fail-if) [`effect`](/docs/reference/declarations/entrypoint#effect) [`add_update`](/docs/reference/instructions/asset#aadd_updatek--u-) [`+=`](/docs/reference/instructions/assignment#a--b-1) [`update`](/docs/reference/instructions/asset#aupdatek--u-) [`emit`](/docs/reference/instructions/operation#emit) [`caller`](/docs/reference/expressions/constants#caller)

</TabItem>
<TabItem value="TS Binding API">

```ts
(method) Poll.respond(pk: Nat, choice_id: Nat, params: Partial<Parameters>): Promise<any>
```

</TabItem>
<TabItem value="TS Test">

```ts
describe("[POLL] 'respond' entry", async () => {
  it("respond to food poll", async () => {
    const poll_id = new Nat(0)
    const choice_id = new Nat(0)
    const polls = await poll.get_poll()
    const nb_responses_before = get_nb_responses(polls, poll_id, choice_id)
    assert(nb_responses_before.equals(new Nat(0)))
    const has_responder_before = await poll.has_responder_value(bob.get_address())
    assert(!has_responder_before)
    await poll.respond(poll_id, choice_id, { as : bob })
    const polls_after = await poll.get_poll()
    const nb_responses_after = get_nb_responses(polls_after, poll_id, choice_id)
    assert(nb_responses_after.equals(new Nat(1)))
    const has_responder_after = await poll.has_responder_value(bob.get_address())
    assert(has_responder_after)
  })
  it("responder cannot respond twice", async () => {
    const poll_id = new Nat(0)
    const choice_id = new Nat(1)
    expect_to_fail(async () => {
      await poll.respond(poll_id, choice_id, { as : bob })
    }, poll.errors.f1)
  })
  it("'respond' increment number of responses", async () => {
    const poll_id = new Nat(0)
    const choice_id = new Nat(0)
    const polls = await poll.get_poll()
    const nb_responses_before = get_nb_responses(polls, poll_id, choice_id)
    await poll.respond(poll_id, choice_id, { as : carl })
    const polls_after = await poll.get_poll()
    const nb_responses_after = get_nb_responses(polls_after, poll_id, choice_id)
    assert(nb_responses_after.equals(nb_responses_before.plus(new Nat(1))))
  })
})
```
</TabItem>

</Tabs>

<Builtin data={{
  sig: 'respond(pk, choice_id)',
  parameters: [
    {
      type: 'nat',
      alias: 'pk',
      desc: <div>Poll's primary key</div>
    },
    {
      type: 'nat',
      alias: 'choice_id',
      desc: <div>Poll's choice id selected by user</div>
    }
  ],
  fails: [
    {
      keyword: 'CONTRACT_PAUSED',
      desc: <div>When contract has been paused by <code>owner</code></div>
    },
    {
      keyword: 'POLL_NOT_FOUND',
      desc: <div>When poll's primary key <code>pk</code> is not found in <code>poll</code> asset</div>
    },
    {
      keyword: 'CANNOT_RESPOND_TWICE',
      desc: <div>When poll's primary key <code>pk</code> is found in <code>caller</code>'s set of already responded polls</div>
    },
  ],
  emits: [
    { keyword: 'Response', link : '/docs/dapps/example/contract#response' },
  ],
  related: [
    { keyword: 'poll', link: '/docs/dapps/example/contract#poll' },
    { keyword: 'responder', link: '/docs/dapps/example/contract#responder' },
  ]
}} />

### Called by `owner`

#### `approve`

Entry called by [`owner`](/docs/dapps/example/contract#owner) to approve a proposed poll:
* a new poll is added to the [`poll`](/docs/dapps/example/contract#poll) asset collection
* the proposed IPFS hash is removed from [`poll_to_approve`](/docs/dapps/example/contract#poll_to_approve)

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
entry approve(h : bytes) {
  called by owner
  constant {
    creator_ ?is poll_to_approve[h]?.poll_creator otherwise POLL_NOT_FOUND
  }
  effect {
    poll.add({ poll_pk = polls_counter; ipfs_hash = h });
    polls_counter += 1;
    poll_to_approve.remove(h);
    emit<Approve>({ creator_; h })
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`bytes`](/docs/reference/types#bytes) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`constant`](/docs/reference/declarations/entrypoint#constant) [`?is`](/docs/reference/declarations/entrypoint#constant) [`?.`](/docs/reference/expressions/controls#option) [`effect`](/docs/reference/declarations/entrypoint#effect) [`add`](/docs/reference/instructions/asset#aadda) [`+=`](/docs/reference/instructions/assignment#a--b-1) [`remove`](/docs/reference/instructions/asset#aremovek) [`emit`](/docs/reference/instructions/operation#emit)


</TabItem>
<TabItem value="TS Binding API">

```ts
(method) Poll.approve(h: Bytes, params: Partial<Parameters>): Promise<any>
```

</TabItem>
<TabItem value="TS Test">

```ts
describe("[POLL] 'approve' entry", async () => {
  it("'approve' can only be called by owner", async () => {
    expect_to_fail(async () => {
      await poll.approve(Bytes.hex_encode(food_hash), { as: bob });
    }, poll.errors.INVALID_CALLER)
  })
  it("approve 'Food' poll", async () => {
    const b = Bytes.hex_encode(food_hash)
    const polls_before = await poll.get_poll()
    assert(!exists_poll(polls_before, b))
    await poll.approve(b, { as: alice });
    const polls_after = await poll.get_poll()
    assert(exists_poll(polls_after, b))
    const has_poll = await poll.has_poll_to_approve_value(b)
    assert(!has_poll)
  })
  it("'approve' cannot be called twice with same hash", async () => {
    const b = Bytes.hex_encode(food_hash)
    expect_to_fail(async () => {
      await poll.approve(b, { as: alice });
    }, poll.errors.POLL_NOT_FOUND)
  })
  it("approve 'Dancer' poll", async () => {
    const b = Bytes.hex_encode(dancer_hash)
    const polls_before = await poll.get_poll()
    assert(!exists_poll(polls_before, b))
    await poll.approve(b, { as: alice });
    const polls_after = await poll.get_poll()
    assert(exists_poll(polls_after, b))
    const has_poll = await poll.has_poll_to_approve_value(b)
    assert(!has_poll)
  })
})
```

</TabItem>
</Tabs>

<Builtin data={{
  sig: 'approve(h)',
  parameters: [
   {
      type: 'bytes',
      alias: 'h',
      desc: <div>Poll's IPFS hash</div>
    }
  ],
  fails: [
    {
      keyword: 'POLL_NOT_FOUND',
      desc: <div>When poll's IPFS hash <code>h</code> is not found in <code>poll_to_approve</code> asset</div>
    },
  ],
  emits: [
    { keyword: 'Approve', link : '/docs/dapps/example/contract#approval' },
  ],
  related: [
    { keyword: 'poll_to_approve', link: '/docs/dapps/example/contract#poll_to_approve' },
    { keyword: 'poll', link: '/docs/dapps/example/contract#poll' },
  ]
}} />

#### `disapprove`

Entry called by [`owner`](/docs/dapps/example/contract#owner) to disapprove a proposed poll:
* the proposed IPFS hash is removed from [`poll_to_approve`](/docs/dapps/example/contract#poll_to_approve)

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
entry disapprove(h : bytes) {
  called by owner
  effect {
    poll_to_approve.remove(h)
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`bytes`](/docs/reference/types#bytes) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`effect`](/docs/reference/declarations/entrypoint#effect) [`remove`](/docs/reference/instructions/asset#aremovek)

</TabItem>
<TabItem value="TS Binding API">

```ts
(method) Poll.disapprove(h: Bytes, params: Partial<Parameters>): Promise<any>
```

</TabItem>
<TabItem value="TS Test">

```ts
describe("[POLL] 'disapprove' entry", async () => {
  it("'disapprove' can only be called by owner", async () => {
    expect_to_fail(async () => {
      await poll.disapprove(Bytes.hex_encode(squares_hash), { as: bob });
    }, poll.errors.INVALID_CALLER)
  })
  it("disapprove 'Squares' poll", async () => {
    const b = Bytes.hex_encode(squares_hash)
    const polls_before = await poll.get_poll()
    assert(!exists_poll(polls_before, b))
    await poll.disapprove(b, { as: alice });
    const polls_after = await poll.get_poll()
    assert(!exists_poll(polls_after, b))
    const has_poll = await poll.has_poll_to_approve_value(b)
    assert(!has_poll)
  })
})
```
</TabItem>

</Tabs>

<Builtin data={{
  sig: 'disapprove(h)',
  parameters: [
   {
      type: 'bytes',
      alias: 'h',
      desc: <div>Poll's IPFS hash</div>
    }
  ],
  related: [
    { keyword: 'poll_to_approve', link: '/docs/dapps/example/contract#poll_to_approve' },
  ]
}} />

#### `remove`

Entry called by [`owner`](/docs/dapps/example/contract#owner) to remove a poll.

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
entry remove(pk : nat) {
  called by owner
  effect {
    poll.remove(pk)
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`nat`](/docs/reference/types#nat) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`effect`](/docs/reference/declarations/entrypoint#effect) [`remove`](/docs/reference/instructions/asset#aremovek)

<Builtin data={{
  sig: 'remove(pk)',
  parameters: [
    {
      type: 'nat',
      alias: 'pk',
      desc: <div>Poll's primary key</div>
    },
  ],
  related: [
    { keyword: 'poll', link: '/docs/dapps/example/contract#poll' },
  ]
}} />

</TabItem>
<TabItem value="TS Binding API">

```ts
(method) Poll.remove(pk: Nat, params: Partial<Parameters>): Promise<any>
```

</TabItem>
<TabItem value="TS Test">

```ts
describe("[POLL] 'remove' entry", async () => {
  it("'remove' can only be called by owner", async () => {
    expect_to_fail(async () => {
      await poll.remove(new Nat(0), { as : bob })
    }, poll.errors.INVALID_CALLER)
  })
  it("remove food poll", async () => {
    const polls_before = await poll.get_poll()
    assert(exists_poll(polls_before, Bytes.hex_encode(food_hash)))
    await poll.remove(new Nat(0), { as : alice })
    const polls = await poll.get_poll()
    assert(!exists_poll(polls, Bytes.hex_encode(food_hash)))
  })
})
```

</TabItem>

</Tabs>

## View

### `get_responses`

Returns poll `pk` response statistics.

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
view get_responses(pk : nat) : map<nat, nat> {
  return poll[pk].responses
}
```
</TabItem>
<TabItem value="TS Binding API">

```ts
(method) Poll.view_get_responses(pk: Nat, params: Partial<Parameters>): Promise<Array<[ Nat, Nat ]>>
```

</TabItem>
</Tabs>

### `already_responded`

Returns `true` if [`source`](/docs/reference/expressions/constants#source) has already answered poll `pk`.

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
view already_responded(pk : nat) : bool {
  return (responder[source] ? the.polls.contains(pk) : false)
}
```
</TabItem>
<TabItem value="TS Binding API">

```ts
(method) Poll.view_already_responded(pk: Nat, params: Partial<Parameters>): Promise<boolean>
```

</TabItem>
</Tabs>

## Events

### `NewPoll`

Emitted by [`add_poll`](/docs/dapps/example/contract#add_poll) with:
* poll creator's address
* poll's IPFS hash

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
event NewPoll {
  creator : address;
  poll_id : bytes
}
```
[`event`](/docs/reference/declarations/compositetypes#event) [`address`](/docs/reference/types#address) [`bytes`](/docs/reference/types#bytes)

</TabItem>
<TabItem value="TS Binding API">

```ts
export class NewPoll {
  constructor(
    public creator: Address,
    public poll_id: Bytes
  )
}

(method) Poll.register_NewPoll(ep: EventProcessor<NewPoll>): void
```

</TabItem>
</Tabs>

### `Response`

Emitted by [`respond`](/docs/dapps/example/contract#respond) with:
* responder's address
* poll's id
* response's id

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
event Response {
  responder_addr : address;
  poll_id : nat;
  response : nat
}
```
[`event`](/docs/reference/declarations/compositetypes#event) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat)

</TabItem>
<TabItem value="TS Binding API">

```ts
export class Response {
  constructor(
    public responder_addr: Address,
    public poll_id: Nat,
    public response: Nat
  )
}

(method) Poll.register_Response(ep: EventProcessor<NewPoll>): void
```

</TabItem>
</Tabs>

### `Approval`

Emitted by [`approve`](/docs/dapps/example/contract#approve) with:
* proposal issuer's address
* poll's IPFS hash

<NamedDivider title="Code" width="1.5"/>

<Tabs defaultValue="Archetype" >

<TabItem value="Archetype">

```archetype
event Approval {
  creator : address;
  poll_id : bytes
}
```
[`event`](/docs/reference/declarations/compositetypes#event) [`address`](/docs/reference/types#address) [`bytes`](/docs/reference/types#bytes)

</TabItem>
<TabItem value="TS Binding API">

```ts
export class Approval {
  constructor(
    public creator: Address,
    public poll_id: Bytes
  )
}

(method) Poll.register_Response(ep: EventProcessor<NewPoll>): void
```

</TabItem>
</Tabs>

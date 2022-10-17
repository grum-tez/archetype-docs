---
sidebar_position: 0
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
  repo: 'https://github.com/completium/poll-dapp/tree/main/contracts',
  author: 'Completium',
  authorurl: 'https://completium.com/',
  norms: [
    { label : 'Metadata', url: '/docs/templates/metadata' },
    { label : 'Pausable', url: '/docs/templates/pausable' },
    { label : 'Ownership', url: '/docs/templates/ownership' },
  ]
}}/>

## Deployment

The following [Completium CLI](https://completium.com/docs/cli) command is used to deploy the contract:
```
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

```archetype
archetype poll(owner : address)
with metadata ""
```
[`archetype`](/docs/reference/declarations/contract) [`address`](/docs/reference/types#address) [`with metadata`](/docs/reference/declarations/contract#metadata)

### `poll_counter`

Number of polls added, used as poll key in [`poll`](/docs/dapps/pollexample/pollcontract#poll) asset collection (see [`approve`] entry point).

<NamedDivider title="Code" width="1.5"/>

```archetype
variable polls_counter : nat = 0
```
[`variable`](/docs/reference/declarations/storage#variable) [`nat`](/docs/reference/types#nat)

### `poll`

Collection of polls.

A poll is identified by a natural integer rather than by its IPFS hash. This is to minimize the required storage of the [`responder`](/docs/dapps/pollexample/pollcontract#responder) information, that stores which polls an user has answered.

The `responses` field stores the numbers of responses to poll's possible answers.

<NamedDivider title="Code" width="1.5"/>

```archetype
asset poll {
  poll_pk   : nat;
  ipfs_hash : bytes;
  creation  : date          = now;
  responses : map<nat, nat> = []
}
```
[`asset`](/docs/asset) [`nat`](/docs/reference/types#nat) [`bytes`](/docs/reference/types#bytes) [`date`](/docs/reference/types#date) [`now`](/docs/reference/expressions/constants#now) [`map`](/docs/reference/types#map<K,%20V>)

### `poll_to_approve`

Collection of polls' IPFS hashes proposed by users. When approved by [`owner`](/docs/dapps/pollexample/pollcontract#owner), a poll asset is created.

Note that the asset collection is created as a [`big_map`](/docs/reference/types#big_map%3CK,%20V%3E), to be able to handle an arbitrary large amount of poll proposition.

<NamedDivider title="Code" width="1.5"/>

```archetype
asset poll_to_approve to big_map {
  ipfs_hash_to_approve : bytes;
  poll_creator         : address = caller
}
```
[`asset`](/docs/asset) [`bytes`](/docs/reference/types#bytes) [`address`](/docs/reference/types#address) [`caller`](/docs/reference/expressions/constants#caller)

### `responder`

Collection of responders' lists (set) of answered polls. This is to decide whether a responder has already answered a poll or not (see `respond` entrypoint).

It is specified as a [`big_map`]((/docs/reference/types#big_map%3CK,%20V%3E)) to be able to handle an arbitrary large number of responders.

<NamedDivider title="Code" width="1.5"/>

```archetype
asset responder to big_map {
  res_addr : address;
  polls    : set<nat> = [];
}
```
[`asset`](/docs/asset) [`address`](/docs/reference/types#address) [`set`](/docs/language-basics/container#set) [`nat`](/docs/reference/types#nat)

## Entry

### `add_poll`

Entry to call to propose a new poll. The poll's IPFS hash is added to the collection of hashes to approve.

<NamedDivider title="Code" width="1.5"/>

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
    { keyword: 'NewPoll', link : '/docs/dapps/pollexample/pollcontract#newpoll' },
  ],
  related: [
    { keyword: 'poll_to_approve', link: '/docs/dapps/pollexample/pollcontract#poll_to_approve' },
  ]
}} />

### `respond`

Entry to call to answer a poll. It fails if:
* the poll hash is not registered
* the caller has already responded

The number of times someone has responded to the poll's answer (`choice_id`) is incremented, and the poll id is registered in the set of polls `caller` has already responded to.

<NamedDivider title="Code" width="1.5"/>

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
    { keyword: 'Response', link : '/docs/dapps/pollexample/pollcontract#response' },
  ],
  related: [
    { keyword: 'poll', link: '/docs/dapps/pollexample/pollcontract#poll' },
    { keyword: 'responder', link: '/docs/dapps/pollexample/pollcontract#responder' },
  ]
}} />

### Called by `owner`

#### `approve`

Entry called by [`owner`](/docs/dapps/pollexample/pollcontract#owner) to approve a proposed poll:
* a new poll is added to the [`poll`](/docs/dapps/pollexample/pollcontract#poll) asset collection
* the proposed IPFS hash is removed from [`poll_to_approve`](/docs/dapps/pollexample/pollcontract#poll_to_approve)

<NamedDivider title="Code" width="1.5"/>

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
    { keyword: 'Approve', link : '/docs/dapps/pollexample/pollcontract#approval' },
  ],
  related: [
    { keyword: 'poll_to_approve', link: '/docs/dapps/pollexample/pollcontract#poll_to_approve' },
    { keyword: 'poll', link: '/docs/dapps/pollexample/pollcontract#poll' },
  ]
}} />

#### `disapprove`

Entry called by [`owner`](/docs/dapps/pollexample/pollcontract#owner) to disapprove a proposed poll:
* the proposed IPFS hash is removed from [`poll_to_approve`](/docs/dapps/pollexample/pollcontract#poll_to_approve)

<NamedDivider title="Code" width="1.5"/>

```archetype
entry disapprove(h : bytes) {
  called by owner
  effect {
    poll_to_approve.remove(h)
  }
}
```
[`entry`](/docs/reference/declarations/entrypoint#entry) [`bytes`](/docs/reference/types#bytes) [`called by`](/docs/reference/declarations/entrypoint#called-by) [`effect`](/docs/reference/declarations/entrypoint#effect) [`remove`](/docs/reference/instructions/asset#aremovek)

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
    { keyword: 'poll_to_approve', link: '/docs/dapps/pollexample/pollcontract#poll_to_approve' },
  ]
}} />

#### `remove`

Entry called by [`owner`](/docs/dapps/pollexample/pollcontract#owner) to remove a poll.

<NamedDivider title="Code" width="1.5"/>

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
    { keyword: 'poll', link: '/docs/dapps/pollexample/pollcontract#poll' },
  ]
}} />

## Events

### `NewPoll`

Emitted by [`add_poll`](/docs/dapps/pollexample/pollcontract#add_poll) with:
* poll creator's address
* poll's IPFS hash

```archetype
event NewPoll {
  creator : address;
  poll_id : bytes
}
```
[`event`](/docs/reference/declarations/compositetypes#event) [`address`](/docs/reference/types#address) [`bytes`](/docs/reference/types#bytes)

### `Response`

Emitted by [`respond`](/docs/dapps/pollexample/pollcontract#respond) with:
* responder's address
* poll's id
* response's id

```archetype
event Response {
  responder_addr : address;
  poll_id : nat;
  response : nat
}
```
[`event`](/docs/reference/declarations/compositetypes#event) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat)

### `Approval`

Emitted by [`approve`](/docs/dapps/pollexample/pollcontract#approve) with:
* proposal issuer's address
* poll's IPFS hash

```archetype
event Approval {
  creator : address;
  poll_id : bytes
}
```
[`event`](/docs/reference/declarations/compositetypes#event) [`address`](/docs/reference/types#address) [`bytes`](/docs/reference/types#bytes)

---
sidebar_position: 2
sidebar_label: Contract Integration
---

# Contract Integration

This section presents in detail the interaction between the DApp's UI and the [poll contract](/docs/dapps/example/contract):
* how polls data are retrieved from contract?
* how entries and views are invoked?

## Retrieving poll data

The Typescript binding provides the method `get_poll` that returns the [poll](/docs/dapps/example/contract#poll) *container* as a list of pair of poll key and `poll_value`, whose type finally reduces to:

```ts
Array<[ Nat, {
  ipfs_hash : Bytes,
  responses : Array<[ Nat, Nat ]>,
  creation  : Date
}]>;
```

The binding is using types from `@completium/archtype-ts-types` package:
* `Nat` to represent Michelson's natural integer type `nat` of arbitrary precision
* `Bytes`to represent bytes values

It is convienient to:
* downcast `Nat` values to native TypeScript values typed `number`
* turn Hex-encoded IPFS hash to poll definition's fields (`utterance` and `choices`)

A dedicated type `Poll` is created to merge contract's polls data with IPFS stored poll definition:

```ts
export interface Poll {
  id        : number,
  utterance : string,
  img       : string,
  choices   : Array<string>
  creation  : Date,
  responses : Array<[ number, number]>
}
```

The `load_data` function from [`Polls.tsx`](/docs/dapps/example/apis#store):
1. loads data from contract
2. maps each poll data to the `Poll` Typescript

```ts
const loadData = async () => {
  const poll_data = await contract.get_poll()
  const polls     = await Promise.all(poll_data.map(async ([poll_id, poll_value]) => {
    const url = ipfs + poll_value.ipfs_hash.hex_decode()
    const res = await fetch(url)
    const ui : UIPoll = await res.json()
    return {
      id        : poll_id.to_number(),
      utterance : ui.utterance,
      img       : ui.img,
      choices   : ui.choices,
      creation  : poll_value.creation,
      responses : poll_value.responses.map(x => [ x[0].to_number(), x[1].to_number() ])
    }
  }))
  setPolls(polls.sort((p1,p2) => p1.creation.getTime() - p2.creation.getTime()))
}
```
Comments:
* `contrat` object has been locally obtained with hook `useContract` from [`PollContract.tsx`](/docs/dapps/example/apis#store)
* async method `get_poll` is used to retrieve poll container
* `Nat`'s `to_number` method is used to downcast to native type `number`
* `Bytes`'s `hex_decode` method is used to decode the IPFS hash
* polls are sorted by creation date to present more recent polls first

## Invoking `respond` entry

`RespondPoll` UI component displays the `SUBMIT` button that calls contract's `respond` entry point.

The code that handles the click button event is:
```ts
const respond = async () => {
  try {
    if (choice !== undefined) {
      await contract.respond(new Nat(selected), new Nat(choice), {})
    }
  } catch(e) {
    console.log(e)
  }
}
```

```tsx
<Button onClick={respond}>submit</Button>
```

Comments:
* `contract` object has been locally obtained with hook `useContract` from [`PollContract.tsx`](/docs/dapps/example/apis#store)
* poll identifier `selected` and answer identifier `choice` are upcasted to `Nat` type as specified by contract's entry [`respond`](/docs/dapps/example/contract#respond)
* last argument `{}` of `respond` method is the call's optional parameters (typically the amount of tez to send the contract)

## Invoking `add_poll` entry

`AddPoll` UI component displays the `SUBMIT` button that calls contract's `add_poll` entry point.

The code that handles the click button event is:
```ts
const add_poll = async () => {
  try {
    await contract.add_poll(Bytes.hex_encode(uri), {})
  } catch (e) {
    console.log(e)
  }
}
```

```tsx
<Button onClick={add_poll}>submit</Button>
```

* `contract` object has been locally obtained with hook `useContract` from [`PollContract.tsx`](/docs/dapps/example/apis#store)
* poll's definition IPFS hash is converted to bytes with `Bytes` utility method `hex_encode`, as specified by the contract's entry [`add_poll`](/docs/dapps/example/contract#add_poll)
* last argument `{}` of `respond` method is the call's optional parameters (typically the amount of tez to send the contract)

## Invoking `already_responded` view

When loaded, `RespondPoll` UI component checks whether wallet address has already responded to the poll by invoking [`already_responded`](/docs/dapps/example/contract#already_responded) view. If so, poll statistics are displayed:

```tsx
const RespondPoll = () => {
  useEffect(() => {
    const responded = await contract.view_already_responded(
      new Nat(poll.id),
      { as : new Address(wallet_address) }
    )
    if (responded) {
      await loadResponses(poll.id)
    }
  }, [])
}
```
Comments:
* [`useEffect`](https://reactjs.org/docs/hooks-effect.html) React hook is invoked after UI component is loaded
* `contract` object has been locally obtained with hook `useContract` from [`PollContract.tsx`](/docs/dapps/example/apis#store)
* call parameter provides the `as` field to set the [`source`](/docs/reference/expressions/constants#source) value used by the view

## Listening to events

The poll contracts emits [events](/docs/dapps/example/contract#events) on poll addition/approval and when a response is submitted. When an event is emitted, the DApp notifies the user with a snack message and a notification appears in the events' panel.

Contract's binding offers methods to register event's handlers. An event handler is a function called when an event is emitted, and that takes this new event as argument. It takes a second optional argument that provides blockchain-related information:
* emitter contract address
* block hash
* operation hash
* operation timestamp
* event name

Event handlers are registered in the `useEffect` hook of constate `Events` component:
```tsx
useEffect(() => {
  const startListener = async () => {
    contract.register_Response(async (e : Response, d ?: EventData) => {
      setAlertMsg(make_response_msg(e))
      setAlerOpen(true)
      await loadResponses(e.poll_id.to_big_number().toNumber())
      if (d) addEvent(d)
    })
    contract.register_NewPoll((np : NewPoll, d ?: EventData) => {
      setAlertMsg(make_new_poll_msg(np))
      setAlerOpen(true)
      if (d) addEvent(d)
    })
    contract.register_ApprovePoll((ap : ApprovePoll, d ?: EventData) => {
      setAlertMsg(make_poll_confirmed_msg(ap))
      setAlerOpen(true)
      if (d) addEvent(d)
    })
    await run_listener({
      endpoint: endpoint,
      verbose: false,
      horizon: 0
    })
  };
  startListener()
}, [])
```
Comments:
* `register_Response`, `register_NewPoll` and `register_Approve` are binder's event handler registration methods
* `run_listener` is the function to start the event listener process (provided by [`@completium/event-listener`](https://www.npmjs.com/package/@completium/event-listener) package)


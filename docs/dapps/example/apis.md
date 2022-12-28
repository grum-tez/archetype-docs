---
sidebar_position: 3
sidebar_label: APIs
---
import Api from '../../../src/components/Api.js';

# APIs

## Store

<Api title="Settings.tsx" data={[
  { label: 'useTheme', desc: <div>Theme mode (<code>Light</code> or <code>Dark</code>)</div> },
  { label: 'useEndpoint', desc: 'Tezos endpoint URL' },
  { label: 'useContractAddress', desc: <div>Poll contract address (<code>KT1...</code>)</div> },
  { label: 'useNetwork', desc: <div>Network (for ex. <code>Ghostnet</code>) for Beacon to use</div> },
  { label: 'useIPFSBrowser', desc: 'IPFS endpoint URL'},
  { label: 'useGitRepo', desc: 'Code repository URL'},
  { label: 'useSetTheme', desc: <div>Theme setter</div>},
]} />
<br/>
<Api title="Taquito.tsx" data={[
  { label: 'useTezosToolkit', desc: <div>Taquito's Tezos Toolkit</div> },
]} />
<br/>
<Api title="Beacon.tsx" data={[
  { label: 'useWalletAddress', desc: <div>Wallet address (or <code>undefined</code> if not logged in)</div> },
  { label: 'useWalletName', desc: <div>Wallet name (or <code>undefined</code> if not logged in)</div> },
  { label: 'useIsConnected', desc: <div>Function that returns <code>true</code> if user is logged in, <code>false</code> otherwise</div> },
  { label: 'useConnect', desc: <div>Beacon's connect service</div> },
  { label: 'useDisconnect', desc: <div>Beacon's disconnect service</div> },
]} />
<br />
<Api title="Contract.tsx" data={[
  { label: 'useContract', desc: <div>Returns contract binder</div> },
]} />
<br />
<Api title="Polls.tsx" data={[
  { label: 'usePolls', desc: <div>List of polls</div> },
  { label: 'useLoadData', desc: <div>Function to fetch polls' data from contract</div> },
  { label: 'useLoadResponses', desc: <div>Function to fetch polls' responses from contract via the <code>get_responses</code> view</div> },
]} />
<br />
<Api title="Alerts.tsx" data={[
  { label: 'useAlertOpen', desc: <div>Alert state (open/close) otherwise</div> },
  { label: 'useAlertMsg', desc: <div>Alert message to display</div> },
  { label: 'useAlertSetOpen', desc: <div>Function to set alert state</div> },
  { label: 'useAlertSetMsg', desc: <div>Function to set alert message</div> },
]} />
<br />
<Api title="Events.tsx" data={[
  { label: 'useEvents', desc: <div>List of events</div> },
  { label: 'useNbNewEvents', desc: <div>Number of new events</div> },
  { label: 'useAddEvent', desc: <div>Function to add a new event to the notification menu</div> },
  { label: 'useClearEvents', desc: <div>Function to remove all events</div> },
]} />
<br />

## UI hierarchy

<div style={{ lineHeight : '20px', fontFamily: 'Roboto Mono' }}>

.<br/>
└── App<br/>
    &ensp;&ensp;&ensp;&ensp;└── DApp<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── *Router*<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;├── AddPage<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;│   &ensp;&ensp;├── AddForm<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;│   &ensp;&ensp;└── PollPreview<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;│   &ensp;&ensp;    &ensp;&ensp;&ensp;└── PollPanel<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;├── PickPage<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;│   &ensp;&ensp;└── [PollCard]<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;└── PollPage<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;    &ensp;&ensp;&ensp;└── PollPanel<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;│   &ensp;&ensp;    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    └── [ChoicePanel]<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;└── TopBar<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── EventNotifications<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;│   &ensp;&ensp;├── [EventCard]<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;│   &ensp;&ensp;└── NotificationMenu<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── GitHubLink<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── LoginButton<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;│   &ensp;&ensp;└── WalletInfo<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;├── TezosIcon<br/>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;    &ensp;&ensp;&ensp;└── ThemeSwitch<br/>
</div>

## Contract's binding

Interacting with the [poll contract](/docs/dapps/example/contract) is done via the generated bindings.

The following [Completium CLI](https://completium.com/docs/cli/) command generates the contract bindings:
```completium
completium-cli generate binding-dapp-ts ./poll_contract/contracts/poll.arl > ./src/binding/poll.ts
```

The following mockup code presents the generated `Poll` TypeScript API:

```ts
class Poll {
  /*
    Contract address is passed to the constructor
  */
  constructor Poll(address?: string | undefined): Poll
  // utils
  get_address(): Address
  get_balance(): Promise<Tez>
  /*
    Entries from Ownership template
  */
  declare_ownership(candidate: Address, params: Partial<Parameters>): Promise<any>
  claim_ownership(params: Partial<Parameters>): Promise<any>
  /*
    Entries from Pausable template
  */
  pause(params: Partial<Parameters>): Promise<any>
  unpause(params: Partial<Parameters>): Promise<any>
  /*
    Entries from Metadata template
  */
  set_metadata(k: string, d: Option<Bytes>, params: Partial<Parameters>): Promise<any>
  /*
    Poll specific entries
  */
  add_poll(h: Bytes, params: Partial<Parameters>): Promise<any>
  approve(h: Bytes, params: Partial<Parameters>): Promise<any>
  disapprove(h: Bytes, params: Partial<Parameters>): Promise<any>
  remove(pk: Nat, params: Partial<Parameters>): Promise<any>
  respond(pk: Nat, choice_id: Nat, params: Partial<Parameters>): Promise<any>
  /*
    Entries' CallParameter makers for batch operations
  */
  get_declare_ownership_param(candidate: Address, params: Partial<Parameters>): Promise<CallParameter>
  get_claim_ownership_param(params: Partial<Parameters>): Promise<CallParameter>
  get_pause_param(params: Partial<Parameters>): Promise<CallParameter>
  get_unpause_param(params: Partial<Parameters>): Promise<CallParameter>
  get_set_metadata_param(k: string, d: Option<Bytes>, params: Partial<Parameters>): Promise<CallParameter>
  get_add_poll_param(h: Bytes, params: Partial<Parameters>): Promise<CallParameter>
  get_approve_param(h: Bytes, params: Partial<Parameters>): Promise<CallParameter>
  get_disapprove_param(h: Bytes, params: Partial<Parameters>): Promise<CallParameter>
  get_remove_param(pk: Nat, params: Partial<Parameters>): Promise<CallParameter>
  get_respond_param(pk: Nat, choice_id: Nat, params: Partial<Parameters>): Promise<CallParameter>
  /*
    Views
  */
  view_get_responses(pk: Nat, params: Partial<Parameters>): Promise<Array<[ Nat, Nat ]>>
  view_already_responded(pk: Nat, params: Partial<Parameters>): Promise<boolean>
  /*
    Storage elements getters
  */
  get_owner(): Promise<Address>
  get_owner_candidate(): Promise<Option<Address>>
  get_paused(): Promise<boolean>
  get_polls_counter(): Promise<Nat>
  get_poll(): Promise<poll_container>
  get_poll_to_approve_value(key: poll_to_approve_key): Promise<poll_to_approve_value | undefined>
  has_poll_to_approve_value(key: poll_to_approve_key): Promise<boolean>
  get_responder_value(key: responder_key): Promise<responder_value | undefined>
  has_responder_value(key: responder_key): Promise<boolean>
  get_metadata_value(key: string): Promise<Bytes | undefined>
  has_metadata_value(key: string): Promise<boolean>
  register_Response(ep: el.EventProcessor<Response>): void
  /*
    Event register utils
  */
  register_NewPoll(ep: el.EventProcessor<NewPoll>): void
  register_ApprovePoll(ep: el.EventProcessor<ApprovePoll>): void
  /*
    Errors
  */
  (property) Poll.errors: {
    f1: Micheline;
    r3: Micheline;
    r2: Micheline;
    INVALID_CALLER: Micheline;
    POLL_NOT_FOUND: Micheline;
    r1: Micheline;
    md_r1: Micheline;
    pausable_r2: Micheline;
    pausable_r1: Micheline;
    ownership_r1: Micheline;
    CONTRACT_PAUSED: Micheline;
  }
}
```


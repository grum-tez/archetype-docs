import DAppInfo from '@site/src/components/DAppInfo.js';

# Poll DApp

This section presents the [*Poll DApp*](https://completium.github.io/poll-dapp/) example: users can create and answer polls. An account can only answer a poll once.

Poll definitions (question, image and possible answers) are stored on IPFS. The list of polls and user's answers are stored in a smart contract.

The DApp uses the [MUI](https://mui.com/) UI widget library.

<DAppInfo data={{
  url : "https://completium.github.io/poll-dapp/",
  contract_url : "https://better-call.dev/ghostnet/KT1FcUNmyZ255yyfqWL3GC1AGqSY2vKqYwEg/operations",
  contract : "KT1FcUNmyZ255yyfqWL3GC1AGqSY2vKqYwEg",
  repo : "https://github.com/completium/poll-dapp",
}} />

## Login

Click the topbar `LOGIN` button to connect to a wallet; select a wallet you want to connect to (Temple, Kukai, Umami, ...).

Once logged in, the login button is replaced by a panel with basic information:
* User address (`tz1...` or `tz2...`)
* Name of the wallet connected to
* Network (*Ghostnet* in this example)
* Balance
* Endpoint (the Tezos endpoint the DApp using)
* a `LOGOUT` button to disconnet from wallet

## Answer a poll

Steps to answer a poll:
1. click on a poll in the DApp's [main panel](https://completium.github.io/poll-dapp)
2. click on one of the possible answers
3. click the `SUBMIT` button; it is then required to connect to a wallet (if not already logged in) and validate the transaction to the contract

Once the transaction is validated on the blockchain, the statistic of the poll (number of answers per possible answer) is displayed.

## Event notifications

User is notified when another user either creates a new poll or answers a poll:
* a message is displayed at the bottom of the screen for a few seconds
* the detailed event information is added to the *notification center*

## Create a poll

A poll is specified with a JSON file that defines the following fields:
* `utterance`: the question asked by the poll (for example "What is your favorite food?")
* `img`: a *public* URL to illustrate the question
* `choices`: a list of choices

For example, below is the "What is your favorite food?" poll definition:
```json
{
  "utterance" : "What is your favorite food?",
  "img" : "https://1.bp.blogspot.com/-WOrNura8t1g/W6ufizUlixI/AAAAAAAAA38/X05agj6atWcxyyaRgOl07jMeaZnuF7JwgCLcBGAs/w1200-h630-p-k-no-nu/World-Food-Day.jpg",
  "choices" : [ "Pizza", "Burger", "Sushi", "Tacos", "Croissant" ]
}
```

The poll JSON file must be then uploaded to IPFS. The online [IPFS Browser](https://permanentupload.com/) may be used for that. Once uploaded, the data is identified by a unique hash value.

For example, the hash of the above poll definition is `QmZ8GxAwPvVDEtGxyUmfbB1dtmrdDR6tmMv9HUATaippqU`

Steps to add a poll:
1. click on the `ADD POLL` button in the DApp's [main panel](https://completium.github.io/poll-dapp)
2. paste the hash value in the *IPFS hash* field; the poll is then displayed for validation
3. click the `SUBMIT` button; it is then required to connect to a wallet (if not already logged in) and validate the transaction to the contract.

Once submitted, the contract's owner (`tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P`) needs to validate the poll for it to appear in the main panel.

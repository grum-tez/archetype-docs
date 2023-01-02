---
sidebar_position: 1
sidebar_label: Account
---
import Link from '@docusaurus/Link';

# Account

Interacting with a contract requires a Tezos account to sign the transactions. An account is identified by an account address, usually starting with `tz1`, like for example `tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P`.

`completium-cli` provides a convenient account management system to register, list and switch account. Each account is associated with an alias.

### `import faucet`

When working with the test network, you need *fake* currencies to interact and test the contracts. There exists a [faucet](https://teztnets.xyz/ghostnet-faucet) from which you can download a faucet file to generate a test account from.

Once the faucet file (a `.json` file) downloaded, the following command generates the account from it:

```completium
completium-cli import faucet <FAUCET_FILE> as <ACCOUNT_ALIAS>
```

### `import privatekey`

```completium
completium-cli import privatekey <PRIVATE_KEY> as <ACCOUNT_ALIAS>
```

### `generate account`

```completium
completium-cli generate account as <ACCOUNT_ALIAS> [--force]
```

### `show account`

The following command displays the account `$completium-cli` is currently using:

```completium
completium-cli show account
```

### `switch account`

```completium
completium-cli switch account
```

### `set account`

```completium
completium-cli set account <ACCOUNT_ALIAS>
```

### `transfer`

The following command transfers tez from one account to another:

```completium
completium-cli transfer <AMOUNT>(tz|utz) from <ACCOUNT_ALIAS> to <ACCOUNT_ALIAS|ACCOUNT_ADDRESS>
```

For example:

```completium
$ completium-cli transfer 5.2tz from bob to alice
```

### `remove account`

```completium
completium-cli remove account <ACCOUNT_ALIAS>
```
---
sidebar_position: 1
sidebar_label: Account
---
import Link from '@docusaurus/Link';

# Account

Interacting with a contract requires a Tezos account to sign the transactions. An account is identified by an account address, usually starting with `tz1`, like for example `tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P`.

`completium-cli` provides a convenient account management system to register, list and switch account. Each account is associated with an alias.`

### `generate account`

The `generate account` command creates a new account:

```completium
completium-cli generate account as <ACCOUNT_ALIAS> [--force]
```

For example:
```completium
$ completium-cli generate account as john
Account tz1ciEuzRw5GnwXjNGXbdZTf8QxiRDBqUYp1 is registered as 'john'.
```

In order to use an account on the test and ghost networks, it is required to fund the account with the Tezos [faucet](https://faucet.ghostnet.teztnets.xyz/).

### `import privatekey`

The `import privatekey` command imports an existing account:

```completium
completium-cli import privatekey <PRIVATE_KEY> as <ACCOUNT_ALIAS>
```

For example:
```completium
completium-cli import privatekey edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq as alice
```

In the [Temple wallet](https://templewallet.com/), it is possible to display the private key of an account by selecting "Reveal Private Key" in the "Settings" menu.

### `show account`

The following command displays the account `$completium-cli` is currently using:

```completium
completium-cli show account
```

Use `--with-private-key` to display the private key:
```completium
$ completium-cli show account --with-private-key --alias alice
Current account:        alice
Public  key hash:       tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb
Public  key:            edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn
Private key:            edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq
Balance on ghost:       4877.573685 ꜩ
```

### `switch account`

The `switch account` command opens a menu that displays registered accounts to select from:

```completium
completium-cli switch account
```

For example:
```completium
$ completium-cli switch account
Current account: alice
? Switch account …
❯ alice                             tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb
  bob                               tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6
  carl                              tz1aGDrJ58LbcnD47CkwSk3myfTxJxipYJyk
  bootstrap1                        tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx
  bootstrap2                        tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN
  bootstrap3                        tz1faswCTDciRzE4oJ9jn2Vm2dvjeyA9fUzU
  bootstrap4                        tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv
  bootstrap5                        tz1ddb9NMYHZi5UzPdzTZMYQQZoMub195zgv
```

Use keys up/down and enter to select current account.

### `set account`

The following command sets the current account from its alias:

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

The following command removes an account:
```completium
completium-cli remove account <ACCOUNT_ALIAS>
```
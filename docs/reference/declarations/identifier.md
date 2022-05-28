---
sidebar_position: 0
---
import { Grid } from '@mui/material';
import { keywords } from '../keywords.js'

# Identifier

The identifier of a contract element ([parameter](/docs/reference/declarations/storage#parameter), [variable](/docs/reference/declarations/storage#variable), [entrypoint](/docs/reference/declarations/entrypoint), ...) is a string that starts with an alphabetic character (lower or upper case) followed by a string of alphanumeric characters (lower or upper case) or underscores. The maximum size of an identifier is 254. That is to say that an identifier verifies the following regular expression:

`([A-Za-z][A-Za-z0-9_]*){1,254}`

### Keywords

A keyword is a reserved identifier that cannot be used as identifier, unless it is prefixed by the `%` character.

For example, [`transfer`](/docs/reference/instructions/operation#transfer) is the builtin instruction to call an external contract; in order to declare an entrypoint named `transfer`, prefix it with `%`:

```archetype
entry %transfer() {
  /* ... */
}
```

Below is the list of the language keywords.

<Grid container spacing={2}>
{ keywords.map((k,i) => {
    return <Grid item key={'kw'+i}><code>{k.id}</code></Grid>
}) }
</Grid>

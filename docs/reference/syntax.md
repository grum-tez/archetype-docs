---
sidebar_position: 1
---

# Syntax

import { Grid } from '@mui/material';
import { keywords } from './keywords.js'

## Sequence of instructions

begin end

( )

;

## Keyword as identifier
  %

<Grid container spacing={2}>
{ keywords.map((k,i) => {
    return <Grid item key={'kw'+i}><code>{k.id}</code></Grid>
}) }
</Grid>

## Assignment

`:=`

`+=`

`-=`

`*=`

`/=`

`&=`

`|=`


## Control

if then

if then else

match with end

for ( in ) do done

while do done

iter i from to do done

## Blockchain instructions

transfer

emit
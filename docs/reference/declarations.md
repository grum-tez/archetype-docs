---
sidebar_position: 0
---

# Declarations

import { Grid } from '@mui/material';
import { keywords } from './keywords.js'

## Identifier

`[A-Za-z][A-Za-z0-9_]*`

### Keywords
 %

<Grid container spacing={2}>
{ keywords.map((k,i) => {
    return <Grid item key={'kw'+i}><code>{k.id}</code></Grid>
}) }
</Grid>


## Storage

variable

asset

## Types

record

enum

states

event

## Inlined

constant

## Entrypoints

entry

transition from [to when {} with effect {}]+

getter

### Sections

refuse transfer

sourced by

called by

state is

require

failif

specification

effect

## Functions

function

## Views

view




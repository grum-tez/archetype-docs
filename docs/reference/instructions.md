---
sidebar_position: 2.5
---

# Instructions

import Builtin from '@site/src/components/Builtin.js';
import { assetinstructions } from './assetinstructions.js';


An instruction has a side effect on the storage, the operations or the execution (fail).

## Sequence

begin end

( )

;

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

## Divergent

fail

dorequire

dofailif

## Containers

### Set
add

remove

### List
prepend

reverse

concat

### Map
put

remove

update

## Assets

### `A.add(a)`

<Builtin data={assetinstructions['add']} />

### `A.update(k, { u })`

<Builtin data={assetinstructions['update']} />

addupdate

remove

removeif

removeall

clear


## Blockchain

transfer

emit
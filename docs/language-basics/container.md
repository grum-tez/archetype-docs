---
sidebar_position: 11
---
import { list } from './list.js';
import { map } from './map.js';
import { set } from './set.js';
import Api from '../../src/components/Api.js';

# Basic containers

## Set

A [set](/docs/reference/types#set<T>) is a container of elements, where an element can only be contained once.

<Api title="Instructions" data={set.instructions} />
<br/>
<Api title="Expressions" data={set.builtins} />
<br/>

## List

A [list](/docs/reference/types#list<T>) is a container of elements, where elements are in the order they are added.

<Api title="Instructions" data={list.instructions} />
<br/>
<Api title="Expressions" data={list.builtins} />
<br/>

## Map

A map associates one key to one value.

Besides basic [`map`](/docs/reference/types#map<K,%20V>) there are two other maps type:
* [`big_map`](/docs/reference/types#big_map<K,%20V>) to store large collections of non iterable key-value pairs
* [`iterable_big_map`](/docs/reference/types#iterable_big_map<K,%20V>) for a large *iterable* collection of key-value pairs

Below is the list of map-related instructions and operators.

Note that `for` instruction and `length` builtin are **not** available for [`big_map`](/docs/reference/types#big_map<K,%20V>) type.

<Api title="Instructions" data={map.instructions} />
<br/>
<Api title="Expressions" data={map.builtins} />
<br/>
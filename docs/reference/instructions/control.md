---
sidebar_position: 3
---

# Control

## `if`

The conditional branching instruction `if e then i` executes instruction `i` if the [bool](/docs/reference/types#bool) expression `e` is `true`.

For example, *instr1* is executed if *expr1* is `true`:
```archetype
if expr1 then
  instr1
```

The instruction to execute when expression *expr1* is `false` follows the `else` keyword:
```archetype
if expr1 then
  instr1
else
  instr2
```

A [sequence](/docs/reference/instructions#sequence) of instructions is delimited by `begin ... end` and  instructions are separated by `;`:
```archetype
if expr1 then begin
  instr1;
  instr2
end else begin
  instr3;
  instr4
end
```

A dangling `else` is attached to the *last* `if`. For example in the following expression, the `else` branch is attached to `if b = 1 then a := 42` instruction:
```archetype
if a = 1 then
  if b = 1 then
    a := 42
else
  b := 42
```

That is that it is equivalent to:
```archetype
/* 'begin end' is optional here, it is to emphasis the logical structure */
if a = 1 then begin
  if b = 1 then
    a := 42
  else
    b := 42
end
```

Note that there is no need for parenthesis in the bool expression; for example:
```archetype
var max : nat = 0;
if a < b then
  max := b
else
  max := a
```

A conditional [`if`](/docs/reference/expressions/controls#if) *expression* is also available.

## `match with`

The `match with` instruction, inspired by the [Ocaml](https://ocaml.org/) language, desconstructs an *enumerated* type to retreive data from it. Enumerated types are [`option`](/docs/reference/types#option<T>), [`or`](/docs/reference/types#or<T1,%20T2>), [`list`](/docs/reference/types#list<T>), [`states`](/docs/reference/declarations#states) and composite type [`enum`](/docs/reference/types#enum).

Its generic syntactic structure is presented below, given that *E1* ... *En* are the named values of the enumerated type of *expr1*:
```archetype
match expr1 with
| E1 -> instr1 /* instruction when expr1 is E1 */
| E2 -> instr2 /* instruction when expr1 is E2 */
/* ... */
| En -> instrn /* instruction when expr1 is En */
end
```
If one named type *Ei* is missing, the compiler fails with the message:
```
Partial match (missing "Ei")
```

It is possible to escape the enumeration with the `_` keyword; for example:
```archetype
match expr1 with
| E1 -> instr1
| E2 -> instr2
| _  -> instr3  /* instruction when expr1 is E3 or E4 ... or En */
end
```

### `option`

An [`option`](/docs/reference/types#option<T>) value has two named values: `some` and `none`.

For example, suppose `opt` is typed `option<string>`:
```archetype
match opt with
| some(s) -> instr1 /* declares constant 's' typed 'string' in instr1 */
| none    -> instr2
end
```

### `or`

An [`or`](/docs/reference/types#or<T1,%20T2>) value has two named values: `left` and `right`.

For example, suppose `o` is typed `or<string, nat>`:
```archetype
match o with
| left(s)  -> instr1 /* declares constant 's' typed 'string' in instr1 */
| right(n) -> instr2 /* declares constant 'n' typed 'nat' in instr2    */
end
```

### `list`

A [`list`](/docs/reference/types#list<T>) value has two named values: `[]` for empty list and `::` for recursive composition.

For example, suppose `l` is typed `list<bytes>`:
```archetype
match l with
| h::tl -> instr1 /* declares constants h typed 'bytes' and tl typed 'list<bytes' */
| []    -> instr2 /* when l is empty */
end
```

In the example above, `h` is the first element of the list `l`, and `tl` is the list `l` without the first element.

Note that Archetype does not support recursive calls, hence the `match` instruction cannot be used to fold a list as in Ocaml; it is rather used to retrieve the first element of a list and manage the case of an empty list. The [`for`](/docs/reference/instructions#for) instruction is used to iterate over list elements.

### `states`

Contract's [`states`](/docs/reference/declarations#states) may be interrogated with the `match` instruction.

Consider the states declaration:
```archetype
states =
| Pending initial
| Shipped
| Accepted
| Canceled
```

The following enables acting based on contract's state:
```archetype
match state with
| Pending  -> instr1 /* when in Pending  state */
| Shipped  -> instr2 /* when in Shipped  state */
| Accepted -> instr3 /* when in Accepted state */
| Canceled -> instr4 /* when in Canceled state */
end;
```

### `enum`

An [`enum`](/docs/reference/types#enum) value has a user-defined list of values.

Consider the following declaration:
```archetype
enum color =
| RGB<nat * nat * nat>
| Hex<bytes>
| Css<string>
```

The following enables acting based on `color`'s values:
```archetype
match color with
| RGB(rgb) -> instr1 /* declares 'rgb' as a tuple of 3 values typed 'nat' in instr1 */
| Hex(h)   -> instr2 /* declares 'h' as a bytes value in instr2                     */
| Css(css) -> instr3 /* declares 'css' as a string value in instr3                  */
end
```

## `for`

The `for` instruction iterates the elements of a *container* ([`set`](/docs/reference/types#set<T>), [`list`](/docs/reference/types#list<T>), [`map`](/docs/reference/types#map<K,%20V>) and [`asset`](/docs/asset)).

The generic syntax structure is presented below, given `c` is a container:
```archetype
for e in c do
  instr1      /* declares constant element 'e' in instr1 */
done
```

The type of element `e` above depends on the type of the container. See below for more information.

Note that it is *not* possible to break an iteration. See the [`fold`](/docs/reference/expressions/builtins#fold%20(i%20:%20or<L,%20R>,%20id%20->%20(body(id%20:%20L)%20:%20or<L,%20R>))) builtin for an iteration process with a possiblity to break.

### `set`

Elements of a [`set`](/docs/reference/types#set<T>) are iterated in the element's type natural order.

For example, suppose set `s` is typed `set<string>`:
```archetype
for e in s do
  instr1 /* constant e is typed 'string' and is an element of s */
done
```

### `list`

Elements of a [`list`](/docs/reference/types#list<T>) are iterated in the order of the list's construction process. See [`prepend`](/docs/reference/instructions#lprepende) and [`concat`](/docs/reference/instructions#lconcatl) instructions.

For example, suppose list `l` is typed `list<nat>`:
```archetype
for e in l do
  instr1 /* constant 'e' is typed `nat` */
done
```

### `map`

Elements of a [`map`](/docs/reference/types#map<K,%20V>) are iterated in the natural order of the key.

For example, suppose map `m` is typed `map<string, bytes>`:
```archetype
for (k, v) in m do
  instr1
end
```
In the example above:
* `k` is a key of the map typed `string`
* `v` is the associated value typed `bytes`

### `asset`

Elements of a [`asset`](/docs/asset) are iterated in the natural order of the asset identifier.

Consider the following `visitor` asset declaration identified by `login` field:
```archetype
asset visitor identified by login {
  login    : address;
  fullname : string;
  nbvisits : nat = 0
}
```

The following iterates on the `visitor` asset collection:
```archetype
for log in visitor do
  instr1 /* 'log' is the visitor 'login' typed 'address' */
done
```

Since `log` is the iterated visitor's login, visitor data is accessed with [`[]`](/docs/reference/expressions/asset#ak--asset_keyaf) operator, like for example:

```archetype
var nbv = visitor[log].nbvisits
```

## `while`

The `while` instruction executes an instruction as long as a condition holds true.

The generic syntax is:
```archetype
while expr1 do
  instr1
done
```

where *expr1* is a [`bool`](/docs/reference/types#bool) typed expression.

For example:
```archetype
var i = 0;
while i < 20 do
  instr1;
  i += 1
done
```

:::danger
There is no guarantee that the iteration terminates. In such a case the entrypoint fails with a `gas exceeded` error.
:::

## `iter`

The `iter` instruction iterates over a integer value in a specified range. The generic syntax is:
```archetype
iter i from expr1 to expr2 do
  instr1 /* declares an integer constant 'i' between expr1 and expr2 included */
done
```

In the instruction above, *expr1* and *expr2* are expressions typed [`int`](/docs/reference/types#nat). It does not iterate if *expr1* is greater than *expr2*.

The initial `from` value may be omitted, it is then defaulted to `1`:
```archetype
iter i to expr2 do
  instr1 /* declares an integer constant 'i' between 1 and expr2 included */
done
```

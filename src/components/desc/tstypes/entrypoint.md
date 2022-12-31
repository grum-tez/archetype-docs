Class for entry point value that corresponds to Archetype/Michelson type [`contract`](/docs/reference/types#contract). Its constructor takes the contract's [`Address`](/docs/tests/apis/types#address) value and the entry point name as `string`.

For example:
```ts
const e = new Entrpoint(new Address("KT1QJSgFHZYsP8V8snXKmoKTqq2dDfTE626p"), "exec")
```
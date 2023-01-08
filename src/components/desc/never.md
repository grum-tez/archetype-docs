Empty type.

For example, it is used to prevent from using specific value in `or` or `option` literals:

```archetype
variable res : or<never, nat> = right<never>(1)
```
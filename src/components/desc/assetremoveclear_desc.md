Removes all references and referenced assets from an [aggregate](/docs/reference/types#aggregate<A>) field.

For example, the following instruction removes all `vehicle` assets referenced by driver `caller` :
```archetype
driver[caller].drives.remove_clear()
```

The effect of the above instruction is to:
* remove all `vehicle` assets referenced by driver `caller`
* remove all reference so that `driver[caller].drives.count() = 0` stands true afterwards

It is equivalent to the following instructions:
```archetype
driver[caller].drives.select(true).clear();
driver[caller].drives.clear();
```
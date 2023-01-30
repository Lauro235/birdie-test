# TypeScript Notes

## feed events object into createLabelArray(obj: object)

Error encountered =>
Argument of type 'string | undefined' is not assignable to parameter of type 'object'.
Type 'undefined' is not assignable to type 'object'.ts(2345)

It's important to understand what an index signature is. These tell TypeScript what kinds of keys/values to expect and can probably be used in other ways to.

[Information on index signatures](https://dmitripavlutin.com/typescript-index-signatures/)

[How to create empty to typed object in useState](https://bobbyhadz.com/blog/react-type-usestate-object#type-usestate-with-empty-object-initial-value-in-react-ts)

## Union vs Intersection parameter types

[Helpful Post](https://stackoverflow.com/a/58632009/15592981)

The union demarcation '|' is almost always completely useless in declaring functional parameter types (not really sure about this? frustrated enough to say it though). Instead you want to use the intersection symbol '&' which will allow for multiple types to be fed into a single function making it more flexible, but still strongly typed.

```js
Type 'string | number' is not assignable to type 'number'.
            Type 'string' is not assignable to type 'number'.  TS2345
```

If you see a message like this, it's simple to understand that string !== string | number, but what caught me out is that although 'string | number' translates mentally to 'string or number', here it simply indicates the types the parameter could be, it doesn't tell TypeScript to accept both of them. Because it cannot be certain what type the parameter will be it refuses to call the parameter regardless of what type it is.

[Microsoft on Covariance and Contravariance](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/)

Covariance preserves assignment compatibility and contravariance reverses it.

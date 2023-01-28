# TypeScript Notes

## feed events object into createLabelArray(obj: object)

Error encountered => 
Argument of type 'string | undefined' is not assignable to parameter of type 'object'.
  Type 'undefined' is not assignable to type 'object'.ts(2345)

It's important to understand what an index signature is. These tell TypeScript what kinds of keys/values to expect and can probably be used in other ways to.

[Information on index signatures](https://dmitripavlutin.com/typescript-index-signatures/)

[How to create empty to typed object in useState](https://bobbyhadz.com/blog/react-type-usestate-object#type-usestate-with-empty-object-initial-value-in-react-ts)
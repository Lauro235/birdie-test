# TS Config Notes

I found that the describe and it methods in the test folder wasn't picking up the modules "@types/jest": "^26.0.23" and "@types/node": "^15.0.2",

I updated the tsconfig.json to include "types": ["jest", "node"]. This quickly resolved the testing module issue, but I was worried that by removing typeRoots I would sabotage the connection to the database as the env variable relies on global.d.ts, however so far, the connection is still working.

Useful links are
[Initial Checklist](https://stackoverflow.com/a/61107618/15592981)
[Remove typeRoots](https://stackoverflow.com/a/69120948/15592981)

```json
{
  "compilerOptions": {
    "declaration": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "lib": [
      "esnext"
    ],
    "target": "es2015",
    "types": ["jest", "node"],
    "outDir": "./lib",
    // "typeRoots": ["./global.d.ts"],
    "removeComments": true,
    "inlineSourceMap": true,
    "inlineSources": true,
    "preserveConstEnums": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "src/**/*",
    "__tests__"
  ],
  "exclude": [
    "node_modules",
  ]
}
```
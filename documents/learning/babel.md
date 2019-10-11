# babel

## async in es6

pollyfill is necessary, however, it also needs `transform-runtime`
> npm i --save-dev babel-plugin-transform-runtime

and add it in `.babelrc`

```json
 "plugins": [
    [
      "transform-runtime",
      {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": "babel-runtime"
      }
    ]
  ]
```

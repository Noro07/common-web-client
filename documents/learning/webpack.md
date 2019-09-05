# webpack

## json loader

if you are using `webpack >= v2.0.0` and `json-loader` together, the file will be transformed twice which caused the issue. The solution is simply delete the `json-loader` rule.
> <https://stackoverflow.com/questions/49358313/json-loader-in-webpack-config-js-not-working>

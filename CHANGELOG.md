# Changelog

## 2019-12-19

> update chromedriver

Downloads
Current Releases
If you are using Chrome version 79, please download ChromeDriver 79.0.3945.36
If you are using Chrome version 78, please download ChromeDriver 78.0.3904.105
If you are using Chrome version 77, please download ChromeDriver 77.0.3865.40
For older version of Chrome, please see below for the version of ChromeDriver that supports it.

Because developer may keep change its chrome version, it is necessary to updatee target chromedriver in `package.json`:`"pretest:e2e": "webdriver-manager update --versions.chrome=79.0.3945.36",`

> add hash in js and css

In html-webpack-plugin, add `hash: true`. This would automatic add js and css to the html with hash. It may look like

```html
<html><head><link href="./main.5b9e6298c44a69cf3de4.css?5b9e6298c44a69cf3de4" rel="stylesheet"></head>
  <head>
    <meta charset="UTF-8">
    <title>Demo dashboard</title>
  <body>
    <div id="content" />
  <script type="text/javascript" src="./vendor.5b9e6298c44a69cf3de4.Bundle.js?5b9e6298c44a69cf3de4"></script><script type="text/javascript" src="./main.5b9e6298c44a69cf3de4.Bundle.js?5b9e6298c44a69cf3de4"></script></body>
</html>
```

## 2019-08-19

> add react-dev-utils

Use react-dev-utils would open a tab with current browser, if this tab is open, it would auto refresh.
TODO:
using react-dev-utils is for auto detecting the available port instead of hardcode `3000`

## 2019-08-05

> migrate to github

Use travis instead of using gitlab ci

## 2019-01-23

> add gulp to copy routes to server

Edit routes in util-web. For the mock server, it is also necessary to update its routes files. Keep updating two files is not reasonable for a developer. Use `npm run update:routes` to copy the routes.js to server instead of doing by oneslef.

## 2019-01-22

> add prettier husky

Now use `npm run format:dry` can find how many files should be refine according to the prettier
Use `npm run format` can automatic rewrite codes

If user doesn't run the script above and commit his changes, prettier would only work on files which have been changed in this commit and it would auto write those files if the code style are not met.

## 2018-10-10

> ready to use

## 2021-1-29

> add dotenv plug to add env

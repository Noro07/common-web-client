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

# Changelog

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

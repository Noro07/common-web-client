# Common-web-client

[![Build Status](https://travis-ci.com/Noro07/common-web-client.svg?branch=master)](https://travis-ci.com/Noro07/common-web-client) [![GitHub last commit](https://img.shields.io/github/last-commit/Noro07/common-web-client)](https://github.com/Noro07/common-web-client/pulls)

This is a demo for developing an web client for all skills
Monorepo that contains React and Redux. Built with Webpack. The project is served on Node JS Express server. Managed by Lerna.

[简体中文版点击这里](./README_CN.md)

![image](documents/image/iot-web-client-screenshot.jpg)
[The IoT dashboard is based on this demo](https://gitlab.com/NoroLinxy/iot-web-client)

## Set up

- Install all dependencies `npm run link-packages`.
- Copy routes to mock server `npm run update:routes`.
- If you meet any problems during installation, run `npm run clean` to clean the environment and run `npm run ready`, it would prepare all references and routes.

### Run dev mode

Dev mode enables webpack-dev-middleware, will cause Webpack to compile files in-memory - code changes are saved and updated.

1. `npm run start:dev` to start web server.
2. Go to browser and hit <http://localhost:3000/test/#/> to launch.

## Unit tests

All cases are written in Jasmine, executing via Karma on Chrome Headless. Code coverage is run by istanbul.

_Lint fix is included in this stage._

1. Run `npm run test:unit` to start the Unit Test.
2. Review **packages/\*/tests/out/unit** for UT reports.
3. Review **packages/\*/tests/out/coverage** for UT coverage reports.

## E2e tests

Use protractor to set up framework and all cases are written in Jasmine.

1. Ensure the web server is running, run `npm run start:dev` to start a web server in background.
2. Run `npm run test:e2e` to start the E2E testing.
3. Review **packages/\*/tests/out/e2e** for E2E testing reports.

## Static Analysis (Eslint)

All projects are covered with eslint rules standard eslint-config-airbnb.

Run `npm run check:lint` to do the lint check.

## Coding style

Use Prettier to limit the coding style.

Run `npm run format` would automaticly rewrite coding style, if you want to check which files should be rewrite instead of changing them automaticly, Run `npm run format:dry`, it would only list files.

Changes files in commit would be auto-fixed in pre-commit, no action is required.

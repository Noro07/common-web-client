/* eslint-disable no-console */
import express from 'express';
import { renderToString } from 'react-dom/server';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import openBrowser from 'react-dev-utils/openBrowser';
import proxy from 'http-proxy-middleware';
import cors from 'cors';
import Home from './Home';
import * as Routes from '../config/routes';
import enableMockServer from '../mock-server';

const app = express();

app.set('port', process.env.PORT_WEBSERVER || 4000);
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack'); // eslint-disable-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line global-require
  const webpackConfig = require('../../webpack.config.dev'); // eslint-disable-line global-require
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      stats: {
        colors: true,
        chunks: false, // reduces the amount of stuff in terminal
        'errors-only': true,
        hash: false,
        modules: false,
        reasons: false,
        warnings: false
      },
      publicPath: Routes.SERVER_URL_LIB // same as 'output.publishPath' in most case
    })
  );
  app.use(
    webpackHotMiddleware(compiler, {
      log: false
    })
  );
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

enableMockServer(app, process.env.ENABLE_MOCK === 'true');

app.get(Routes.SERVER_URL_BASE, (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    /* eslint react/jsx-filename-extension: [1, { "extensions": [".js", ".jsx"] }] */
    const document = renderToString(<Home lang="en" />);
    res.status(200).send(`<!DOCTYPE html>${document}`);
  } else {
    res.sendFile(path.join(__dirname, '../index.html'));
  }
});

app.use(Routes.SERVER_URL_BASE, express.static(path.join(__dirname, '../')));

app.use(
  Routes.SERVER_URL_LIB,
  express.static(path.join(__dirname, '../../lib'))
);

app.use(
  '/user',
  proxy({ target: 'http://localhost:5000/api/', changeOrigin: true }) // localhost:4000/user => localhost:5000/api/user
);

app.listen(app.get('port'), () => {
  console.info(`Server started: http://localhost:${app.get('port')}/`);
  console.info('============================================');
  console.info('==');
  console.info('==    Demo-web-client URL: ');
  console.info(
    `==    http://localhost:${app.get('port')}${Routes.SERVER_URL_BASE}/#/`
  );
  console.info('==');
  console.info('============================================');
  openBrowser(
    `http://localhost:${app.get('port')}${Routes.SERVER_URL_BASE}/#/`
  );
});

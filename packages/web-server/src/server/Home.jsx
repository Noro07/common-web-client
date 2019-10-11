import React from 'react';
import { SERVER_URL_LIB } from '../config/routes';

const devModal = process.env.NODE_ENV === 'development';

const Home = (language) => (
  <html lang={language.lang}>
    <head>
      <link
        rel="stylesheet"
        type="text/css"
        href={
          devModal
            ? `${SERVER_URL_LIB}/main.css`
            : `${SERVER_URL_LIB}/main.[hash].css`
        }
      />
      <meta charSet="utf-8" />
      <title>Demo web</title>
      <script
        src={
          devModal
            ? `${SERVER_URL_LIB}/vendor.Bundle.js`
            : `${SERVER_URL_LIB}/vendor.[hash].Bundle.js`
        }
      />
    </head>
    <body>
      <div>This is a home page</div>
      <div id="content" />
      <script
        src={
          devModal
            ? `${SERVER_URL_LIB}/main.Bundle.js`
            : `${SERVER_URL_LIB}/main.[hash].Bundle.js`
        }
      />
    </body>
  </html>
);

export default Home;

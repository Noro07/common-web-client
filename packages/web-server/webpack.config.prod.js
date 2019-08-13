// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const webpackProdConfig = baseConfig;

webpackProdConfig.devtool = 'source-map';

webpackProdConfig.plugins.push(
  new HtmlWebpackPlugin({
    title: 'Demo dashboard',
    // don't use html is caused by webpack loader
    // use file.html and webpack loader should work on it
    template: './src/server/template.ejs',
    inject: 'body' 
  })
  // new webpack.optimize.UglifyJsPlugin({
  //   sourceMap: true,
  //   compress: {
  //     warnings: false
  //   }
  // })
);

module.exports = webpackProdConfig;

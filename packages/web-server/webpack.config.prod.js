// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const webpackProdConfig = baseConfig;

webpackProdConfig.devtool = 'source-map';

webpackProdConfig.plugins.push(
  new HtmlWebpackPlugin({
    title: 'Demo dashboard',
    template: './src/server/template.html',
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

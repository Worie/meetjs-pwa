const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const baseConfig = require('./base.js');

baseConfig.plugins = baseConfig.plugins.concat([
      new HtmlWebpackPlugin({
        inject: true,
        hash: false,
        template: './src/index.html',
        filename: './index.html'
      }),
      new FriendlyErrorsWebpackPlugin({
        clearConsole: true,
      }),
    ]
)

baseConfig.devServer = {
  contentBase: path.join(__dirname, "../dist"),
  port: 8080,
  stats: "none",
}

module.exports = baseConfig;

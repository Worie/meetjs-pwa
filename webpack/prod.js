const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;

const baseConfig = require('./base.js');

baseConfig.plugins = baseConfig.plugins.concat([
  new HtmlWebpackPlugin({
    inject: true,
    hash: false,
    template: './src/index.html',
    filename: './index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }
  }),
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, '../dist'),
    routes: ['/'],
    renderer: new Renderer({
      headless: true,
    })
  })
]);

module.exports = baseConfig;

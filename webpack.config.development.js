// Copies webpack.config.build declared stuff into this same file
const { merge } = require('webpack-merge');

const path = require('path');
const config = require('./webpack.config');

module.exports = merge(config, {
     mode: 'development',
     devtool: 'inline-source-map',

     devServer: {
          devMiddleware: {
               writeToDisk: true
          }
     },

     output: {
          path: path.resolve(__dirname, 'public')
     }
})
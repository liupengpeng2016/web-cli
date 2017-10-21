var common = require('./webpack.common.js');
var merge = require('webpack-merge');
var webpack = require('webpack');
module.exports = merge(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
})

var common = require('./webpack.common.js');
var merge = require('webpack-merge');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin('[chunkhash].css'),
  ]
})

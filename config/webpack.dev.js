var common = require('./webpack.common.js');
var merge = require('webpack-merge');
var webpack = require('webpack');
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.HotModuleReplacementPlugin()
  ]
})

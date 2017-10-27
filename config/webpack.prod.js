var common = require('./webpack.common.js');
var merge = require('webpack-merge');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  entry: {
    vendor: ['./public/autoAdapt.js']
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                //path: path.resolve(__dirname, './config/postcss.config.js')
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: '../index.html'
    }),
    new CleanWebpackPlugin(['dist'], {root: path.resolve(__dirname, '../')}),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.[contenthash].css',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
})

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '../dist/static'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: 'images/',
          }
        }
      }
    ]
  },
}

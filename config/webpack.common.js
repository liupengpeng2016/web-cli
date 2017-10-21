var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: './dist/static/images'
          }
        }
      }
    ]
  },
  plugins: [
   new CleanWebpackPlugin('[dist]'),
   new HtmlWebpackPlugin(),
   new ExtractTextPlugin('[hash].css'),
   new webpack.optimize.CommonsChunkPlugin({
     name: 'common'
   })
  ]

}

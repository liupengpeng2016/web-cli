var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: './src/app.js',
    vendor: ['./public/autoAdapt.js']
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '../dist/static'),
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: 'images/'
          }
        }
      }
    ]
  },
  plugins: [
   new HtmlWebpackPlugin({
     template: './public/index.html',
     filename: '../index.html'
   }),
  ]
}

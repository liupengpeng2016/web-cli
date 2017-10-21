var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main: './src/app.js',
    vendor: ['./src/vendor.js']
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        include: /src/,
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
        include: /src/,
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
        include: /src/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: './images/'
          }
        }
      }
    ]
  },
  plugins: [
   new CleanWebpackPlugin(['dist'], {root: path.resolve(__dirname, '../')}),
   new HtmlWebpackPlugin(),
   new webpack.optimize.CommonsChunkPlugin({
     name: 'vendor'
   }),
   new webpack.optimize.CommonsChunkPlugin({
     name: 'runtime'
   })
  ]

}

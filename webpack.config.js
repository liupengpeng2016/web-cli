var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output:{
    path: path.resolve(__dirname, 'dist/'),
    filename: '[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //use: ['css-loader', 'sass-loader']
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ],
        })
    },
    {
      test: /\.(png)|(jpg)|(gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          outputPath: './static/images'
        }
      }
    }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ExtractTextPlugin('[hash].css'),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool:'eval-map-source'
}

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


module.exports = {
  entry: {
    fibonacci: './src/fibonacci.js',
    factorial: './src/factorial.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve('./dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({filename: 'fibonacci.html', chunks: ['fibonacci', 'commons'] }),
    new HtmlWebpackPlugin({filename: 'factorial.html', chunks: ['factorial', 'commons'] }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: '[name].[chunkhash].js'
    })
  ],
  module: {
    rules: [
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 7000
        }
      }
    ]
  }
}

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    fibonacci: './src/fibonacci.js',
    factorial: './src/factorial.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve('dist')
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve('dist')),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: '[name].[chunkhash].js',
    }),
    new HtmlWebpackPlugin({ filename: 'fibonacci.html', chunks: ['fibonacci', 'commons'] }),
    new HtmlWebpackPlugin({ filename: 'factorial.html', chunks: ['factorial', 'commons'] }),
  ],
  module: {
    rules: [
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: { limit: 7000 }
      }
    ]
  }
};

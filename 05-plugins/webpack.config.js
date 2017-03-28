const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve('dist')
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve('dist')),
    new HtmlWebpackPlugin(),
    new OfflinePlugin()
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

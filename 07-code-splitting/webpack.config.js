const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    vendors: ['react', 'react-dom', 'react-router'],
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve('dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new CleanWebpackPlugin(path.resolve('dist')),

    // We are explicitly choosing to set these vendores into a separate chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: '[name].[chunkhash].js',
      minChunks: Infinity
    }),

    new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') }),
  ],

  module: {
    rules: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.png$/, loader: 'url-loader', options: { limit: 7000 } },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve('./src'),
        options: {
          presets: ['react', ['env', {
            modules: false,
            target: 'last 2 browsers'
          }]],
          plugins: ['syntax-dynamic-import']
        }
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true
  }
};

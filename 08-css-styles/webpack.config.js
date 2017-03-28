const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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

    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
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
      },
      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', { loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         camelCase: true,
      //         localIdentName: '[path][name]__[local]--[hash:base64:5]',
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          }
        })
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
};

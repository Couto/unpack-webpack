const path = require('path');

module.exports = {
  entry: path.resolve('src/main.js'),
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve('dist')
  }
};

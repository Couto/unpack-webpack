const path = require('path')

module.exports = {
  entry: path.resolve('src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  }
};

var path = require('path');

module.exports = {
  //context: path.resolve(__dirname, 'app'),
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

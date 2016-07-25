var path = require("path");
var webpack = require('webpack');

var baseCfg = {
  context: __dirname,
  devtool: 'cheap-module-inline-source-map',
  entry: [
    '../src/index',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/static/dist/',
    filename: "[name].[hash].js", // hash = unique id for bundle
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
    ],
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.css', '.js', '.jsx']
  },
};

module.exports = baseCfg;

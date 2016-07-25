var path = require("path");
var BundleTracker = require('webpack-bundle-tracker');
var webpack = require('webpack');

var localCfg = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath:  'http://localhost:3000/app/client/dist/',
    filename: "[name].[hash].js", // hash = unique id for bundle
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({path: __dirname, filename: '../webpack.stats.json'})
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
    ],
  },
};

module.exports = localCfg;
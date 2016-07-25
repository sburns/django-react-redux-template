var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

// Difference between base and local configs - Could add Extract Text plugin here to generate css files.

var localCfg = {
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new BundleTracker({path: __dirname, filename: '../webpack.stats.json'}),
  ],
};

module.exports = localCfg;
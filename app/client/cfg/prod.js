var BundleTracker = require('webpack-bundle-tracker');
var webpack = require('webpack');

var prodCfg = {
  plugins: [
    new BundleTracker({path: __dirname, filename: '../webpack.stats.prod.json'}),
  ],
};

module.exports = prodCfg;

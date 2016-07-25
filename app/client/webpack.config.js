var webpack = require('webpack');
var validate = require('webpack-validator');
var merge = require('webpack-merge');

var baseCfg = require('./cfg/base');
var localCfg = require('./cfg/local');
var prodCfg = require('./cfg/prod');


// If we trigger a script through npm (i.e., npm run build),
// npm sets this information in an environment variable.
// We can match against it and return the configuration we want.
var TARGET = process.env.npm_lifecycle_event;

var cfg = {};

// Build assets for local testing
if (TARGET == 'build:local') {
  cfg = merge.smart(baseCfg, localCfg);
}

// Build production assets
if (TARGET == 'build:prod') {
  cfg = merge.smart(baseCfg, prodCfg);
}

module.exports = validate(cfg);
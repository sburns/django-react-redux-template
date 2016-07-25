var merge = require('webpack-merge');
var validate = require('webpack-validator');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var baseCfg = require('./cfg/base');
var serverCfg = require('./cfg/server');

var config = merge.smart(baseCfg, serverCfg);
var compiler = webpack(validate(config));

var options = {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  noInfo: false,
  historyApiFallback: true,

  stats: {
    colors: true,
    chunkModules: false,
    errors: true,
    errorDetails: true
  }

};

var server = new WebpackDevServer(compiler, options);

server.listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:3000')
});
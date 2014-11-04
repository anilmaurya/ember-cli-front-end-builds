var path = require('path');

function ConfigurationReader(options) {
  var root              = process.cwd();
  var defaultConfigPath = 'deploy.json';

  this._options = options || {};
  this._environment = this._options.environment || 'development';
  this._deployConfig = this._options.configFile || defaultConfigPath;

  this._config = require(path.join(root, this._deployConfig));

  this.store = this._config[this._environment].store;
  this.assets = this._config[this._environment].assets;
}

module.exports = ConfigurationReader;

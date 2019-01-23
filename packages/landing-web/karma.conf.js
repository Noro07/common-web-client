const baseKarmaConf = require('../../karma.conf');

module.exports = (config) => {
  const overrides = {};

  const updateConf = baseKarmaConf(overrides);
  updateConf.logLevel = config.LOG_INFO;
  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG

  config.set(updateConf);
};

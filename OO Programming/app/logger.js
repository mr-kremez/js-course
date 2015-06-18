define(function(require) {
  'use strict';
  var utils = require('./utils');
  var BasicLogger = require('./basic_logger');

  function Logger(initLogLevel, adapter) {
    Logger.superclass.constructor.call(this, initLogLevel, adapter);
  }
  utils.extend(Logger, BasicLogger);

  return Logger;
});
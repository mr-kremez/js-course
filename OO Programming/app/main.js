define(function(require) {
  'use strict';
  var Logger = require('./logger');
  var newLogger = new Logger('debug');
  newLogger.displayLoggerInfo();
  newLogger.debug('Some debug information!');
  newLogger.info('Some info information!');
});
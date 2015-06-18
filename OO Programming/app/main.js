define(function(require) {
  'use strict';
  var Logger = require('./logger');
  var myLogger = new Logger('debug', 'alert');
  myLogger.displayLoggerInfo();
  myLogger.debug('Some debug information!');
  myLogger.info('Some info information!');
  myLogger.defineNewLogLevel({ name: 'custom', value: 5 });
  myLogger.custom('Some custom information!');
});
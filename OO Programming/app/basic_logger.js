define(function(require) {
  'use strict';
  var utils = require('./utils');
  var logLevels = [];
  var adapters = {
    console: function() {
      this.adapter = require('./adapters/console');
    },
    alert: function() {
      this.adapter = require('./adapters/alert');
    }
  };

  function BasicLogger(initLogLevel, adapter) {
    defineLogLevel({ name: 'debug', value: 0 });
    defineLogLevel({ name: 'info', value: 1 });
    setLogLevel.call(this, initLogLevel);
    if(adapters[adapter])
      adapters[adapter].call(this);
    else
      throw 'There are no ' + adapter + ' adapter'
  }

  BasicLogger.prototype = {
    constructor: BasicLogger,
    displayLoggerInfo: function() {
      console.log('Log level: ' + this.logLevel.name + ';');
    },
    defineNewLogLevel: function(logObject) {
      //TODO check that it's not existing and types
      defineLogLevel(logObject);
    }
  };

  function setLogLevel(lvl) {
    if(utils.isNumber(lvl)) {
      setLogLevelByValue.call(this, lvl);
    } else if(typeof(lvl) === 'string') {
      setLogLevelByName.call(this, lvl);
    } else {
      throw 'Wrong type of initial value for Logger';
    }
  }

  function setLogLevelByValue(lvl) {
    for(var i = 0, len = logLevels.length; i < len; i++) {
      if(logLevels[i].value === lvl) {
        this.logLevel = logLevels[i];
        break;
      }
    }
    if(!this.logLevel)
      throw 'There are no log level with value ' + lvl;
  }

  function setLogLevelByName(lvl) {
    for(var i = 0, len = logLevels.length; i < len; i++) {
      if(logLevels[i].name === lvl) {
        this.logLevel = logLevels[i];
        break;
      }
    }
    if(!this.logLevel)
      throw 'There are no log level with name ' + lvl;
  }

  function defineLogLevel(logObject) {
    logLevels.push(logObject);
    BasicLogger.prototype[logObject.name] = function(text) {
      if(this.logLevel.value <= logObject.value) {
        this.adapter.sendText(text, logObject.name);
      }
    }
  }

  return BasicLogger;
});
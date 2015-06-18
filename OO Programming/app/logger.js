define(function() {
  'use strict'; 
  var logLevels = [
    { name: 'debug', value: 0 },
    { name: 'info', value: 1 }
  ];

  function Logger(initLogLevel) {
    setLogLevel.call(this, initLogLevel);
  }

  Logger.prototype = {
    constructor: Logger,
    debug: function(text) {
      if(this.logLevel.value === 0) {
        displayText(text, 'debug');
      }
    },
    info: function(text) {
      if(this.logLevel.value <= 1) {
        displayText(text, 'info');
      }
    },
    displayLoggerInfo: function() {
      console.log('Log level: ' + this.logLevel.name + ';');
    }
  };

  function displayText(text, logName) {
    console.log(logName.toUpperCase() + ' - ' + text);
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function setLogLevel(lvl) {
    if(isNumber(lvl)) {
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

  return Logger;
});
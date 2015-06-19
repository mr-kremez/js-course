define(function() {
  'use strict';
  return {
    sendText: function(text, logName) {
      console.log(logName.toUpperCase() + ' - ' + text);
    }
  };
});
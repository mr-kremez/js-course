define(['jquery'], function($) {
  'use strict';
  return {
    sendText: function(text, logName) {
      $('body').append('<p><b>' + logName + ': </b>' + text + '</p>');
    }
  };
});
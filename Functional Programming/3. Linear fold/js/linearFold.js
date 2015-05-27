// ES5 built-in alternative is Array.prototype.reduce()
(function(linearFoldModule, undefined) {
  'use strict'
  linearFoldModule.linearFold = function(array, callback/*, initialValue*/) {

    if(arguments.length >= 3) {
    	var i = 0;
  		var resultValue = arguments[2];
    } else {
    	i = 1;
    	resultValue = array[0];
    }

  	for(; i < array.length; i++) {
  	  resultValue = callback.call(this, resultValue, array[i], i, array);
  	}

  	return resultValue;
  }

  console.log( 'Linear fold one: ' + linearFoldModule.linearFold([1, 2, 3, 4, 5], function(a, b){ return a + b; }) );
  console.log( 'Linear fold two: ' + linearFoldModule.linearFold([1, 2, 3, 4, 5], function(a, b){ return a + b; }, 10) );
})(window.linearFoldModule = window.linearFoldModule || {});
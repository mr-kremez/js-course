(function(){
  'use strict';

  function first(array/*, condition*/) {
    if(arguments.length >= 2) {
      var condition = arguments[1];
    } else {
      return array[0];
    }
    for(var i = 0, len = array.length; i < len; i++) {
      if(condition(array[i]) === true) {
        return array[i];
      }
    }
    return null;
  }

  function conditionOne(value) {
    return (value % 2 === 0);
  }

  function conditionTwo(value) {
    return (value > 100);
  }

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log( first(array) );
  console.log( first(array, conditionOne) );
  console.log( first(array, conditionTwo) );
})();
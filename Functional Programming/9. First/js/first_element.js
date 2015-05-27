(function(){
  'use strict'

  function first(array/*, condition*/) {
    if(arguments.length >= 2) {
      var condition = arguments[1];
    } else {
      return array[0];
    }
    for(var i = 0; i < array.length; i++) {
      if(condition.call(this, array[i]) == true) {
        return array[i];
      }
    }
    return null;
  }

  function conditionOne(value) {
    if(value % 2 == 0) {
      return true;
    }
    return false;
  }

  function conditionTwo(value) {
    if(value > 100) {
      return true;
    }
    return false;
  }

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log( first(array) );
  console.log( first(array, conditionOne) );
  console.log( first(array, conditionTwo) );
})();
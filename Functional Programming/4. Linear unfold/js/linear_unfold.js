(function() {
  'use strict'
  function linearUnfold(callback, initialValue) {
    var unfoldArray = [];

    function unfolding(state, currentValue) {      
      if (state == true) {
        unfoldArray.push(currentValue);
        var tuple = callback.call(this, currentValue);   
        return unfolding(tuple[1], tuple[0]);
      } else {
        return unfoldArray;
      }
    }

    return unfolding(true, initialValue);
  }

  function callbackSample(value) {
    value++;
    if (value > 5) {
      return [value, false];
    } else {
      return [value, true];
    }
  }

  console.log( linearUnfold(callbackSample, 1) );
  console.log( linearUnfold(callbackSample, 3) );
})();
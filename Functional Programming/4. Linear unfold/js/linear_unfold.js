(function() {
  'use strict';
  function linearUnfold(callback, initialValue) {
    var unfoldArray = [];

    function unfolding(state, currentValue) {      
      if (state === true) {
        unfoldArray.push(currentValue);
        var tuple = callback(currentValue);
        return unfolding(tuple[1], tuple[0]);
      } else {
        return unfoldArray;
      }
    }

    return unfolding(true, initialValue);
  }

  function callbackSample(value) {
    value++;
    var state = (value < 5);
    return [value, state];
  }

  console.log( linearUnfold(callbackSample, 1) );
  console.log( linearUnfold(callbackSample, 3) );
})();
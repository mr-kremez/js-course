(function(){
  'use strict';

  function memoization(func) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      func.memo = func.memo || {};
      return (args in func.memo) ? func.memo[args] : func.memo[args] = func.apply(this, args);
    };
  }

  function sum(a, b) {
    return a + b;
  }

  var memoSum = memoization(sum);

  console.log( memoSum(5, 6) );
  console.log( memoSum(5, 6) );
})();
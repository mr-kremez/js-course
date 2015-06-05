// JS built-in alternative is Function.prototype.bind()
(function() {
  'use strict';
  function partialApplication(func) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 1);
    return function() {
      var allArgs = args.concat(slice.call(arguments));
      return func.apply(this, allArgs);
    }
  }

  function sumAll() {
    var sum = 0;
    for(var i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  function multiplyAll() {
    var product = 1;
    for(var i = 0, len = arguments.length; i < len; i++) {
      product *= arguments[i];
    }
    return product;
  }

  // Check sum
  var addToCurrentSum = partialApplication(sumAll, 0, 1, 2);
  var result = addToCurrentSum(3, 4, 5);
  console.log(result);

  // Check multiplication
  var multiplyCurrentProduct = partialApplication(multiplyAll, 2, 3);
  result = multiplyCurrentProduct(10, 10);
  console.log(result);
})();
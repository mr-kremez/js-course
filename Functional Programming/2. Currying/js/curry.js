(function() {
  'use strict';
  function curry(func) {
    var n = func.length;

    function getCurriedFunc(prevArgs) {
      return function(singleArg) {
        var args = prevArgs.concat(singleArg);
        if(args.length < n) {
          return getCurriedFunc(args);
        } else {
          return func.apply(this, args);
        }
      };
    }

    return getCurriedFunc([]);
  }

  function foo(arg1, arg2, arg3) {
    return "" + arg1 + arg2 + arg3;
  }

  console.log( foo(1, 2, 3) );
  console.log( foo('a', 'b', 'c') );

  var curriedFoo = curry(foo);
  console.log( curriedFoo(1)(2)(3) );
  console.log( curriedFoo('a')('b')('c') );
})();

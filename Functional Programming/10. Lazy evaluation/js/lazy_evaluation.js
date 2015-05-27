'use strict'

function lazy(func /*, args */) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    return func.apply(this, args);
  }
}

function sum(a, b) {
  return a + b;
}

console.log('one');
var lazySum = lazy(sum, 5, 6);
console.log('two');
console.log( lazySum() );
console.log('three');
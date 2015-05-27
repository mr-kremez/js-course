// ES5 built-in alternative is Array.prototype.map()
(function(){
  'use stict'

  function map(array, callback) {
    var resultArr = []
    for(var i = 0; i < array.length; i++) {
      resultArr[i] = callback.call(this, array[i], i, array);
    }
    return resultArr;
  }

  function callbackSample(value) {
    return value * 2;
  }

  console.log( map([1, 2, 3], callbackSample) );
  console.log( map([5, 7], callbackSample) );
})();
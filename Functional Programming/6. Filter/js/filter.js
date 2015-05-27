// ES5 built-in alternative is Array.prototype.filter()
(function(filterModule, undefined){
  'use strict'

  filterModule.isEven = function(number) {
    if(number % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

  filterModule.filter = function(array, callback) {
    var filteredArray = []
    for(var i = 0; i < array.length; i++) {
      if( callback.call(this, array[i], i, array) == true ) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }

  console.log( 'Filtered array: ' + filterModule.filter([1, 2, 3, 4, 5, 6, 7, 8], filterModule.isEven) );

})(window.filterModule = window.filterModule || {});
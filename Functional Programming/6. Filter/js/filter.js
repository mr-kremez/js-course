// ES5 built-in alternative is Array.prototype.filter()
(function(filterModule, undefined){
  'use strict';

  filterModule.isEven = function(number) {
    return (number % 2 === 0);
  };

  filterModule.filter = function(array, callback) {
    var filteredArray = [];
    for(var i = 0, len = array.length; i < len; i++) {
      if( callback(array[i], i, array) === true ) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  };

  console.log( 'Filtered array: ' + filterModule.filter([1, 2, 3, 4, 5, 6, 7, 8], filterModule.isEven) );

})(window.filterModule = window.filterModule || {});
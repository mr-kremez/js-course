(function() {
  'use strcit'

  function averageOfEvenNumbers(array) {
    var evenNumbers = filterModule.filter(array, filterModule.isEven);
    var len =  evenNumbers.length;
    var sumOfEvenNumbers = linearFoldModule.linearFold(evenNumbers, function(a, b) { return a + b; });
    return sumOfEvenNumbers / len;
  }

  console.log( 'Average of even numbers in given array is ' + averageOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) );
})();
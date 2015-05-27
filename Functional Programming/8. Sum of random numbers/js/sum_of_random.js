(function(){
  'use strict'
  function sumOfRandomNumbers(quantity, upperBound){
    var randomNumbers = [];
    for(var i = 0; i < quantity; i++) {
      randomNumbers[i] = Math.floor((Math.random() * upperBound) + 1);
    }
    return linearFoldModule.linearFold(randomNumbers, function(a, b) { return a + b; });
  }

  console.log('Sum of 10 random numbers: ' + sumOfRandomNumbers(10, 100) );
})();
// JS built-in alternative is Function.prototype.bind()
(function() {
	'use strict'
	function partialApplication() {
		var slice = Array.prototype.slice;
		var args = slice.call(arguments, 0, -1);
		var func = arguments[arguments.length - 1];
		return function() {
			return func.apply(this, args.concat(slice.call(arguments)));
		}
	}

	function sumAll() {
		var sum = 0;
		for(var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		return sum;
	}

	function multiplyAll() {
		var product = 1;
		for(var i = 0; i < arguments.length; i++) {
			product *= arguments[i];
		}
		return product;
	}

	// Check sum
	var addToCurrentSum = partialApplication(0, 1, 2, sumAll);
	var result = addToCurrentSum(3, 4, 5);
	console.log(result);

	// Check multiplication
	var multiplyCurrentProduct = partialApplication(2, 3, multiplyAll);
	result = multiplyCurrentProduct(10, 10);
	console.log(result);
})();
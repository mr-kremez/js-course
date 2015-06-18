define(function(){
  return {
  	isNumber: function(n) {
    	return !isNaN(parseFloat(n)) && isFinite(n);
    },
    extend: function(Child, Parent) {
	    var F = function() {};
	    F.prototype = Parent.prototype;

	    Child.prototype = new F();
	    Child.prototype.constructor = Child;
	    Child.superclass = Parent.prototype;
	  },
	  displayText: function(text, logName) {
	    console.log(logName.toUpperCase() + ' - ' + text);
	  }
  };
});
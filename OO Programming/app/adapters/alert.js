define(function() {
	'use strict';
	return {
		sendText: function(text, logName) {
			alert(logName.toUpperCase() + ' - ' + text);
		}
	};
});
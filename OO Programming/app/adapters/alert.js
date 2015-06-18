define(function() {
	return {
		sendText: function(text, logName) {
			alert(logName.toUpperCase() + ' - ' + text);
		}
	};
});
define(function() {
	return {
		sendText: function(text, logName) {
			console.log(logName.toUpperCase() + ' - ' + text);
		}
	};
});
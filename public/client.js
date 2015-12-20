$(document).ready(function() {
	var socket = io.connect('http://'+location.host);

	socket.on('message', function(data) {

	});
});

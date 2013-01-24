var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		console.log("Request for " + pathname + " received");
		route(handle, pathname, response, query);
	}
	http.createServer(onRequest).listen(process.env.VMC_APP_PORT || 1337, null);
	console.log("Server has started");
}

exports.start = start;
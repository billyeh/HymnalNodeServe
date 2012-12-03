function route(handle, pathname, response, query) {
	console.log("About to route a request for " + pathname);
	if (typeof(handle[pathname]) === 'function') {
			handle[pathname](response, query, pathname);
	}
	else {
		try {
			handle["file"](response, query, pathname.slice(1));
		}
		catch(error) {
			console.log("No request handler found for " + pathname);
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write("<h1>404 Not Found</h1>");
			response.end();
		}
	}
}

exports.route = route;

var fs = require('fs');
var querystring = require('querystring');

function start(response, query) {
	fs.readFile("HymnDoc.htm", function(error, content) {
		if (error) {
			response.writeHead(500);
			response.end();
			
			console.log("Error reading file");
			console.log("Query for " + query + " received");
		}
		else {
			response.writeHead(200);
			response.end(content, 'utf-8');
			
			console.log("Serving file");
			console.log("Query for " + query + " received");
		}
	});
	
	/* response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World</h1>");
	response.end();
	console.log(query === undefined);
	console.log("Query for " + query + " received");
	console.log("Request for start received"); */
}

function serveFile(response, query) {
	fs.readFile("./" + querystring.parse(query).type + "/hymn"+ 
			querystring.parse(query).hymn + ".txt", function(error, content) {
		if (error) {
			response.writeHead(500);
			response.end();
			
			console.log("Error reading file");
			console.log("Query for " + query + " received");
		}
		else {
			response.writeHead(200, {"Content-Type": "application/json"});
			response.end(content, 'utf-8');
			
			console.log("Serving file");
			console.log("Query for " + query + " received");
		}
	});
}

function favicon(response, query) {
	fs.readFile("favicon.ico", function(error, content) {
		if (error) {
			response.writeHead(500);
			response.end();
			
			console.log("Error reading file");
			console.log("Query for " + query + " received");
		}
		else {
			response.writeHead(200, {"Content-Type": "image/x-icon"});
			response.end(content, 'utf-8');
			
			console.log("Serving file");
			console.log("Query for " + query + " received");
		}
	});
}

exports.start = start;
exports.serveFile = serveFile;
exports.favicon = favicon;
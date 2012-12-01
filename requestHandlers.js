var fs = require('fs');
var querystring = require('querystring');

function start(response, query) {
	fs.readFile("HymnDoc.html", function(error, content) {
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
	
}

function backgroundImg(response, query) {
	fs.readFile("nav.png", function(error, content) {
		if (error) {
			response.writeHead(500);
			response.end();
			
			console.log("Error reading file");
			console.log("Query for " + query + " received");
		}
		else {
			response.writeHead(200, {"Content-Type": "image/png"});
			response.end(content, 'utf-8');
			
			console.log("Serving file");
			console.log("Query for " + query + " received");
		}
	});
}

function serveFile(response, query) {
	fs.readFile("./" + querystring.parse(query).type + "/hymn" + 
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

function docmainCSS(response, query) {
	fs.readFile("docmain.css", function(error, content) {
		if (error) {
			response.writeHead(500);
			response.end();
			
			console.log("Error reading file");
			console.log("Query for " + query + " received");
		}
		else {
			response.writeHead(200, {"Content-Type": "text/css"});
			response.end(content, 'utf-8');
			
			console.log("Serving file");
			console.log("Query for " + query + " received");
		}
	});
}

exports.start = start;
exports.serveFile = serveFile;
exports.favicon = favicon;
exports.docmainCSS = docmainCSS;
exports.background = backgroundImg;
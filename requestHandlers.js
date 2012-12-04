var fs = require('fs');
var querystring = require('querystring');
var mime = require('mime');

function write(error, content, response, query, contentType) {
	if (error) {
		response.writeHead(500);
		response.end();
		
		console.log("Error reading file");
		console.log("Query for " + query + " received");
	}
	else {
		response.writeHead(200, {"Content-Type": contentType});
		response.end(content, 'utf-8');
		
		console.log("Serving file");
		console.log("Query for " + query + " received");
	}
}

function start(response, query, pathname) {
	fs.readFile("HymnDoc.html", function(error, content) {
		write(error, content, response, query, mime.lookup("HymnDoc.html"));
	});
}

function serveHymn(response, query, pathname) {
	var file = "./hymns/" + querystring.parse(query).type + "/hymn" + querystring.parse(query).hymn + ".txt";
	console.log("FILE " + file);
	fs.readFile(file, function(error, content) {
		write(error, content, response, query, mime.lookup(file));
	});
}

function serveFile(response, query, pathname) {
	console.log(pathname);
	fs.readFile(pathname, function(error, content) {
		write(error, content, response, query, mime.lookup(pathname));
	});
}

exports.start = start;
exports.serveHymn = serveHymn;
exports.serveFile = serveFile;
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

function start(response, query) {
	fs.readFile("HymnDoc.html", function(error, content) {
		write(error, content, response, query, mime.lookup("HymnDoc.html"));
	});
}

function backgroundImg(response, query) {
	fs.readFile("nav.png", function(error, content) {
		write(error, content, response, query, mime.lookup("nav.png"));
	});
}

function serveHymn(response, query) {
	var file = "./" + querystring.parse(query).type + "/hymn" + querystring.parse(query).hymn + ".txt";
	fs.readFile(file, function(error, content) {
		write(error, content, respone, query, mime.lookup(file));
	});
}

function favicon(response, query) {
	fs.readFile("favicon.ico", function(error, content) {
		write(error, content, response, query, mime.lookup("favicon.ico"));
	});
}

function docmainCSS(response, query) {
	fs.readFile("docmain.css", function(error, content) {
		write(error, content, response, query, mime.lookup("docmain.css"));
	});
}

exports.start = start;
exports.serveHymn = serveFile;
exports.favicon = favicon;
exports.docmainCSS = docmainCSS;
exports.background = backgroundImg;
exports.write = write;
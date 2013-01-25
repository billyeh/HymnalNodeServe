var fs = require('fs');
var querystring = require('querystring');
var mime = require('mime');
var sqlite = require('sqlite3');

function write(error, content, response, query, contentType) {
	if (error) {
		serveFile(response, query, '404.html');
		
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
	var file = "./res/hymns/" + querystring.parse(query).type + "/hymn" + querystring.parse(query).hymn + ".txt";
	fs.readFile(file, function(error, content) {
		write(error, content, response, query, mime.lookup(file));
	});
}

function serveFile(response, query, pathname) {
	console.log(pathname);
	if (pathname == 'favicon.ico') {
		pathname = './res/images/favicon.ico';
		console.log('Rerouting request for favicon');
	}
	fs.readFile(pathname, function(error, content) {
		write(error, content, response, query, mime.lookup(pathname));
	});
}

function searchHymns(response, query, pathname) {
	var results = [];
	var db = new sqlite.Database('./res/db/songdb.db');

	console.log("Query: " + query);
	db.serialize(function() {
		db.each("SELECT url, SNIPPET(songdb, '', '', '...') AS snippet FROM songdb WHERE song MATCH ?", [query], 
			function(error, row) {
				results.push({"url": row.url, "snippet": row.snippet});
		});
	});
	db.close(function() {	
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(JSON.stringify(results), 'utf-8');
	});
}
exports.start = start;
exports.serveHymn = serveHymn;
exports.serveFile = serveFile;
exports.searchHymns = searchHymns;
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/hymn"] = requestHandlers.serveHymn;
handle["/search"] = requestHandlers.searchHymns;
handle["file"] = requestHandlers.serveFile;

server.start(router.route, handle);
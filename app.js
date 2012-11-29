var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/hymn"] = requestHandlers.serveFile;
handle["/favicon"] = requestHandlers.favicon;

server.start(router.route, handle);
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/hymn"] = requestHandlers.serveFile;
handle["/favicon.ico"] = requestHandlers.favicon;
handle["/docmain.css"] = requestHandlers.docmainCSS;
handle["/nav.png"] = requestHandlers.background;

server.start(router.route, handle);
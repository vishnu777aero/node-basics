const http = require('http');
const requestHandler = require('./routes');

//called for every incoming request!
const server = http.createServer(requestHandler);

server.listen(3000);
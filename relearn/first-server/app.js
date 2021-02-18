const http = require('http');
const requestHandler = require('./routes');

//called for every incoming request!
//nodemon will only restart node server, not the loaded page...
const server = http.createServer(requestHandler);

console.log(new Date());

server.listen(3000);
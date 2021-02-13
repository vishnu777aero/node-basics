const http = require('http');

//called for every incoming request!
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
const http = require('http');

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.write('<h2>Hello world</h2>');
        res.end();
    }
});

server.listen('3000');
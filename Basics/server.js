const http = require('http');
const PORT = 3000;


const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.write('<h2>Hello world</h2>');
        res.end();
    }
});

server.listen(PORT);
console.log(`Listening on port ${PORT}`)
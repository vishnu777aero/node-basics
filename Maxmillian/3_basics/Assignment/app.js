const http = require('http');
const PORT = 3000;

const server = http.createServer( (req, res) => {
    console.log('we doing good :)');
});

server.listen(PORT);
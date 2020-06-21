/*
    /    means absolute path
    ./   means relative path
    no / means core module
*/
const http = require('http');

//rqListener will run for every incoming request
const rqListener = (req, res) => {
    //process.exit(); only if you want to shut the server :(, exits the event loop.
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
        res.write('<head><title>Hello from Node.js :)</title></head>');
        res.write('<body><h1>Hello World!!</h2></body>');
    res.write('</html>');
    res.end();
};

const server = http.createServer(rqListener);

server.listen(3000);
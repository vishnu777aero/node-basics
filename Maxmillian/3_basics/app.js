/*
    /    means absolute path
    ./   means relative path
    no / means core module
*/
const http = require('http');

//rqListener will run for every incoming request
const rqListener = (req, res) => {
    console.log(req);
    //process.exit(); only if you want to shut the server :(, exits the event loop.
};

const server = http.createServer(rqListener);

server.listen(3000);
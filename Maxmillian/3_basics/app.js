/*
    /    means absolute path
    ./   means relative path
    no / means core module
*/
const http = require('http');

//rqListener will run for every incoming request
const rqListener = (req, res) => {
    console.log(req);
};

const server = http.createServer(rqListener);

server.listen(3000);
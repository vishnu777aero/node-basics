const http = require('http');
const PORT = 3000;

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/next') {
        const next = [
            'learn node advanced',
            'learn express',
            'learn ..........'
        ];

        res.write(JSON.stringify(next));
        res.end();        
    }
});

server.listen(PORT);
console.log(`Listening on port ${PORT}`)
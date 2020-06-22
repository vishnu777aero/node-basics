const http = require('http');
const PORT = 3000;

const server = http.createServer( (req, res) => {
    const { url } = req;

    switch (url) {
        case '/':
            res.write('<h1>Hello world bug!</h1>');
            res.end();
            break;
        case '/users':
            res.write('<html>');
                res.write('<body>');
                    res.write('<ul>');
                        res.write('<li>');
                            res.write('Me :)')
                        res.write('</li>');
                        res.write('<li>');
                            res.write('You :)')
                        res.write('</li>');
                        res.write('<li>');
                            res.write('Everyone :)')
                        res.write('</li>');
                        res.write('<li>');
                            res.write('Ill use template next time hahaha :)')
                        res.write('</li>');
                    res.write('</ul>');
                res.write('</body>');
            res.write('</html>');
            res.end();
    }
});

server.listen(PORT);
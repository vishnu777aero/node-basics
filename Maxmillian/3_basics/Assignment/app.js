const http = require('http');
const PORT = 3000;

const server = http.createServer( (req, res) => {
    const { url } = req;

    switch (url) {
        case '/':
            res.write('<html>');
                res.write('<body>');
                    res.write('<h1>Hello world bug!</h1>');
                        res.write(`<form method='post' action='/create-user'>`);
                            res.write(`<input name='heWhoMustNotBeNamed'>`);
                            res.write(`<button type='submit'>click me!</button>`);
                    res.write('</form>');
                res.write('</body>');
            res.write('</html>');
            res.end();
            break;
        case '/create-user':
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
                console.log(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                console.log(message);
            });
            return res.end();
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
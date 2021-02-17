//consoles user entered username to node console
const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  switch(url) {
    case '/users': {
      res.write(`
        <html>
          <body>
          <h1>Behold the users of this Mighty Node server!!!</h1>
          <ol>
            <li>Me the great!</li>
            <li>Not me the nutcase!</li>
            <li>You-sir who dared to visit this page!</li>
          </ol>
          <a href='/'>Go back to Homepage</a>
          </body>
        </html>
      `);
      return res.end();
    }
    case '/create-user': {
      if (method === 'POST') {
        const body = [];

        req.on('data', (chunk) => body.push(chunk));
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const username = parsedBody.split('=')[1];

          console.log({ username });
        })
      }
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    }
    default: {
      res.write(`
        <html>
          <body>
          <h1>Greetings from vishnu777aero!!!</h1>
          <form action='/create-user' method='POST'>
            <label for='username'>Username: </label>
            <input name='username' type='text' />
            <button type='submit'>Display username in Node console</button>
          </form>
          <a href='/users'>Click here to see all users</a>
          </body>
        </html>
      `);
      return res.end();
    }
  }
});

const PORT = 3000;
console.log(`Node server started. Listening to port ${PORT}...`);
server.listen(PORT);
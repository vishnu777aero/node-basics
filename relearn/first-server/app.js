const fs = require('fs');
const http = require('http');

//called for every incoming request!
const server = http.createServer((req, res) => {
const { url, method } = req;

if (url === '/form') {
  res.write('<html>');
  res.write('<head><title>My Second Page</title></head>');
  res.write('<body>')
  res.write('<h1>test form</h1>');
  res.write('<form method="POST" action="/message">');
  res.write('<input type="text" name="form-input" />');
  res.write('<button type="submit">Submit</button>')
  res.write('</from>');
  res.write('</body>')
  res.write('</html>');
  return res.end();
}

if (url === '/message' && method === 'POST') {
  const body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });

  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split('=')[1];
    fs.writeFileSync('SavedInput.txt', message);
  })

  res.statusCode = 302;
  res.setHeader('Location', '/');
  return res.end();
}


  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from Node.js</h1><a href="/form">Go to form</a></body>')
  res.write('</html>');
  res.end();
});

server.listen(3000);
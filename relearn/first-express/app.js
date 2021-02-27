const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res) => {
  res.send('<form action="/post-product" method="POST"><input type="text" name="product" /><button type="submit">add</button></form>')
})

app.post('/post-product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
})

app.use('/',(req, res, next) => {
  res.send('<h1>Home page</h1>');
});

app.listen(3000);
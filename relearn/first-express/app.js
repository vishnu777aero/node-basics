const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/add-product', (req, res) => {
  res.send('<form action="/post-product" method="POST"><input name="product" /><button type="submit">add</button></form>')
})

app.use('/post-product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
})

app.use('/',(req, res, next) => {
  res.send('<h1>Home page</h1>');
});

app.listen(3000);
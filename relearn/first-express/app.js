const express = require('express');
const adminRoutes = require('./routes/admin');
const bodyParser = require('body-parser');

const app = express();

app.use(adminRoutes);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/post-product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
})

app.get('/',(req, res, next) => {
  res.send('<h1>Home page</h1>');
});

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);
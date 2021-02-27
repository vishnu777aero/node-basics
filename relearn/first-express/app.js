const express = require('express');

const app = express();

app.use('/first-page',(req, res, next) => {
  res.send('<h1>first page</h1>');
  console.log('first middleware');
});

app.use('/second-page',(req, res, next) => {
  console.log('second middleware');
  res.send('<h1>Hello from express!</h1>');
});

app.listen(3000);
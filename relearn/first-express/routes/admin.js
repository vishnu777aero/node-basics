const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res) => {
  res.send('<form action="/post-product" method="POST"><input type="text" name="product" /><button type="submit">add</button></form>')
})

module.exports = router;
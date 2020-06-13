const express = require('express');

const app = express();

app.get('/teste', (req,res) => {
  return res.json({ alo: 'mundo 3' })
} )

app.listen(3333);
const fs = require('fs');
const express = require('express');
const { db } = require('./db/db.json')

const PORT = process.env.PORT || 3002;
const app = express();

app.get('/api/db', (req, res) => {
    res.json(db);
  });

  app.post('/api/db', (req, res) => {
    // req.body is where our incoming content will be
    console.log(req.body);
    res.json(req.body);
  });

app.listen(PORT, () => {
    console.log(`API server on port ${PORT}!`);
})
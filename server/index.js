require('dotenv/config');

const path = require('path');
const express = require('express');

const server = express();
const port = process.env.PORT || 8080;


server.use(express.static(path.join(__dirname, '../build/.')));
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'An unexpected error has occurred'
  });
});
server.listen(port);
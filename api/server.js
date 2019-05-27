const express = require('express')

const configMiddleware = require('../config/middleware')

const server = express();

configMiddleware(server);

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' })
})

module.exports = server;
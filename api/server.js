const express = require('express')

const configMiddleware = require('../config/middleware')

const recipesRouter = require('../recipes/recipes-router')

const server = express();

configMiddleware(server);

server.use('/api/recipes', recipesRouter);

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' })
})

module.exports = server;
const express = require('express')

const configMiddleware = require('../config/middleware')
const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')
const recipesRouter = require('../recipes/recipes-router')
const categoriesRouter = require('../categories/categories-router')

const server = express();

configMiddleware(server);

server.use('/api/auth', authRouter)
server.use('./api/users', usersRouter)
server.use('/api/recipes', recipesRouter);
server.use('/api/categories', categoriesRouter)

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' })
})

module.exports = server;
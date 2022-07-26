const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')

const server = express()

server.use(express.json())

server.use(cors({
    origin: '*',
    credentials: true,
  }));

server.use('/', routes)

server.listen(4000)

console.log('Server on port 4000')

module.exports = server;
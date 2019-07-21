const path = require('path')
const express = require('express')

const users = require('./routes/users')
const profiles = require('./routes/profiles')
const auth = require('./routes/auth')
const languages = require('./routes/languages')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// Routes Here
server.use('/api/v1', auth)
server.use('/api/v1/profiles', profiles)
server.use('/api/v1/users', users)
server.use('/api/v1/languages', languages)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server

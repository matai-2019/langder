const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.post('/login', (req, res) => {
  const loginData = req.body
  db.login(loginData)
    .then(user => {
      user
        ? res.status(200)
          .send('TEST TOKEN')
        : res.status(401)
          .json({ code: 401, message: 'Username or email is inncorrect' })
    }).catch(err => {
      res.status(500).json(err)
    })
})

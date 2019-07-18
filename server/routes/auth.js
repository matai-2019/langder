const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.post('/login', (req, res) => {
  const loginData = req.body

  db.login(loginData)
    .then(user => {
      if (user !== [] || user !== null) {
        res.status(200)
          .json({ auth: 'TEST TOKEN' })
      } else {
        res.status(401)
          .json({ code: 401, message: 'Username or email is inncorrect' })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router

const express = require('express')
const jwt = require('jsonwebtoken')
const moment = require('moment')
const db = require('../db/db')

const router = express.Router()

router.post('/login', (req, res) => {
  const loginData = req.body

  db.login(loginData)
    .then(async user => {
      const match = await db.validatePassword(loginData.password, user.password)
      if (match && user.passport === req.body.passport) {
        const payload = {
          sub: user.id,
          iat: moment().unix()
        }
        const token = jwt
          .sign(payload, process.env.SECRET_OR_KEY || 'secret', { expiresIn: '1d' })

        res.status(200)
          .json({ auth: token, ...user })
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

const express = require('express')
const jwt = require('jsonwebtoken')
const moment = require('moment')
const authDB = require('../db/auth.db')
require('babel-polyfill')

const router = express.Router()

router.post('/login', (req, res) => {
  const loginData = req.body
  authDB.login(loginData)
    .then(async user => {
      const match = await authDB.validatePassword(
        loginData.password,
        user.password)

      if (match && user.passport === req.body.passport) {
        const matches = await authDB.getUserMatches(user.id)
        const payload = {
          sub: user.id,
          aud: matches.map(match => match.userId),
          iat: moment().unix()
        }
        const token = jwt
          .sign(payload, process.env.SECRET_OR_KEY ||
            'secret', { expiresIn: '1d' })

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

const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.post('/', (req, res) => {
  db.addUser(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => {
      res.status(560).json(err)
    })
})

module.exports = router

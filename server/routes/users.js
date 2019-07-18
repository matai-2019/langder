const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => res.status(200).json(users))
})

router.post('/', (req, res) => {
  db.addUser(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router

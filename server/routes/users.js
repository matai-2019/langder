const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUser()
    .then(users => res.status(200).json(users))
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  db.addUser(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router

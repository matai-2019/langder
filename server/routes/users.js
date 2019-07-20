const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  const info = req.body
  db.getUser(info)
    .then(user => res.status(200).json(user))
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
    .then(() => res.status(201).send())
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router

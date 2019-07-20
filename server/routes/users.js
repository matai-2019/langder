const express = require('express')

const db = require('../db/db')

const router = express.Router()

// get '/:id' route should call:
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

// put route to update user

// put route to update profile

module.exports = router

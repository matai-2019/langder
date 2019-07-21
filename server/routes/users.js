const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/:id/pot', (req, res) => {
  const userId = Number(req.params.id)
  // TODO Stretch Add query params in requests for filtering
  db.getPotentialMatches()
    .then(potMatches => {
      res.status(200).json(potMatches)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
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

// put route to update user (has ticket)

// delete route to delete user (has ticket)

// get route to get user languages (has ticket)

// post route to add user languages (has ticket)

// del route to delete user languages (has ticket)

module.exports = router

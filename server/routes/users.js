const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/:id/pot', (req, res) => {
  const userId = Number(req.params.id)
  // TODO Stretch Add query params in requests for filtering
  db.getPotentialMatches(userId)
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

router.delete('/:id', (req, res) => {
  const userId = Number(req.params.id)

  db.deleteUser(userId)
    .then(() => {
      res.status(200).json({ Okay: true })
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id/languages', (req, res) => {
  db.getUserLanguages(req.params.id)
    .then(langs => {
      res.status(200).json(langs)
    })
})

// post route to add user languages (has ticket)
router.post('/:id', (req, res) => {
  const userId = Number(req.params.id)
  const languages = req.body
  db.addUserLanguage(userId, languages)
    .then((langs) => res.status(201).send(langs))
    .catch(err => {
      res.status(500).json(err)
    })
})

// del route to delete user languages (has ticket)

module.exports = router

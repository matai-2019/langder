const express = require('express')

const db = require('../db/db')

const router = express.Router()

// get route to get all languages (has ticket)

router.get('/', (req, res) => {
  db.getAllLanguages()
    .then(languages => {
      res.status(200).json(languages)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

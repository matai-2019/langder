const express = require('express')

const db = require('../db/db')

const router = express.Router()

// get route to get profile (has ticket)

// post route to add profile (has ticket)

router.put('/:id', (req, res) => {
  const newProfile = req.body
  const profileId = Number(req.params.id)
  db.updateProfile(profileId, newProfile)
    .then(() => {
      res.status(200).send()
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// delete route to delete profile (has ticket)

module.exports = router

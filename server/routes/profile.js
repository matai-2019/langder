const express = require('express')

const db = require('../db/db')

const router = express.Router()

// get route to get profile (has ticket)

// post route to add profile (has ticket)
router.get('/:id', (req, res) => {
  const profileId = Number(req.params.id)
  db.getProfile(profileId)
    .then(profile => res.status(200).json(profile))
    .catch(err => res.status(500).json(err))
})

// put route to update profile (has ticket)

// delete route to delete profile (has ticket)

module.exports = router

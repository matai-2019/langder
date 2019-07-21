const express = require('express')

const db = require('../db/db')

const router = express.Router()

// get route to get profile (has ticket)

// post route to add profile (has ticket)

// put route to update profile (has ticket)

// delete route to delete profile (has ticket)

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteProfile(profile.id)
    .then(successful => {
      successful
        ? res.status(200).json({ Okay: true })
        : res.status(500).json({ Okay: false })
    })
})

module.exports = router

const express = require('express')

const db = require('../db/db')

const router = express.Router()

// post route to get profile (has ticket)
router.get('/:id', (req, res) => {
  const profileId = Number(req.params.id)
  db.getProfile(profileId)
    .then(profile => {
      if (profile) {
        res.status(200).json(profile)
      } else {
        res.status(404).send()
      }
    })
    .catch(err => res.status(500).json(err))
})

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
router.delete('/:id', (req, res) => {
  const profileId = Number(req.params.id)
  db.deleteProfile(profileId)
    .then(() => {
      res.status(200).json({ Okay: true })
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router

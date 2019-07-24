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

router.post('/:id/likes', (req, res) => {
  const userId = Number(req.params.id)
  const likedId = Number(req.body.likedId)

  db.getUserLikes(userId, likedId)
    .then(like => {
      if (userId === likedId) {
        throw new Error('ALREADY_MATCHED')
      }
      if (like) {
        return db.addUserMatch(userId, likedId)
      } else {
        return db.addUserLike(userId, likedId)
      }
    })
    .then(result => {
      if (result) res.status(200).send('OK')
    })
    .catch(err => {
      console.log(err)
      switch (err.code || err.message) {
        case 'SQLITE_CONSTRAINT':
          res.status(409).json({ code: '409', message: 'Already Matched with user' })
          break
        case 'ALREADY_MATCHED':
          res.status(400)
            .json({ code: 400, message: 'Bad Request' })
          break
        default:
          res.status(500).json(err)
      }
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

router.get('/:id/matches', (req, res) => {
  const userId = Number(req.params.id)
  db.getUserMatches(userId)
    .then(matches => {
      res.status(200).json(matches)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id/languages', (req, res) => {
  db.getUserLanguages(req.params.id)
    .then(langs => {
      res.status(200).json(langs)
    }).catch(err => {
      res.status(500).json(err)
    })
})

// post route to add user languages (has ticket)
router.post('/:id/languages', (req, res) => {
  const userId = Number(req.params.id)
  const languages = req.body
  db.addUserLanguage(userId, languages)
    .then((langs) => res.status(201).json(langs))
    .catch(err => {
      res.status(500).json(err)
    })
})

// del route to delete user languages (has ticket)
router.put('/:id/languages', (req, res) => {
  const userId = Number(req.params.id)
  const languages = req.body
  db.deleteUserLanguage(userId)
    .then((data) => {
      return db.addUserLanguage(userId, languages)
    })
    .then((langIds) => {
      res.status(200).json({ Okay: true, langIds })
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id/likes', (req, res) => {
  const id = req.params.id
  db.getUserLikes(id)
    .then(likes => {
      res.status(200).json(likes)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router

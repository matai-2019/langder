// const connection = require('./db/connection')
const db = require('./db/db')

const passport = require('passport')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const moment = require('moment')

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY || 'secret'
}
const jwtStrategy = new JWTStrategy(opts,
  function (jwtPayload, done) {
    if (moment().unix() > jwtPayload.exp) {
    // Expiration Check
      return done(null, false, { code: 403, message: 'Login expired.' })
    }

    db.getUser(jwtPayload.sub)
      .then(user => {
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      }).catch(err => {
        if (err) return done(err, false)
      })
  })

passport.use(jwtStrategy)

passport.serializeUser(function (user, done) {
  return done(null, user.userId)
})

passport.deserializeUser(function (id, done) {
  db.getUser(id)
    .then(user => {
      if (user) return done(null, user)
    })
    .catch(err => {
      if (err) return done(err)
    })
})

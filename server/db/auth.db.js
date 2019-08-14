const connection = require('./connection')
require('babel-polyfill')

const bcrypt = require('bcrypt')
const saltRounds = process.env.saltRounds || 10

function hashPassword (plainPassword) {
  return bcrypt.hash(plainPassword, saltRounds)
    .then(function (hash) {
      return hash
    })
}

async function validatePassword (password, hash) {
  return bcrypt.compare(password, hash)
    .then(result => result)
}

function login (loginData, db = connection) {
  return db('users')
    .select()
    .where('email', loginData.email)
    .first()
}

module.exports = {
  hashPassword,
  validatePassword,
  login
}

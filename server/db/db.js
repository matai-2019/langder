const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
}

function addUser (user, db = connection) {
  return db('users')
    .insert({ email: user.email, password: user.password })
}

module.exports = {
  getUsers,
  getUser,
  addUser
}

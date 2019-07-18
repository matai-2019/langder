const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
}

function addUser(user, db = connection) {

  return db('users')
    .insert({ email: user.email, password: user.password })
    .catch(err => err)
}

module.exports = {
  getUsers,
  addUser
}

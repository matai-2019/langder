const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
}

function getUser (id, db = connection) {
  return db('users')
  .where('users.id', id)
  .first()
  .select()
}

function addUser(user, db = connection) {

  return db('users')
    .insert({ email: user.email, password: user.password })
    .catch(err => err)
}

module.exports = {
  getUsers,
  getUser,
  addUser
}

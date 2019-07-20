const connection = require('./connection')

// function getUsers (db = connection) {
//   return db('users')
// }

function getPotentialMatches (id, db = connection) {
  return db('users_Ln')
    .where('users.id', id)
    .first()
    .select()
}

function getUser (id, db = connection) {
  return db('users')
    .where('users.id', id)
    .first()
    .select()
}

function addUser (user, db = connection) {
  return db('users')
    .insert(user)
}

function addProfile (user, db = connection) {
  return db('profiles')
    .insert({
      userId: user.userId,
      name: user.name,
      password: user.password
    })
}

function login (loginData, db = connection) {
  return db('users')
    .select()
    .where('password', loginData.password)
    .where('email', loginData.email)
    .first()
}

function deleteUser (id, db = connection) {
  return db('users')
    .where('id', id)
    .del()
}

module.exports = {
  getPotentialMatches,
  getUser,
  addUser,
  addProfile,
  login,
  deleteUser
}

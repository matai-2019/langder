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

function updateuser (users, db = connection) {
  return db('users')
    .where('users', users.id)
    .update({
    users: user.id,
    password: user.password

    })
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  addProfile,
  login,
  deleteUser,
  updateuser
}

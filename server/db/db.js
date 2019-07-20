const connection = require('./connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

function hashPassword (plainPassword) {
  return bcrypt.hash(plainPassword, saltRounds)
    .then(function (hash) {
      return hash
    })
}

function getUsers (db = connection) {
  return db('users')
}

function getUser (id, db = connection) {
  return db('users')
    .where('users.id', id)
    .first()
    .select()
}

async function addUser (user, db = connection) {
  const hashedUser = { ...user, password: await hashPassword(user.password) }
  return db('users')
    .insert(hashedUser)
    .then(idArray => {
      const userId = idArray[0]
      return db('profiles')
        .insert({ userId })
    })
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
  getUsers,
  getUser,
  addUser,
  addProfile,
  login,
  deleteUser,
  hashPassword
}

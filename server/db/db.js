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
}

function addUserLanguage (id, langIds, db = connection) {
  langIds.forEach(lang => {
    console.log('db langId:', lang, 'id:', id)
    return db('UserLanguages')
      .insert({ userId: id, langId: lang })
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
  addUserLanguage,
  addProfile,
  login,
  deleteUser,
  hashPassword
}

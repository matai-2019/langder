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

function addUserLanguage (id, langIds, db = connection) {
  langIds.forEach(lang => {
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
  deleteUser
}

const connection = require('./connection')
const authDB = require('./auth.db')
require('babel-polyfill')

module.exports = {
  getUsers: function (db = connection) {
    return db('users')
  },
  getUser: function (id, db = connection) {
    return db('users')
      .join('profiles', 'users.id', 'profiles.userId')
      .where('users.id', id)
      .first()
      .select('users.id',
        'profiles.id AS profileId',
        'users.email',
        'profiles.name',
        'profiles.description')
  },
  addUser: async function (user, db = connection) {
    const hashedUser = {
      ...user,
      password: await authDB.hashPassword(user.password)
    }
    return db('users')
      .insert(hashedUser)
      .then(idArray => {
        const userId = idArray[0]
        return db('profiles')
          .insert({ userId })
      })
  },
  updateUser: function (user, db = connection) {
    return db('users')
      .where('id', user.id)
      .update({
        email: user.email,
        password: user.password
      })
  },
  deleteUser: function (id, db = connection) {
    return db('users')
      .where('id', id)
      .del()
  }
}

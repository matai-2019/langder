const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
}

module.exports = {
  getUsers
}

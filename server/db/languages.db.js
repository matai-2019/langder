const connection = require('./connection')

module.exports = {
  getAllLanguages: function (db = connection) {
    return db('languages')
  },
  updateLanguage: function (language, db = connection) {
    return db('languages')
      .where('id', language.id)
      .update({
        name: language.name,
        description: language.description
      })
  }
}

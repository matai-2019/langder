const connection = require('./connection')

module.exports = {
  getAllUsersLanguages: function (db = connection) {
    return db('userLanguages')
  },
  addUserLanguage: async function (userId, langIds, db = connection) {
    const data = langIds.map(lang => {
      return { userId: userId, langId: lang.id }
    })
    const result = await db('userLanguages').insert(data)
    return result
  },
  getUserLanguages: async function (userId, db = connection) {
    const langIds = await db('userlanguages').where({ userId }).select('langId')
    const ids = langIds.map(lang => lang.langId)
    const languages = await db('languages')
      .whereIn('id', ids)
      .select()
    return languages
  },
  deleteUserLanguage: function (userId, db = connection) {
    return db('userLanguages')
      .where('userId', userId)
      .del()
  }
}

const connection = require('./connection')

module.exports = {
  getPotentialMatches: function (userId, db = connection) {
    return db.select(
      'p.id as profileId',
      'p.name',
      'p.description',
      'p.userId')
      .leftJoin('userLanguages AS uLang', 'uLang.userId', 'p.userId')
      .from('profiles AS p')
      .options({ nestTables: true })
      .whereNot('p.userId', userId)
      .map(profile => {
        return db('userLanguages AS uLang')
          .where('uLang.id', profile.userId)
          .select('langId', 'languages.name', 'languages.countryCode')
          .join('languages', 'uLang.langId', 'languages.id')
          .then(languages => {
            return { ...profile, languages: [...languages] }
          })
      })
  }
}

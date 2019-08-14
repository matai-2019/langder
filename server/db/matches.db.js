const connection = require('./connection')

function getMatchesFirstCol (userId, db = connection) {
  return db
    .from('matches as m')
    .where('user1Id', userId)
    .join('profiles AS p', 'm.user2Id', 'p.userId')
    .select('p.userId', 'p.id AS profileId', 'p.name', 'p.description')
}

function getMatchesSecondCol (userId, db = connection) {
  return db
    .from('matches as m')
    .where('user2Id', userId)
    .join('profiles AS p', 'm.user1Id', 'p.userId')
    .select('p.userId', 'p.id AS profileId', 'p.name', 'p.description')
}

module.exports = {
  getUserMatches: async function (userId, db = connection) {
    const data = await getMatchesFirstCol(userId, db)
    const data2 = await getMatchesSecondCol(userId, db)

    if (data || data2) return [...data, ...data2]
  },
  getAllMatches: function (db = connection) {
    return db('matches')
  },
  addUserMatch: function (user1Id, user2Id, db = connection) {
    return db('matches')
      .insert({ user1Id, user2Id })
  }
}

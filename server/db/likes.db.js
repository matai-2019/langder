const connection = require('./connection')

module.exports = {
  addUserLike: function (userId, likedId, db = connection) {
    return db('likes')
      .insert({ userId, likedId })
  },

  getAllLikes: function (db = connection) {
    return db('likes')
  },
  getUserLikes: function (userId, likedId, db = connection) {
    return db('likes')
      .where('userId', 'like', likedId)
      .where('likedId', userId)
      .select()
      .first()
  }
}

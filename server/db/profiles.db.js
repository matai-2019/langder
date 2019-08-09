const connection = require('./connection')

module.exports = {
  getProfile: function (profileId, db = connection) {
    return db('profiles')
      .select('profiles.id', 'name', 'userId', 'email', 'description')
      .join('users', 'profiles.userId', 'users.id')
      .where('profiles.id', profileId)
      .first()
  },
  // add profile (has ticket)
  updateProfile: function (profileId, profile, db = connection) {
    return db('profiles')
      .where('id', profileId)
      .update({
        name: profile.name,
        description: profile.description
      })
  },
  deleteProfile: function (id, db = connection) {
    return db('profiles')
      .where('id', id)
      .del()
  }
}

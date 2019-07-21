const connection = require('./connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

function hashPassword (plainPassword) {
  return bcrypt.hash(plainPassword, saltRounds)
    .then(function (hash) {
      return hash
    })
}

function login (loginData, db = connection) {
  return db('users')
    .select()
    .where('password', loginData.password)
    .where('email', loginData.email)
    .first()
}

function getUsers (db = connection) {
  return db('users')
}

function getPotentialMatches (userId, db = connection) {
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

function getUser (id, db = connection) {
  return db('users')
    .join('profiles', 'users.id', 'profiles.userId')
    .where('users.id', id)
    .first()
    .select('users.id',
      'profiles.id AS profileId',
      'users.email',
      'profiles.name',
      'profiles.description')
}

async function addUser (user, db = connection) {
  const hashedUser = { ...user, password: await hashPassword(user.password) }
  return db('users')
    .insert(hashedUser)
    .then(idArray => {
      const userId = idArray[0]
      return db('profiles')
        .insert({ userId })
    })
}

function updateUser (user, db = connection) {
  return db('users')
    .where('id', user.id)
    .update({
      email: user.email,
      password: user.password
    })
}

function deleteUser (id, db = connection) {
  return db('users')
    .where('id', id)
    .del()
}

function getAllUsersLanguages (db = connection) {
  return db('userLanguages')
}

function getUserLanguages (userId, db = connection) {
  return db('userlanguages')
    .where({ userId: userId })
    .select('langId')
}

// add a language => stretch

// get languages => stretch
function getAllLanguages (db = connection) {
  return db('languages')
}

// get a language => stretch
// /*
// function getALanguage (languageId, db = connection) {
//   return db('languages')
//     .select()
//     .where('id', languageId)
//     .first()
// }
// */

// update language => stretch

function updateLanguage (language, db = connection) {
  return db('languages')
    .where('id', language.id)
    .update({
      name: language.name,
      description: language.description
    })
}

// delete language => stretch

// get a user's languages (has ticket)

async function addUserLanguage (userId, langIds, db = connection) {
  const data = langIds.map(langId => {
    return { userId: userId, langId: langId }
  })
  const result = await db('userLanguages').insert(data)
  return result
}

// update user language (has ticket)

// delete user language (has ticket)

async function deleteUserLanguage (userId, langId, db = connection) {
  return db('userLanguages')
    .where('userId', userId)
    .where('langId', langId)
    .del()
}

function getProfile (profileId, db = connection) {
  return db('profiles')
    .select()
    .where('id', profileId)
    .first()
}

// add profile (has ticket)

function updateProfile (profileId, profile, db = connection) {
  return db('profiles')
    .where('id', profileId)
    .update({
      name: profile.name,
      description: profile.description
    })
}

function deleteProfile (id, db = connection) {
  return db('profiles')
    .where('id', id)
    .del()
}

function addUserLike (userLike, db = connection) {
  return db('likes')
    .insert(userLike)
}

function getAllLikes (db = connection) {
  return db('likes')
}

function getUserMatches (userId, db = connection) {
  return db
    .from('matches AS m')
    .where(function () {
      this
        .where('user1Id', userId)
        .orWhere('user2Id', userId)
    })
    .join('profiles AS p1', 'm.user1Id', 'p1.userId')
    .join('profiles AS p2', 'm.user2Id', 'p2.userId')
    .select(
      'p1.userId AS p1UserId',
      'p1.name as p1Name',
      'p1.description as p1Description',
      'p2.userId AS p2UserId',
      'p2.name as p2Name',
      'p2.description as p2Description')
    .map(profile => {
      if (profile.p1UserId === userId) {
        delete profile.p1UserId
        delete profile.p1Name
        delete profile.p1Description
      } else {
        delete profile.p2UserId
        delete profile.p2Name
        delete profile.p2Description
      }
      console.log(profile)
      return profile
    })
}

function getAllMatches (db = connection) {
  return db('matches')
}

function addUserMatch (match, db = connection) {
  return db('matches')
    .insert(match)
}

function getUserLikes (userId, db = connection) {
  return db('likes')
    .where('userId', 'like', userId)
    .select()
}

module.exports = {
  hashPassword,
  login,
  getUser,
  getUsers,
  getPotentialMatches,
  getAllUsersLanguages,
  deleteUserLanguage,
  addUser,
  addUserLanguage,
  getProfile,
  updateProfile,
  updateUser,
  deleteUser,
  getUserLanguages,
  deleteProfile,
  getAllLanguages,
  updateLanguage,
  addUserLike,
  getAllLikes,
  getUserMatches,
  getAllMatches,
  addUserMatch,
  getUserLikes
}

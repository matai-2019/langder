require('babel-polyfill')
const env = require('./test-environment')
const userLangsDB = require('../../../server/db/userLanguages.db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.addUserLanguage adds 3 rows to userLanguages table', () => {
  expect.assertions(1)

  const expected = 7
  const userId = 1
  const languagesArray = [{ id: 1 }, { id: 2 }, { id: 3 }]

  return userLangsDB.addUserLanguage(userId, languagesArray, testDb)
    .then(async () => {
      const actual = await userLangsDB.getAllUsersLanguages(testDb)
      expect(actual.length).toBe(expected)
    })
})

test('db.getUserLanguages get a specific users languages', (done) => {
  const userId = 1

  userLangsDB.getUserLanguages(userId, testDb)
    .then(userlanguages => {
      expect(userlanguages.length).toBe(2)
      done()
    })
})

test('db.deleteUserLanguage deletes expected rows from userLanguages table', () => {
  expect.assertions(1)

  const expected = 2
  const userId = 1

  return userLangsDB.deleteUserLanguage(userId, testDb)
    .then(async () => {
      const actual = await userLangsDB.getAllUsersLanguages(testDb)
      expect(actual.length).toBe(expected)
    })
})

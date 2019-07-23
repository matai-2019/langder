require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

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
  const languagesArray = [1, 2, 3]

  return db.addUserLanguage(userId, languagesArray, testDb)
    .then(async () => {
      const actual = await db.getAllUsersLanguages(testDb)
      expect(actual.length).toBe(expected)
    })
})

test('db.getUserLanguages get a specific users languages', (done) => {
  const userId = 1

  db.getUserLanguages(userId, testDb)
    .then(userlanguages => {
      expect(userlanguages.length).toBe(2)
      done()
    })
})

test('db.deleteUserLanguage deletes expected rows from userLanguages table', () => {
  expect.assertions(1)

  const expected = 2
  const userId = 1

  return db.deleteUserLanguage(userId, testDb)
    .then(async () => {
      const actual = await db.getAllUsersLanguages(testDb)
      expect(actual.length).toBe(expected)
    })
})

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

  const expected = 6
  const userId = 1
  const languagesArray = [1, 2, 3]

  return db.addUserLanguage(userId, languagesArray, testDb)
    .then(async () => {
      const actual = await db.getAllUsersLanguages(testDb)
      expect(actual.length).toBe(expected)
    })
})

test('db.getUserLanguage get a specific user', () => {
  const userlangId = 2
  const expectedUser = 2
  const expectedLang = 1

  db.getUserLanguage(userlangId, testDb)
    .then(userlanguage => {
      const actualUser = userlanguage.userId
      const actualLang = userlanguage.langId

      expect(actualUser).toBe(expectedUser)
      expect(actualLang).toBe(expectedLang)
    })
})

test('db.deleteUserLanguage deletes 1 row from userLanguages table', () => {
  expect.assertions(1)

  const expected = 2
  const userId = 1
  const langId = 2

  return db.deleteUserLanguage(userId, langId, testDb)
    .then(async () => {
      const actual = await db.getAllUsersLanguages(testDb)
      expect(actual.length).toBe(expected)
    })
})

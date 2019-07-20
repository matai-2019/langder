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

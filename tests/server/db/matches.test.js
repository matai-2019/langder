require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getAllMatches returns all matches', () => {
  return db.getAllMatches(testDb)
    .then(matches => {
      expect(matches.length).toBe(2)
    })
})

test('db.addUserMatch adds a match to matches table', () => {
  const match = {
    user1Id: 3,
    user2Id: 2
  }
  return db.addUserMatch(match, testDb)
    .then(async () => {
      const matches = await db.getAllMatches(testDb)
      expect(matches.length).toBe(3)
    })
})

test('db.getUserMatches list all user matches', () => {
  expect.assertions(2)

  const userId = 3
  const expected = 1
  const expectedLen = 1
  return db.getUserMatches(userId, testDb)
    .then(actual => {
      expect(actual).toHaveLength(expectedLen)
      expect(actual[0].userId).toBe(expected)
    })
})

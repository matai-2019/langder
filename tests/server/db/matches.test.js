require('babel-polyfill')
const env = require('./test-environment')
const matchesDB = require('../../../server/db/matches.db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getAllMatches returns all matches', () => {
  return matchesDB.getAllMatches(testDb)
    .then(matches => {
      expect(matches.length).toBe(2)
    })
})

test('db.addUserMatch adds a match to matches table', done => {
  const user1Id = 3
  const user2Id = 2

  return matchesDB.addUserMatch(user1Id, user2Id, testDb)
    .then(async () => {
      const matches = await matchesDB.getAllMatches(testDb)
      expect(matches.length).toBe(3)
      done()
    }).catch(err => {
      expect(err).toBeNull()
      done()
    })
})

test('db.getUserMatches list all user matches', () => {
  expect.assertions(2)

  const userId = 3
  const expected = 1
  const expectedLen = 1
  return matchesDB.getUserMatches(userId, testDb)
    .then(actual => {
      expect(actual).toHaveLength(expectedLen)
      expect(actual[0].userId).toBe(expected)
    })
})

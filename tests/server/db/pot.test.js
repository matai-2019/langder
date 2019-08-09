require('babel-polyfill')
const env = require('./test-environment')
const potsDB = require('../../../server/db/pots.db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getPotentialMatches should return 3 potential matches', () => {
  expect.assertions(3)

  const userId = 1
  const expected = 2
  return potsDB.getPotentialMatches(userId, testDb)
    .then(results => {
      expect(results).toHaveLength(expected)
      expect(results[0].languages).toHaveLength(1)
      expect(results[1].languages).toHaveLength(1)
    })
})

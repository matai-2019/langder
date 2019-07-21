require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getPotentialMatches should return 3 potential matches', () => {
  const expected = 3
  return db.getPotentialMatches(testDb)
    .then(results => {
      expect(results).toHaveLength(expected)
    })
})

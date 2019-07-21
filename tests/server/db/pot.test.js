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
  expect.assertions(4)

  const expected = 3
  return db.getPotentialMatches(testDb)
    .then(results => {
      expect(results).toHaveLength(expected)
      expect(results[0].languages).toHaveLength(1)
      expect(results[1].languages).toHaveLength(1)
      expect(results[2].languages).toHaveLength(1)
    })
})

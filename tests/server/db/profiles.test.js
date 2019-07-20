const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

test('db.getProfile function should get a user of given id', () => {
  const profileId = 1
  const expected = 'test1'

  db.getProfile(profileId, testDb)
    .then(profile => {
      const actual = profile.name
      expected(actual).toBe(expected)
    })
})

afterEach(() => env.cleanup(testDb))

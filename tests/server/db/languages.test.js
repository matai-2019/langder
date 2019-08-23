const env = require('./test-environment')
const langDB = require('../../../server/db/languages.db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getAllLanguages returns array of 5', () => {
  const expected = 5

  return langDB.getAllLanguages(testDb)
    .then(languages => {
      const actual = languages.length
      expect(actual).toBe(expected)
    })
})

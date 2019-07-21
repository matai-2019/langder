const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

test('db.getAllLanguages returns array of 5', () => {
  const expected = 5

  return db.getAllLanguages(testDb)
    .then(languages => {
      const actual = languages.length
      expect(actual).toBe(expected)
    })
})

const db = require('../../../server/db/db')
const env = require('./test-environment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

test('db.updateLanguage update language to languages table', () => {
  const expected = 'Hindi'
  const id = 2

  return db.updateLanguage(id, testDb)
    .then(
      db.getLanguage(testDb)
        .then(language => {
          const actual = language.name
          expected(actual).toBe(expected)
        })
    )
})

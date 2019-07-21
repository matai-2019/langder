const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))


test('db.deleteProfile runs a successful delete', () => {
  return db.deleteProfile(1, testDb)
    .then(wasDeleteSuccessful => {
      expect(wasDeleteSuccessful).toBeTruthy()
    })
})

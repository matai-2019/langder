require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.hashPassword returns a hash string of length 60', async () => {
  const testPassword = 'testPassword'
  const expected = 60
  const actual = await db.hashPassword(testPassword)
  expect(actual.length).toBe(expected)
})

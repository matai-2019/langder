require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

// require('babel-register')({
//   presets: ['env'],
//   plugins: ['transform-async-to-generator']
// })

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.hashPassword returns a hash string of length 60', () => {
  expect.assertions(1)

  const testPassword = 'testPassword'
  const expected = 60
  db.hashPassword(testPassword).then(actual => expect(actual.length).toBe(expected))
})

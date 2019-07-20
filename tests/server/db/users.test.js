const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getUsers returns an array of 3 users', () => {
  expect.assertions(1)

  const expected = 3

  return db.getUsers(testDb)
    .then(users => {
      const actual = users.length
      expect(actual).toBe(expected)
    })
})

test('db.addUser adds user to users table', () => {
  const user = {
    email: 'ergoman@coffeepancakewafflebacon.com',
    password: 'Pa$$w0rd'
  }

  return db.addUser(user, testDb)
    .then(users => {
      const expected = users[0]
      const actual = 4
      expect(expected).toBe(actual)
    })
})

test('db.getUsers returns an array of 3 users but values from other tables', () => {
  expect.assertions(1)

  const expected = 3

  return db.getUsers(testDb)
    .then(users => {
      const actual = users.length
      expect(actual).toBe(expected)
    })
})

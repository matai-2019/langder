require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getUser returns a single user', () => {
  const expected = 'test1'
  const id = 1
  return db.getUser(id, testDb)
    .then(user => {
      const actual = user.name
      expect(actual).toBe(expected)
    })
})

test('db.getUsers returns an array of 3 users', () => {
  expect.assertions(1)

  const expected = 3

  return db.getUsers(testDb)
    .then(users => {
      const actual = users.length
      expect(actual).toBe(expected)
    })
})

test.skip('db.addUser adds user to users table', () => {
  const user = {
    email: 'ergoman@coffeepancakewafflebacon.com',
    password: 'Pa$$w0rd'
  }
  const expected = 4

  return db.addUser(user, testDb).then(async () => {
    const actual = await db.getUsers(testDb)
    expect(actual.length).toBe(expected)
  })
})

test.skip('db.deleteUser runs a successful delete', () => {
  return db.deleteUser(1, testDb)
    .then(
      db.getUsers()
        .then(users => {
          expect(users.length).toBe(2)
        }))
})

test('db.addUserLanguage adds languages to userLanguages table', () => {
  const user = 4
  const languages = [2, 3]
  return db.addUserLanguage(user, languages, testDb)
    .then(userLanguages => {
      console.log(userLanguages)
      expect(userLanguages[0]).toBe(6)
    })
})

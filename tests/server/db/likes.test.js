require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getUserLikes returns all a users likes', () => {
  const userId = 1
  return db.getUserLikes(userId, testDb)
    .then(likes => {
      console.log(likes)
      const actual = likes.length
      expect(actual).toBe(2)
    })
})

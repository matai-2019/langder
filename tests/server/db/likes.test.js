require('babel-polyfill')
const env = require('./test-environment')
const likesDB = require('../../../server/db/likes.db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

// test('db.getAllLikes gets all likes from the likes table', () => {
//   return db.getAllLikes(testDb)
//     .then(likes => {
//       expect(likes.length).toBe(4)
//     })
// })

// test('db.getUserLikes returns all a users likes', () => {
//   const userId = 1
//   return db.getUserLikes(userId, testDb)
//     .then(likes => {
//       const actual = likes.length
//       expect(actual).toBe(2)
//     })
// })

// test('db.addUserLike adds user like to likes table', () => {
//   const userLike = { userId: 1, likedId: 3 }
//   const expected = 5

//   return db.addUserLike(userLike, testDb)
//     .then(async () => {
//       const actual = await db.getAllLikes(testDb)
//       expect(actual.length).toBe(expected)
//     })
// })

test('test suite working', () => {
  expect(true).toBeTruthy()
})

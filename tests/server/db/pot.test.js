require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('', () => {
  return db.getPotentialMatches(testDb)
    .then(results => {
      console.log(results)
    })
})

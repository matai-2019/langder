const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.updateProfile returns an updated profile', () => {
  const profile = {
    id: 1,
    name: 'Yo',
    userId: 1,
    description: 'I have changed'
  }

  const expected = 3

  return db.updateProfile(profile, testDb)
    .then(profiles => {
      const actual 
      expect(actual).toBe(expected)
    })
})

const food = {
  id: 1,
  name: 'Nice',
  categoryId: 4,
  carbonOutput: 9,
  waterUsage: 1000
}

return db.editFood(food, testDb)
  .then(res => {
    expect(res.name).toBe(food.name)
    expect(res.category).toBe('Fish')
    expect(res.carbonOutput).toBe(food.carbonOutput)
    expect(res.waterUsage).toBe(food.waterUsage)
  })

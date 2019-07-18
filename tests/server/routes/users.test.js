// require('babel-polyfill')
import app from '../../../server/server'

const request = require('supertest')
const db = require('../../../server/db/db') // the mock

jest.mock('../../../server/db/db')

// beforeEach(() => {
//   console.log(db)
//   db.reset()
// })

test('POST / adds a user', () => {
  const testUser = { email: 'test@test.com', password: 'asdfas' }
  return request(app)
    .post('/api/v1/users')
    .send(testUser)
    .then(res => {
      expect(res.status).toBe(201)
    })
})

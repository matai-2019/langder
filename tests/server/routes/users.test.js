// require('babel-polyfill')
import app from '../../server/server'

const request = require('supertest')
const db = require('../../server/db/db') // the mock

jest.mock('../../server/db/db')

beforeEach(() => {
  db.reset()
})

test('POST / adds a user', () => {
  return request(app)
    .post('/api/v1/users')
    .then(res => {
      expect(res.code).toBe(201)
    })
})

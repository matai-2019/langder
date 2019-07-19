import request from 'supertest'
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  login: (loginData) => Promise.resolve(loginData)
}))

describe('Tests for authorization', () => {
  it('Succesfull login should return a auth token', done => {
    request(server)
      .post('/api/v1/login')
      .send({ password: 'password', email: 'test@test.com' })
      .then(res => {
        expect(res.body.token).not.toBeNull()
        expect(res.status).toBe(200)
        done()
      })
  })
})

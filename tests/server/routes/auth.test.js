import request from 'supertest'
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  login: () => Promise.resolve({ id: 1, email: 'email@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' })
}))

describe('Tests for authorization', () => {
  it('Succesfull login should return a auth token', done => {
    request(server)
      .post('/api/v1/login')
      .send({ password: 'password', email: 'email@email.com' })
      .then(res => {
        expect(res.body.auth).not.toBeNull()
        expect(res.status).toBe(200)
        done()
      })
  })
})

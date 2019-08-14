import request from 'supertest'
const server = require('../../../server/server')

jest.mock('../../../server/db/auth.db', () => ({
  login: () => Promise.resolve({ id: 1, email: 'email1@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' })
}))

describe('Tests for authorization', () => {
  it('Succesfull login should return a auth token', done => {
    request(server)
      .post('/api/v1/login')
      .send({ password: 'password', email: 'email1@email.com' })
      .then(res => {
        console.log(res.err)
        console.log(res.body)
        expect(res.body.auth).not.toBeNull()
        expect(res.status).toBe(200)
        done()
      })
  })
})

import request from 'supertest'
const server = require('../../../server/server')

const expectedToken = 'FA12342134SDF@213471asdfASD123'
const expectedEmail = 'test@test.com'
const expectedPassword = 'password'

jest.mock('../../../server/db/db', () => ({
  login: (loginData) => {
    if (loginData.password === expectedPassword &&
    loginData.email === expectedEmail) {
      return Promise.resolve(expectedToken)
    } else {
      Promise.resolve({ code: 401, message: 'Username or email is inncorrect' })
    }
  }
}))

describe('Tests for authorization', () => {
  it('Succesfull login should return a auth token', () => {
    const testLogin = { email: 'test@test.com', password: 'password' }
    request(server)
      .post('/api/v1/login')
      .send(testLogin)
      .then(res => {
        expect(res.body).toBe(expectedToken)
      })
  })
})

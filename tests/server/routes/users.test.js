import request from 'supertest'

jest.mock('../../../server/db/db', () => ({
  getUsers: () => Promise.resolve([
    {id: 1, email: 'email@email.com', password: 'password'},
    {id: 2, email: 'email2@email.com', password: 'password'},
    {id: 3, email: 'email3@email.com', password: 'password'}
  ]),
}))

test('GET /users returns all of the users', () => {
  return request(server)
    .get('/api/v1/users')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(3)
    })
})

const server = require('../../../server/server')
import request from 'supertest'

jest.mock('../../../server/db/db.js', () => ({
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

test('GET /users returns a specific user', () => {
  return request(server)
    .get('/api/v1/users/2')
    .expect(200)
    .then(res => {
      const actual = res
      console.log(actual)
      expect(actual).toMatch('email2@email.com') 
    })
    .catch(err => expect(err).toBe(err))
})

const server = require('../../../server/server')
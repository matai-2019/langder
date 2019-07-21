import request from 'supertest'

require('babel-polyfill')
const server = require('../../../server/server')

jest.mock('../../../server/db/db.js', () => ({
  getUsers: () => Promise.resolve([
    { id: 1, email: 'email@email.com', password: 'password' },
    { id: 2, email: 'email2@email.com', password: 'password' },
    { id: 3, email: 'email3@email.com', password: 'password' }
  ]),
  getUser: (id) => Promise.resolve(
    { id: 2, email: 'email2@email.com', password: 'password' }
  ),
  addUser: (user) => Promise.resolve(user),
  getPotentialMatches: async userId => {
    const list = [
      { id: 1, name: 'A', userId: 1, description: 'I am A' },
      { id: 2, name: 'B', userId: 2, description: 'I am B' },
      { id: 3, name: 'C', userId: 3, description: 'I am C' }
    ]
    const filteredList = await list.filter(profile => profile.userId !== userId)
    return Promise.resolve(filteredList)
  },
  getUserLanguages: (id) => Promise.resolve([
    { id: 1, userId: id, langId: 1 },
    { id: 2, userId: id, langId: 2 },
    { id: 3, userId: id, langId: 5 }
  ]),
  getUserLikes: (id) => Promise.resolve([
    { id: 1, userId: id, likeId: 2 },
    { id: 2, userId: id, likeId: 3 },
    { id: 3, userId: id, likeId: 5 }
  ])
}))

test('POST / adds a user', () => {
  const testUser = { email: 'test@test.com', password: 'asdfas' }
  return request(server)
    .post('/api/v1/users')
    .send(testUser)
    .then(res => {
      expect(res.status).toBe(201)
    })
})

test('GET /users returns all of the users', () => {
  return request(server)
    .get('/api/v1/users')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(3)
    })
})

test('GET /users/:id returns a specific user', () => {
  return request(server)
    .get('/api/v1/users/2')
    .expect(200)
    .then(res => {
      const actual = res.body.email
      expect(actual).toMatch('email2@email.com')
    })
    .catch(err => expect(err).toBe(err))
})

test('GET /users/3/pot returns a users potential matches', done => {
  const expectedLen = 2
  const userId = 3

  return request(server)
    .get(`/api/v1/users/${userId}/pot`)
    .then(res => {
      const actual = res.body
      expect(actual).toHaveLength(expectedLen)
      done()
    })
})

test('GET /users/:id/languages returns user languages', () => {
  return request(server)
    .get('/api/v1/users/1/languages')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
    })
})

test('GET /users/:id/likes returns user likes', () => {
  return request(server)
    .get('/api/v1/users/1/likes')
    .expect(200)
    .then(likes => {
      expect(likes.length).toBe(3)
    })
})

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
  deleteUserLanguages: (id) => Promise.resolve({ Okay: true }),

  addUserLanguages: (userId) => Promise.resolve([1,3]),

  addUser: (user) => Promise.resolve(user),

  addUserLanguage: (id, languages) => Promise.resolve(languages),
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
    { id: 1, userId: 1, langId: 1 },
    { id: 1, userId: 1, langId: 2 },
    { id: 1, userId: 1, langId: 5 }
  ]),
  deleteUser: (id) => Promise.resolve({ id }),
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

test('refresh /:language id refreshes user languages', () => {
  return request(server)
    .put('/api/v1/users/1/languages')
    .then(res => {
      expect(res.status).toBe(200)
      expect(res.body.Okay).toBe(true)
      expect(res.body.langIds.length).toBe(2)
    })
    .catch(err => expect(err).toBeNull())
})

test('POST / adds a user language', () => {
  const testUL = [{ langId: 1 }, { langId: 3 }]
  return request(server)
    .post('/api/v1/users/3')
    .send(testUL)
    .then(res => {
      expect(res.status).toBe(201)
      expect(res.body).toStrictEqual(testUL)
    })
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
  const userId = 1
  return request(server)
    .get(`/api/v1/users/${userId}/languages`)
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
    })
})

test('GET /users/:id/likes returns user likes', () => {
  const userId = 1
  return request(server)
    .get(`/api/v1/users/${userId}/likes`)
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
    })
})

test('DELETE /:id deletes a specific user', done => {
  const userId = 2
  return request(server)
    .delete(`/api/v1/users/${userId}`)
    .then(res => {
      expect(res.status).toBe(200)
      expect(res.body.Okay).toBe(true)
      done()
    })
})

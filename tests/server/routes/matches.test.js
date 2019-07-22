import request from 'supertest'
const server = require('../../../server/server')

jest.mock('../../../server/db/db.js', () => ({
  getUserMatches: () => Promise.resolve([{ id: 1, user1Id: 1, user2Id: 2 }])
}))

test('GET /api/v1/users/1/matches returns users matches given user id', () => {
  const userId = 3
  return request(server)
    .get(`/api/v1/users/${userId}/matches`)
    .expect(200)
    .then(res => {
      const actual = res.body
      expect(actual).toHaveLength(1)
    })
})

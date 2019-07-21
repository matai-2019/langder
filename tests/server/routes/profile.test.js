import request from 'supertest'
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  getProfile: (id) => Promise.resolve([
    { id: id, bio: 'neat neat', name: 'terry' },
    { id: 2, bio: 'nice nice', name: 'jerry' },
    { id: 3, bio: 'cool cool', name: 'merry' }
  ]),
  deleteProfile: (id) => Promise.resolve(1)
}))

test('DELETE /:id deletes a specific profile', () => {
  return request(server)
    .delete('/api/v1/users/1/profiles')
    .then(res => {
      expect(res.status).toBe(200)
    })
    .catch(err => expect(err).toBeNull())
})

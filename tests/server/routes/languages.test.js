import request from 'supertest'
const server = require('../../../server/server')

jest.mock('../../../server/db/languages.db.js', () => ({
  getAllLanguages: () => Promise.resolve([
    { id: 1, name: 'japanese', countryCode: 'jp' },
    { id: 2, name: 'chinese', countryCode: 'ch' },
    { id: 3, name: 'english', countryCode: 'en' }
  ])
}))

test('GET /languages returns all of the languages', () => {
  return request(server)
    .get('/api/v1/languages')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(3)
    })
})

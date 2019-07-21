import request from 'supertest'
require('babel-polyfill')
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  updateProfile: (profileId, profile) => Promise.resolve()
}))

describe('Tests for profiles', () => {
  it('/api/v1/profiles/1 should update profile 1', done => {
    request(server)
      .put('/api/v1/profiles/1')
      .then(() => {

      })
  })
})

import request from 'supertest'
require('babel-polyfill')
const server = require('../../../server/server')

const mockError500 = new Error({ code: 500, message: 'Sever error' })

jest.mock('../../../server/db/db', () => ({
  updateProfile: (profileId, profile) => {
    if (profileId === 1) {
      return Promise.resolve(profileId, profile)
    }
    return Promise.reject(mockError500)
  },
  getProfile: () => Promise.resolve({ id: 1, name: 'A', userId: 1, description: 'I am A' })
}))

describe('Tests for profiles', () => {
  it('/api/v1/profiles/1 should update profile 1', done => {
    request(server)
      .put('/api/v1/profiles/1')
      .then(() => {

      })
  })
})

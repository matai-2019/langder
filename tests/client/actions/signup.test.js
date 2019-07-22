import {
  addUserPending,
  addUserSuccess,
  addUserError,
  PENDING_ADDUSER,
  ADDUSER_SUCCESS,
  ADDUSER_ERROR } from '../../../client/actions/signup'
require('babel-polyfill')

describe('actions', () => {
  it('should create a pending action', () => {
    const actual = addUserPending()
    const expected = { type: PENDING_ADDUSER }
    expect(actual).toEqual(expected)
  })

  it('should create a success action', () => {
    const testUser = { email: 'test', password: 'password' }
    const actual = addUserSuccess(testUser)
    const expected = {
      type: ADDUSER_SUCCESS,
      user: { email: 'test', password: 'password' }
    }
    expect(actual).toEqual(expected)
  })

  it('should create a error action', () => {
    const actual = addUserError('test message')
    const expected = {
      type: ADDUSER_ERROR,
      message: 'test message'
    }
    expect(actual).toEqual(expected)
  })
})


import { loginSuccess, LOGIN_SUCCESS } from '../../../client/actions/login'


describe('actions', () => {
  it('should create a successful login action', () => {
    const testUser = { userName: 'balls', password: 'password'}
    const action = loginSuccess(testUser)
    const expected = {
      type: LOGIN_SUCCESS,
      user: { userName: 'balls', password: 'password'}
    }
    expect(action).toEqual(expected)
  })
})


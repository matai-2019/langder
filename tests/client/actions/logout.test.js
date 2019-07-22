import { logoutSuccess, LOGOUT_SUCCESS } from '../../../client/actions/logout'

describe('actions', () => {
  it('should create a successful logout action', () => {
    const testUser = { userName: 'balls', password: 'password' }
    const action = logoutSuccess(testUser)
    const expected = {
      type: LOGOUT_SUCCESS,
      user: { userName: 'balls', password: 'password' }
    }
    expected(action).toEqual(expected)
  })
})

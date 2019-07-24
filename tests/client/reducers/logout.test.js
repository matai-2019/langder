import { LOGOUT } from '../../../client/actions/logout'
import logout from '../../../client/reducers/login'

describe('logout pending', () => {
  it('returns pending logout on a successful logout', () => {
    const initialState = {
      user: {}
    }
    const expected = 'logged out'
    const action = { type: LOGOUT }
    const actual = logout(initialState, action)
    expect(actual).toBe(expected)
  })
})

import { PENDING_LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../../../client/actions/logout'
import logout from '../../client/reducers/logout'

describe('logout pending', () => {
  it('returns pending logout on a successful logout', () => {
    const initialState = { loading: true }
    const expected = {
      loading: true,
      completed: false
    }
    const action = { type: PENDING_LOGOUT, action: {} }
    const actual = logout(initialState, action)
    expect(actual).toEqual(expected)
  })
})

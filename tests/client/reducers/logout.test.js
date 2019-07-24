import { LOGOUT } from '../../../client/actions/logout'
import logoutReducer from '../../../client/reducers/logout'

describe('logout pending', () => {
  it('returns pending logout on a successful logout', () => {
    const initialState = {
      user: 'null',
      auth: 'null'
    }
    const expected = {
      user: null,
      auth: null
    }
    const action = { type: LOGOUT }
    const actual = logoutReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})

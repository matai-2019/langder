import { LOGOUT, logout } from '../../../client/actions/logout'

describe('actions', () => {
  it('should create a successful `logout` action', () => {
    const action = logout()
    const expected = {
      type: LOGOUT
    }
    expect(action).toEqual(expected)
  })
})

import { PENDING_CREATE_PROFILE, CREATE_PROFILE_SUCCESS, CREATE_PROFILE_ERROR } from '../../../client/actions/createProfile'
import createProfile from '../../../client/reducers/createProfile'

describe('get profile pending', () => {
  it('returns pending profile on a successful profile get', () => {
    const initialState = { loading: false }
    const expected = {
      loading: true,
      completed: false
    }
    const action = { type: PENDING_CREATE_PROFILE, action: {} }
    const actual = createProfile(initialState, action)
    expect(actual).toEqual(expected)
  })
})


import { PENDING_UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR } from '../../../client/actions/updateProfile'
import pendingUpdateProfile from '../../../client/reducers/updateProfile'


describe('updateProfile', () => {
  it('returns pending profile on a successful profile get', () => {
    const initialState = { loading: false }
    const expected = { 
      loading: true,
      completed: false 
    }
    const action = {type: PENDING_UPDATE_PROFILE, action: {}}
    const actual = pendingUpdateProfile(initialState, action)
    expect(actual).toEqual(expected)
  })
})

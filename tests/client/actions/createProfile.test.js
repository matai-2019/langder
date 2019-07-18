
import { createProfileSuccess, CREATE_PROFILE_SUCCESS } from '../../../client/actions/createProfile'

describe('actions', () => {
  it('should create a successful profile get action', () => {
    const testProfile = { profileID: '234', language: 'english'}
    const action = createProfileSuccess(testProfile)
    const expected = {
      type: CREATE_PROFILE_SUCCESS,
      profile: { profileID: '234', language: 'english'}
    }
    expect(action).toEqual(expected)
  })
})

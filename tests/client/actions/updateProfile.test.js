import { updateProfileSuccess, UPDATE_PROFILE_SUCCESS } from '../../../client/actions/updateProfile'

describe('actioins', () => {
  it('create successful profile get action', () => {
    const testUpdate = { profileID: 'meow', language: 'english' }
    const action = updateProfileSuccess(testUpdate)
    const expected = {
      type: UPDATE_PROFILE_SUCCESS,
      profile: { profileID: 'meow', language: 'english' }
    }
    expect(action).toEqual(expected)
  })
})

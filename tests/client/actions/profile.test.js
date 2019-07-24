import {
  updateProfileSuccess,
  UPDATE_PROFILE_SUCCESS,
  getProfileSuccess,
  GET_PROFILE_SUCCESS,
  pendingUpdateProfile,
  PENDING_UPDATE_PROFILE,
  updateProfileError,
  UPDATE_PROFILE_ERROR,
  getProfilePending,
  PENDING_GET_PROFILE,
  getProfileError,
  GET_PROFILE_ERROR,
  getLanguagesSuccess,
  GET_LANGUAGES_SUCCESS
} from '../../../client/actions/profile'

describe('get profile actions', () => {
  it('should create a successful profile get action', () => {
    const testProfile = { profileId: 2, name: 'tam', description: 'is cool' }
    const action = getProfileSuccess(testProfile)
    const expected = {
      type: GET_PROFILE_SUCCESS,
      profile: testProfile
    }
    expect(action).toEqual(expected)
  })
  it('create get profile pending action', () => {
    const action = getProfilePending()
    const expected = {
      type: PENDING_GET_PROFILE
    }
    expect(action).toEqual(expected)
  })
  it('create get profile error action', () => {
    const action = getProfileError()
    const expected = {
      type: GET_PROFILE_ERROR
    }
    expect(action).toEqual(expected)
  })
})

describe('update profile actions', () => {
  it('create successful update profile action', () => {
    const testUpdate = { profileId: 2, name: 'tam', description: 'is cool' }
    const action = updateProfileSuccess(testUpdate)
    const expected = {
      type: UPDATE_PROFILE_SUCCESS,
      profile: testUpdate
    }
    expect(action).toEqual(expected)
  })
  it('create update profile pending action', () => {
    const action = pendingUpdateProfile()
    const expected = {
      type: PENDING_UPDATE_PROFILE
    }
    expect(action).toEqual(expected)
  })
  it('create update profile error action', () => {
    const action = updateProfileError()
    const expected = {
      type: UPDATE_PROFILE_ERROR
    }
    expect(action).toEqual(expected)
  })
})

describe('get user languages actions', () => {
  it('create successful get user language success action', () => {
    const testLanguages = [{ name: 'english' }, { name: 'japanese' }]
    const action = getLanguagesSuccess(testLanguages)
    const expected = {
      type: GET_LANGUAGES_SUCCESS,
      languages: testLanguages
    }
    expect(action).toEqual(expected)
  })
})

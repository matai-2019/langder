import {
  PENDING_UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  PENDING_GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  GET_LANGUAGES_SUCCESS
} from '../../../client/actions/profile'
import profile from '../../../client/reducers/profile'

describe('get profile', () => {
  it('returns pending profile when pending', () => {
    const initialState = { pending: false }
    const expected = {
      pending: true
    }
    const action = { type: PENDING_GET_PROFILE }
    const actual = profile(initialState, action)
    expect(actual).toEqual(expected)
  })
  it('returns get profile error when error', () => {
    const initialState = { pending: false }
    const error = 'error messages'
    const expected = {
      error,
      pending: false
    }
    const action = { type: GET_PROFILE_ERROR, error }
    const actual = profile(initialState, action)
    expect(actual).toEqual(expected)
  })
  it('returns profile on a successful profile get', () => {
    const initialState = { pending: true }
    const testProfile = {
      id: 1,
      name: 'user1',
      description: 'user 1 description'
    }
    const expected = {
      ...testProfile,
      pending: false
    }
    const action = { type: GET_PROFILE_SUCCESS, profile: testProfile }
    const actual = profile(initialState, action)
    expect(actual).toStrictEqual(expected)
  })
  it('returns languages on a successful languages get', () => {
    const initialState = { pending: false }
    const languages = ['english', 'japanese']
    const expected = {
      pending: false,
      languages
    }
    const action = { type: GET_LANGUAGES_SUCCESS, languages }
    const actual = profile(initialState, action)
    expect(actual).toStrictEqual(expected)
  })
})

describe('update profile', () => {
  it('returns pending update profile when pending', () => {
    const initialState = { pending: false }
    const expected = {
      pending: true
    }
    const action = { type: PENDING_UPDATE_PROFILE }
    const actual = profile(initialState, action)
    expect(actual).toEqual(expected)
  })
  it('returns update profile error when error', () => {
    const initialState = { pending: false }
    const error = 'error messages'
    const expected = {
      error,
      pending: false
    }
    const action = { type: UPDATE_PROFILE_ERROR, error }
    const actual = profile(initialState, action)
    expect(actual).toEqual(expected)
  })
  it('returns profile on a successful profile get', () => {
    const initialState = { pending: true }
    const testProfile = {
      id: 1,
      name: 'user1',
      description: 'user 1 description'
    }
    const expected = {
      pending: false
    }
    const action = { type: UPDATE_PROFILE_SUCCESS, testProfile }
    const actual = profile(initialState, action)
    expect(actual).toEqual(expected)
  })
})

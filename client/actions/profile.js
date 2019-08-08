import * as profilesAPI from '../api/profiles.api'
import * as usersAPI from '../api/users.api'
export const PENDING_UPDATE_PROFILE = 'PENDING_UPDATE_PROFILE'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR'

export const PENDING_GET_PROFILE = 'PENDING_GET_PROFILE'
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR'
export const GET_LANGUAGES_SUCCESS = 'GET_LANGUAGES_SUCCESS'

export function getProfilePending () {
  return {
    type: PENDING_GET_PROFILE
  }
}

export function getProfileSuccess (profile) {
  return {
    type: GET_PROFILE_SUCCESS,
    profile
  }
}

export function getProfileError (message) {
  return {
    type: GET_PROFILE_ERROR,
    message
  }
}

export function getLanguagesSuccess (languages) {
  return {
    type: GET_LANGUAGES_SUCCESS,
    languages
  }
}

export function getProfile (id) {
  return dispatch => {
    dispatch(getProfilePending())
    profilesAPI.getProfile(id)
      .then(res => {
        dispatch(getProfileSuccess(res.body))
        return usersAPI.getLanguages(id)
          .then(res => {
            dispatch(getLanguagesSuccess(res.body))
          })
      })
      .catch(err => dispatch(getProfileError(err.message)))
  }
}

export function pendingUpdateProfile () {
  return {
    type: PENDING_UPDATE_PROFILE
  }
}

export function updateProfileSuccess (profile) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    profile
  }
}

export function updateProfileError (message) {
  return {
    type: UPDATE_PROFILE_ERROR,
    message
  }
}

export function updateProfile (data) {
  console.log('zee data', data)

  return dispatch => {
    dispatch(pendingUpdateProfile())
    profilesAPI.updateProfile(data)
      .then(() =>
        usersAPI.updateLanguages(data)
          .then(res => dispatch(updateProfileSuccess(res.body)))
      )
      .catch(err => dispatch(updateProfileError(err.mesage)))
  }
}

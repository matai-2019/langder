import request from 'superagent'

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
    request
      .get(`/api/v1/profiles/${id}`)
      .then(res => {
        dispatch(getProfileSuccess(res.body))
        return request
          .get(`/api/v1/users/${id}/languages`)
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

export function updateProfile ({ userId, profileId, languages, name, description }) {
  return dispatch => {
    dispatch(pendingUpdateProfile())

    request.put(`/api/v1/profiles/${profileId}`)
      .send({ name, description })
      .then((res) => {
        request.put(`/api/v1/users/${userId}/languages`)
          .send(languages)
          .then(res => dispatch(updateProfileSuccess(res.body)))
          .catch(err => dispatch(updateProfileError(err.mesage)))
      })
  }
}

import request from 'superagent'

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

import request from 'superagent'

export const PENDING_GET_PROFILE = 'PENDING_GET_PROFILE'
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR'

export function getProfilePending () {
  return {
    type: PENDING_GET_PROFILE
  }
}

export function getProfileSuccess (user) {
  return {
    type: GET_PROFILE_SUCCESS,
    user
  }
}

export function getProfileError (message) {
  return {
    type: GET_PROFILE_ERROR,
    message
  }
}

export function getProfile (id) {
  return dispatch => {
    dispatch(getProfilePending())
    request
      .get(`/api/v1/profiles/${id}`)
      .then(res => dispatch(getProfileSuccess(res.body)))
      .catch(err => dispatch(getProfileError(err.message)))
  }
}

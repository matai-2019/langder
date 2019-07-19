import request from 'superagent'

export const PENDING_UPDATE_PROFILE = 'PENDING_UPDATE_PROFILE'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR'

export function updateProfile () {
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

export function updateProfilePending (profileId) {
  return dispatch => {
    dispatch(updateProfile())

    request.put(`/api/v1/user/${profileId}`)
      .then(res => dispatch(updateProfileSuccess(res.body)))
      .catch(err => dispatch(updateProfileError(err.mesage)))
  }
}

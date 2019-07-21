import request from 'superagent'

export const PENDING_CREATE_PROFILE = 'PENDING_CREATE_PROFILE'
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS'
export const CREATE_PROFILE_ERROR = 'CREATE_PROFILE_ERROR'

export function createProfile () {
  return {
    type: PENDING_CREATE_PROFILE
  }
}

export function createProfileSuccess (profile) {
  return {
    type: CREATE_PROFILE_SUCCESS,
    profile
  }
}

export function createProfileError (message) {
  return {
    type: CREATE_PROFILE_ERROR,
    message
  }
}

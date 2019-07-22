import request from 'superagent'
import { loginError } from './login'

export const PENDING_LOGOUT = 'PENDING_LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

export function logoutPending () {
  return {
    type: PENDING_LOGOUT
  }
}

export function logoutSuccess (user) {
  return {
    type: LOGOUT_SUCCESS,
    user
  }
}

export function logoutError (message) {
  return {
    type: LOGOUT_ERROR,
    message
  }
}

export function logout (user) {
  return dispatch => {
    dispatch(logoutPending())
    request
      .post('/api/v1/logout')
      .send(user)
      .then(res => dispatch(logoutSuccess(res.body)))
      .then(err => dispatch(loginError(err.message)))
  }
}

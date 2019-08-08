import * as loginAPI from '../api/login.api'

export const PENDING_LOGIN = 'PENDING_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function loginPending () {
  return {
    type: PENDING_LOGIN
  }
}

export function loginSuccess (user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export function loginError (message) {
  return {
    type: LOGIN_ERROR,
    message
  }
}

export function login (user) {
  return dispatch => {
    dispatch(loginPending())
    loginAPI.login(user)
      .then(res => dispatch(loginSuccess(res.body)))
      .catch(err => dispatch(loginError(err.message)))
  }
}

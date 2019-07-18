import request from 'superagent'

export const PENDING_LOGIN = 'PENDING_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function login () {
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

export function fetchLogin () {
  return dispatch => {
    dispatch(fetchLogin())

    request
      .get('/api/v1/users') //<<< Don't know the path
      .then(res => dispatch(loginSuccess(res.body)))
      .catch(err => dispatch(loginError(err.message)))
  }
}

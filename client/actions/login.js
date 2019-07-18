import request from 'superagent'

export function login () {
  return {
    type: 'LOGIN'
  }
}

export function loginSuccess (user) {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

export function loginError (message) {
  return {
    type: 'LOGIN_ERROR',
    message
  }
}

export function login () {
  return dispatch => {
    dispatch(login())

    request
      .get('/api/users') //<<< Don't know the path
      .then(res => dispatch(loginSuccess(res.body)))
      .catch(err => dispatch(loginError(err.message)))
  }
}


import request from 'superagent'

export function signup () {
  return {
    type: 'SIGNUP'
  }
}

export function signupSuccess (user) {
  return {
    type: 'SIGNUP_SUCCESS',
    user
  }
}

export function signupError (message) {
  return {
    type: 'SIGNUP_ERROR',
    message
  }
}

export function signup () {
  return dispatch => {
    dispatch(signup())

    request
      .get('/api/users')
      .then(res => dispatch(signupSuccess(res.body)))
      .catch(err => dispatch(signupError(err.message)))
  }
}

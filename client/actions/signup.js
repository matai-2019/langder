import request from 'superagent'

export const PENDING_SIGNUP = 'PENDING_SIGNUP'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'

export function signup () {
  return {
    type: PENDING_SIGNUP
  }
}

export function signupSuccess (user) {
  return {
    type: SIGNUP_SUCCESS,
    user
  }
}

export function signupError (message) {
  return {
    type: SIGNUP_ERROR,
    message
  }
}


// export function fetchSign () {
//   return dispatch => {
//     dispatch(fetchSign())
//     
//     request
//       .get('/api/users')
//       .then(res => dispatch(signupSuccess(res.body)))
//       .catch(err => dispatch(signupError(err.message)))
//   }
// }

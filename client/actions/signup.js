import request from 'superagent'

export const PENDING_ADDUSER = 'PENDING_ADDUSER'
export const ADDUSER_SUCCESS = 'ADDUSER_SUCCESS'
export const ADDUSER_ERROR = 'ADDUSER_ERROR'

export function addUser () {
  return {
    type: PENDING_ADDUSER
  }
}

export function addUserSuccess (user) {
  return {
    type: ADDUSER_SUCCESS,
    user
  }
}

export function addUserError (message) {
  return {
    type: ADDUSER_ERROR,
    message
  }
}

// export function fetchSign () {
//   return dispatch => {
//     dispatch(fetchSign())
    
//     request
//       .get('/api/users')
//       .then(res => dispatch(signupSuccess(res.body)))
//       .catch(err => dispatch(signupError(err.message)))
//   }
// }

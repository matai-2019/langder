import request from 'superagent'

export const PENDING_ADDUSER = 'PENDING_ADDUSER'
export const ADDUSER_SUCCESS = 'ADDUSER_SUCCESS'
export const ADDUSER_ERROR = 'ADDUSER_ERROR'

export function addUserPending () {
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

// export function addUser () {
//   return dispatch => {
//     dispatch(addUserPending())
//     request
//       .post('/api/v1/users')
//       .then(res => dispatch(addUserSuccess(res.body)))
//       .catch(err => dispatch(addUserError(err.message)))
//   }
// }

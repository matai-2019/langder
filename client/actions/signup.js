import * as usersAPI from '../api/users.api'
import * as loginAPI from '../api/login.api'

import { loginSuccess } from './login'
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

export function addUser (user) {
  return dispatch => {
    dispatch(addUserPending())
    usersAPI.addUser(user)
      .then(res => {
        const userId = res.body
        if (userId) {
          dispatch(addUserSuccess(user))
          return loginAPI.login(user)
        } else {
          throw new Error('No New User Added')
        }
      })
      .then(res => {
        dispatch(loginSuccess(res.body))
      })
      .catch(err => dispatch(addUserError(err.message)))
  }
}

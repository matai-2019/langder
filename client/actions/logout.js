import request from 'superagent'
import { loginError } from './login'

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'
export const LOGOUT = 'LOGOUT'

/*
export function logoutSuccess () {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logoutError (message) {
  return {
    type: LOGOUT_ERROR,
    message
  }
}
*/

export function logout () {
  return { type: LOGOUT }
}

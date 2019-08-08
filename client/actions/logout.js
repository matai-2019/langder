export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'
export const LOGOUT = 'LOGOUT'

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
  return { type: LOGOUT }
}

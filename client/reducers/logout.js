import {
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../actions/logout'

export default function logout (state = {}, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        user: null,
        auth: null
      }
    case LOGOUT_SUCCESS:
      return {
        user: action.user
      }
    case LOGOUT_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

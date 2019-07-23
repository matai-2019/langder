import {
  PENDING_ADDUSER,
  ADDUSER_SUCCESS,
  ADDUSER_ERROR
} from '../actions/signup'

export default function addUser (state = {}, action) {
  switch (action.type) {
    case PENDING_ADDUSER:
      return {
        pending: true
      }
    case ADDUSER_SUCCESS:
      return action.user

    case ADDUSER_ERROR:
      return {
        pending: false,
        error: action.error
      }

    default:
      return state
  }
}

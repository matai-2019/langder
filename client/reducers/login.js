import {
  PENDING_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../actions/login'

// put to the side
export default function login (state = {}, action) {
  switch (action.type) {
    case PENDING_LOGIN:
      return {
        pending: true,
        completed: false
      }

    case LOGIN_SUCCESS:
      return action.user

    case LOGIN_ERROR:
      return {
        pending: false,
        error: action.error
      }
      // delete for later
      // case userConstants.DELETE_REQUEST:
      //   return {
      //     ...state,
      //     items: state.items.map(user =>
      //       user.id === action.id
      //           ? { ...user, deleting: true }
      //           : user
      //       )
      //     }

    default:
      return state
  }
}

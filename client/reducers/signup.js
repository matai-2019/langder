import {
  PENDING_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../actions/signup'


export default function signup (state = {}, action) {
  switch (action.type) {
    case PENDING_SIGNUP:
      return {
        loading: true
      }
    case SIGNUP_SUCCESS:
      return { 
        item: action.user 
      }

    case SIGNUP_ERROR:
      return {
          error: action.error
        }  

    default:
      return state
  }
}

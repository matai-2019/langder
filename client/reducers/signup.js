import {
  PENDING_ADDUSER,
  ADDUSER_SUCCESS,
  ADDUSER_ERROR
} from '../actions/signup'

export default function addUser (state = {}, action) {
  switch (action.type) {
    case PENDING_ADDUSER:
      return {
        loading: true
      }
    case ADDUSER_SUCCESS:
      return { 
        user: action.user 
      }

    case ADDUSER_ERROR:
      return {
          error: action.error
        }  

    default:
      return state
  }
}


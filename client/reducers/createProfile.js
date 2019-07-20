import {
  PENDING_CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR
} from '../actions/createProfile'

export default function createProfile (state = {}, action) {
  switch (action.type) {
    case PENDING_CREATE_PROFILE:
      return {
        loading: true,
        completed: false
      }
    case CREATE_PROFILE_SUCCESS:
      return { 
        user: action.profile
      }

    case CREATE_PROFILE_ERROR:
      return {
          error: action.error
        }  

    default:
      return state
  }
}

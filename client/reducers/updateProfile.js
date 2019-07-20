import {
  PENDING_UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR
} from '../actions/updateProfile'

export default function updateProfile (state = {}, action) {
  switch (action.type) {
    case PENDING_UPDATE_PROFILE:
      return {
        loading: true,
        completed: false
      }
    case UPDATE_PROFILE_SUCCESS:
      return { 
        item: action.profile
      }

    case UPDATE_PROFILE_ERROR:
      return {
          error: action.error
        }  

    default:
      return state
  }
}

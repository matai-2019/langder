import {
  PENDING_GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR
} from '../actions/getProfile'

export default function getProfile (state = [], action) {
  switch (action.type) {
    case PENDING_GET_PROFILE:
      return {
        loading: true,
        completed: false
      }
    case GET_PROFILE_SUCCESS:
      return {
        profile: action.profile
      }
    case GET_PROFILE_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

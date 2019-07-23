import {
  PENDING_UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  PENDING_GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  GET_LANGUAGES_SUCCESS
} from '../actions/profile'

export default function profile (state = {}, action) {
  switch (action.type) {
    case PENDING_UPDATE_PROFILE:
      return {
        pending: true
      }
    case UPDATE_PROFILE_SUCCESS:
      return {
        user: action.profile,
        pending: false
      }

    case UPDATE_PROFILE_ERROR:
      return {
        error: action.error
      }
    case PENDING_GET_PROFILE:
      return {
        pending: true
      }
    case GET_PROFILE_SUCCESS:
      return { ...state, ...action.profile, pending: false }
    case GET_PROFILE_ERROR:
      return {
        error: action.error
      }
    case GET_LANGUAGES_SUCCESS:
      return { ...state, languages: action.languages }
    default:
      return state
  }
}

import {
  PENDING_POTENTIAL_MATCHES,
  POTENTIAL_MATCHES_SUCCESS,
  POTENTIAL_MATCHES_ERROR,
  PENDING_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  PENDING_LIST_MATCHES,
  LIST_MATCHES_SUCCESS,
  LIST_MATCHES_ERROR,
  PENDING_GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  GET_LANGUAGES_SUCCESS,
  PENDING_UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  PENDING_ADDUSER,
  ADDUSER_SUCCESS,
  ADDUSER_ERROR
} from '../actions/potMatches'

export default function infoReducer (state = { pending: true }, action) {
  switch (action.type) {
    case PENDING_LIST_MATCHES:
    case PENDING_LOGIN:
    case PENDING_POTENTIAL_MATCHES:
    case PENDING_UPDATE_PROFILE:
    case PENDING_GET_PROFILE:
    case PENDING_ADDUSER :
      return {
        ...state,
        pending: true
      }
    case ADDUSER_SUCCESS :
    case UPDATE_PROFILE_SUCCESS:
    case GET_PROFILE_SUCCESS:
    case LIST_MATCHES_SUCCESS:
    case LOGIN_SUCCESS:
    case POTENTIAL_MATCHES_SUCCESS:
    case GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      }
    case ADDUSER_ERROR :
    case UPDATE_PROFILE_ERROR:
    case GET_PROFILE_ERROR:
    case LIST_MATCHES_ERROR:
    case LOGIN_ERROR:
    case POTENTIAL_MATCHES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.message
      }
    default:
      return state
  }
}

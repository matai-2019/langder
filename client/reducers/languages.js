import {
  GET_ALL_LANGUAGES_ERROR,
  GET_ALL_LANGUAGES_SUCCESS
} from '../actions/languages'

export default function createProfile (state = {}, action) {
  switch (action.type) {
    case GET_ALL_LANGUAGES_SUCCESS:
      return {
        user: action.languages
      }
    case GET_ALL_LANGUAGES_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

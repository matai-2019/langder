import {
  GET_ALL_LANGUAGES_ERROR,
  GET_ALL_LANGUAGES_SUCCESS
} from '../actions/languages'

export default function languages (state = [], action) {
  switch (action.type) {
    case GET_ALL_LANGUAGES_SUCCESS:
      return action.languages
    case GET_ALL_LANGUAGES_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

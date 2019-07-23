import {
  PENDING_LIST_MATCHES,
  LIST_MATCHES_SUCCESS,
  LIST_MATCHES_ERROR } from '../actions/listMatches'

export default function listMatches (state = [], action) {
  switch (action.type) {
    case PENDING_LIST_MATCHES:
      return {
        loading: true,
        completed: false
      }
    case LIST_MATCHES_SUCCESS:
      return {
        matches: action.matches
      }
    case LIST_MATCHES_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

import {
  REJECT_POTENTIAL_MATCH,
  PENDING_POTENTIAL_MATCHES,
  POTENTIAL_MATCHES_SUCCESS,
  POTENTIAL_MATCHES_ERROR
} from '../actions/potentialMatches'

export default function potentialMatches (state = {}, action) {
  switch (action.type) {
    case PENDING_POTENTIAL_MATCHES:
      return {
        loading: true,
        completed: false
      }
    case POTENTIAL_MATCHES_SUCCESS:
      return {
        potentialMatches: action.users
      }
    case POTENTIAL_MATCHES_ERROR:
      return {
        error: action.error
      }
    case REJECT_POTENTIAL_MATCH:
      return {
        potentialMatches: state.potentialMatches.pop()
      }
    default:
      return state
  }
}

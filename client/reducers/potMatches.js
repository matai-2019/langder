import { PENDING_POTENTIAL_MATCHES, POTENTIAL_MATCHES_SUCCESS, POTENTIAL_MATCHES_ERROR } from '../actions/potMatches'

export default function potMatches (state = [], action) {
  switch (action.type) {
    case PENDING_POTENTIAL_MATCHES:
      return {
        loading: true,
        completed: false
      }
    case POTENTIAL_MATCHES_SUCCESS:
      return {
        potMatches: action.potMatches
      }
    case POTENTIAL_MATCHES_ERROR:
      return {
        error: action.error
      }
    case REJECT_POTENTIAL_MATCH:
      poppedPotMatches = state.potMatches
      poppedPotMatches.pop()
      return {
        potMatches: poppedPotMatches
      }
    default:
      return state
  }
}

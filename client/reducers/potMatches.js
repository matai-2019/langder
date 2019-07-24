import {
  NEXT_POTENTIAL_MATCH,
  PENDING_POTENTIAL_MATCHES,
  POTENTIAL_MATCHES_SUCCESS,
  POTENTIAL_MATCHES_ERROR,
  ADD_LIKE_ERROR
} from '../actions/potMatches'

export default function potMatches (state = [], action) {
  let poppedPotMatches = []
  switch (action.type) {
    case PENDING_POTENTIAL_MATCHES:
      return {
        pending: true,
        completed: false
      }
    case POTENTIAL_MATCHES_SUCCESS:
      return action.potMatches
    case POTENTIAL_MATCHES_ERROR:
      return {
        error: action.error
      }
    case NEXT_POTENTIAL_MATCH:
      poppedPotMatches = state
      poppedPotMatches.shift(0, 1)
      return poppedPotMatches
    case ADD_LIKE_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

import {
  NEXT_POTENTIAL_MATCH,
  PENDING_POTENTIAL_MATCHES,
  POTENTIAL_MATCHES_SUCCESS,
  POTENTIAL_MATCHES_ERROR,
  ADD_LIKE_ERROR
} from '../actions/potMatches'

const initialState = {
  pending: false,
  initial: true
}

export default function potMatches (state = initialState, action) {
  let newPotMatches = []
  let activePotMatch = {}
  switch (action.type) {
    case PENDING_POTENTIAL_MATCHES:
      return {
        pending: true,
        initial: false
      }
    case POTENTIAL_MATCHES_SUCCESS:
      return {
        pending: false,
        pot: action.potMatches
      }
    case POTENTIAL_MATCHES_ERROR:
      return {
        error: action.error
      }
    case NEXT_POTENTIAL_MATCH:
      newPotMatches = state.pot
      activePotMatch = newPotMatches.shift()
      return {
        pending: false,
        pot: newPotMatches
      }
    case ADD_LIKE_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

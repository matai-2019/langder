import {
  ADD_LIKE,
  ADD_LIKE_ERROR
} from '../actions/potentialMatches'

export default function likes (state = [], action) {
  switch (action.type) {
    case ADD_LIKE:
      return {
        likes: action.like
      }
    case ADD_LIKE_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

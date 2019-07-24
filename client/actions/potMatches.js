import request from 'superagent'

export const PENDING_POTENTIAL_MATCHES = 'PENDING_POTENTIAL_MATCHES'
export const POTENTIAL_MATCHES_SUCCESS = 'POTENTIAL_MATCHES_SUCCESS'
export const POTENTIAL_MATCHES_ERROR = 'POTENTIAL_MATCHES_ERROR'
export const REJECT_POTENTIAL_MATCH = 'REJECT_POTENTIAL_MATCH'
export const NEXT_POTENTIAL_MATCH = 'NEXT_POTENTIAL_MATCH'
export const ADD_LIKE_ERROR = 'ADD_LIKE_ERROR'

export function nextPotMatch () {
  return {
    type: NEXT_POTENTIAL_MATCH
  }
}
export function addLikeError (err) {
  return {
    type: ADD_LIKE_ERROR,
    error: err
  }
}

export function likePotMatch (userId, likedUser) {
  return dispatch => {
    request
      .post(`/api/v1/users/${userId}/likes`)
      .send({ likedId: likedUser })
      .then(() => dispatch(nextPotMatch()))
      .catch(err => dispatch(addLikeError(err.message)))
  }
}

export function pendingPotentialMatches () {
  return {
    type: PENDING_POTENTIAL_MATCHES
  }
}

export function potentialMatchesSuccess (potMatches) {
  return {
    type: POTENTIAL_MATCHES_SUCCESS,
    potMatches
  }
}

export function potentialMatchesError (message) {
  return {
    type: POTENTIAL_MATCHES_ERROR,
    message
  }
}

export function fetchPotMatches (userId) {
  return dispatch => {
    dispatch(pendingPotentialMatches())
    request.get(`/api/v1/users/${userId}/pot`)
      .then(res => dispatch(potentialMatchesSuccess(res.body)))
      .catch(err => dispatch(potentialMatchesError(err.message)))
  }
}

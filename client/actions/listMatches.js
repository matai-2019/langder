import request from 'superagent'

export const PENDING_LIST_MATCHES = 'PENDING_LIST_MATCHES'
export const LIST_MATCHES_SUCCESS = 'LIST_MATCHES_SUCCESS'
export const LIST_MATCHES_ERROR = 'LIST_MATCHES_ERROR'

export function listMatchesPending () {
  return {
    type: PENDING_LIST_MATCHES
  }
}

export function listMatchesSuccess (matches) {
  return {
    type: LIST_MATCHES_SUCCESS,
    matches
  }
}

export function listMatchesError (message) {
  return {
    type: LIST_MATCHES_ERROR,
    message
  }
}

export function listMatches (userId) {
  return dispatch => {
    dispatch(listMatchesPending())
    request
      .get(`/api/v1/users/${userId}/matches`)
      .then(res => dispatch(listMatchesSuccess(res.body)))
      .catch(err => dispatch(listMatchesError(err.message)))
  }
}

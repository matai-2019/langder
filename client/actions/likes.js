import request from 'superagent'

export const LIKE_POTENTIAL_MATCH = 'LIKE_POTENTIAL_MATCH'
export const ADD_LIKE_ERROR = 'ADD_LIKE_ERROR'

export function addlike () {
  return {
    type: LIKE_POTENTIAL_MATCH
  }
}

export function addLikeError () {
  return {
    type: ADD_LIKE_ERROR
  }
}

export function likePotMatch (likedUser) {
  return dispatch => {
    request
      .post(`/api/v1/users/languages`)
      .send(likedUser)
      .then(res => dispatch(addlike(likedUser)))
      .catch(err => dispatch(addLikeError(err.message)))
  }
}

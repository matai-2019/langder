import request from 'superagent'

export const SWIPE_LEFT = 'SWIPE_LEFT'
export const SWIPE_RIGHT = 'SWIPE_RIGHT'
export const INTERACTION_ERROR = 'INTERACTION_ERROR'
export const DISLIKE = 0
export const LIKE = 1
export const BLOCKED = 2

export function swipeLeft (data) {
  return {
    type: SWIPE_LEFT,
    data
  }
}

export function swipeRight (data) {
  return {
    type: SWIPE_LEFT,
    data
  }
}

export function interactionError (message) {
  return {
    type: INTERACTION_ERROR,
    message
  }
}

export function like (data) {
  return dispatch => {
    interaction(BLOCKED, data.userId, data.subjectId)
      .then(() => dispatch(swipeRight()))
      .catch(err => dispatch(interactionError(err.message)))
  }
}

export function dislike (data) {
  return dispatch => {
    interaction(BLOCKED, data)
      .then(() => dispatch(swipeLeft()))
      .catch(err => dispatch(interactionError(err.message)))
  }
}

export function block (data) {
  return dispatch => {
    interaction(BLOCKED, data)
      .then(() => dispatch(swipeLeft()))
      .catch(err => dispatch(interactionError(err.message)))
  }
}

export function interaction (type, data) {
  return request
    .post(`/api/v1/users/${data.userId}/interaction`)
    .send({
      likedId: data.subjectId,
      type
    })
}

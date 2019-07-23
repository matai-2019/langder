import {
  SET_TOAST_HIDDEN,
  SET_TOAST_ISVISIBLE
}
  from '../actions/toastMessage'

export default function toastReducer (state = false, action) {
  switch (action.type) {
    case SET_TOAST_HIDDEN:
      return false
    case SET_TOAST_ISVISIBLE:
      return true
    default:
      return state
  }
}

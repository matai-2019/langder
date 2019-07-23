export const SET_TOAST_ISVISIBLE = 'SET_TOAST_ISVISIBLE'
export const SET_TOAST_HIDDEN = 'SET_TOAST_HIDDEN'

export function toggleToastVisible () {
  return {
    type: SET_TOAST_ISVISIBLE
  }
}

export function toggleToastHidden () {
  return {
    type: SET_TOAST_HIDDEN
  }
}

export function toastCountDown () {
  return dispatch => {
    dispatch(toggleToastVisible())
    setTimeout(() => {
      dispatch(toggleToastHidden())
    }, 3000)
  }
}

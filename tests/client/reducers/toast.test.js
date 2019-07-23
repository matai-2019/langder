import { SET_TOAST_HIDDEN, SET_TOAST_ISVISIBLE } from '../../../client/actions/toastMessage'
import toastIsVisible from '../../../client/reducers/toastMessage'

describe('Reducers test for state of toast', () => {
  it('Reducer can set toastIsVisible state on given action', () => {
    const expected = true
    const action = { type: SET_TOAST_ISVISIBLE }

    const actual = toastIsVisible(false, action)

    expect(actual).toBe(expected)
  })

  it('Reducer can set toastIsVisible state on given action', () => {
    const expected = false
    const action = { type: SET_TOAST_HIDDEN }

    const actual = toastIsVisible(true, action)

    expect(actual).toBe(expected)
  })
})

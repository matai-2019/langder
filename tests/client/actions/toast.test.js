import {
  SET_TOAST_ISVISIBLE,
  SET_TOAST_HIDDEN,
  toggleToastVisible,
  toggleToastHidden
} from '../../../client/actions/toastMessage'

describe('Action Tests for Toast', () => {
  it('Can create action toggleToastVisible', () => {
    const actual = toggleToastVisible()
    const expected = { type: SET_TOAST_ISVISIBLE }

    expect(actual).toEqual(expected)
  })

  it('Can create action toggleToastHidden', () => {
    const actual = toggleToastHidden()
    const expected = { type: SET_TOAST_HIDDEN }

    expect(actual).toEqual(expected)
  })
})

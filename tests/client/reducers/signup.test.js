import { SIGNUP, signup } from '../../../client/actions/signup'
import signup from '../../../client/reducers/signup'


describe('signup', () => {
  it('returns the default state if no state or action given', () => {
    const initialState = undefined
    const expected = ''
    const action = {
      type: undefined
    }
    const actual = signup(initialState, action)
    expect(actual).toBe(expected)
  })
})

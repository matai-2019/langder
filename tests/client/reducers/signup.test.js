import { SIGNUP } from '../../../client/actions/signup'
import signup from '../../../client/reducers/signup'

describe('Tests given actions into signup', () => {
  it('returns signup', () => {
    const expected = SIGNUP
    const currentState = {
      sortType: ''
    }
    const action = {
      type: SIGNUP_SUCCESS
    }
    const actual = signup(currentState, action)
    expect(actual).toBe(expected)
  })
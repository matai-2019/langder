import { signup, SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../../client/actions/signup'

describe('Tests for signup actions', () => {
  it(`signup() returns ${SIGNUP}`, () => {
    const action = signup()
    expect(action.type).toBe(SIGNUP)
  })

})

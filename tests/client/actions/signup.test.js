
import { signupSuccess, SIGNUP_SUCCESS } from '../../../client/actions/signup'

describe('actions', () => {
  it('should create a success action', () => {
    const testUser = 'user: SIGNUP_SUCCESS'
    const action = signupSuccess(testUser)
    const expected = {
      type: SIGNUP_SUCCESS,
      user
    }
    expect(action).toEqual(expected)
  })
})



// describe('Tests for signupSuccess actions', () => {
//   it(`signup() returns ${SIGNUP_SUCCESS}`, () => {
//     const action = 
//     const expected = signup()
//     expect(user).toBe(SIGNUP_SUCCESS)
//   })

// })

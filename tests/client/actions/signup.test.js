
import { signupSuccess, SIGNUP_SUCCESS } from '../../../client/actions/signup'

describe('actions', () => {
  it.skip('should create a success action', () => {
    const testUser = { email: 'test', password: 'password'}
    const action = signupSuccess(testUser)
    const expected = {
      type: SIGNUP_SUCCESS,
      user: { email: 'test', password: 'password'}
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


import { addUserSuccess, ADDUSER_SUCCESS } from '../../../client/actions/signup'

describe('actions', () => {
  it('should create a success action', () => {
    const testUser = { email: 'test', password: 'password'}
    const action = addUserSuccess(testUser)
    const expected = {
      type: ADDUSER_SUCCESS,
      user: { email: 'test', password: 'password'}
    }
    expect(action).toEqual(expected)
  })
})


// describe('Tests for signupSuccess actions', () => {
//   it(`signup() returns ${SIGNUP_SUCCESS}`, () => {
//     const action = 
//     const expected = signup()
//     expect(user).toBe(ADDUSER_SUCCESS)
//   })

// })

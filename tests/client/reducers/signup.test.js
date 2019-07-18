
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../../client/actions/signup'
import signup from '../../../client/reducers/signup'

describe('signup success', () => {
  it('returns success on signup', () => {
    const initialState = { email: 'test', password: 'password'}
    const expected =  {
      email: "test",
      password: "password"
    }
    const action = {
      item: initialState
    }
    const actual = signup(initialState, action)
    expect(actual).toEqual(expected)
  })
})


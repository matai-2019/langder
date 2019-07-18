
import { ADDUSER_SUCCESS, ADDUSER_ERROR } from '../../../client/actions/signup'
import addUser from '../../../client/reducers/signup'

describe('addUser success', () => {
  it('returns success on addUser', () => {
    const initialState = { email: 'test', password: 'password'}
    const expected =  {
      email: "test",
      password: "password"
    }
    const action = {
      item: initialState
    }
    const actual = addUser(initialState, action)
    expect(actual).toEqual(expected)
  })
})


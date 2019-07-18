
import { PENDING_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../../client/actions/login'
import login from '../../../client/reducers/login'

describe('login successful', () => {
  it('returns success on a successful login', () => {
    const initialState = { userName: '', password: ''}
    const expected =  {
      userName: 'Yeeti the 3rd',
      password: 'password',
      completed: true
    }
    const action = {
      item: initialState
    }
    const actual = login(initialState, action)
    expect(actual).toEqual(expected)
  })
})

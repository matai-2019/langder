
import { PENDING_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../../client/actions/login'
import login from '../../../client/reducers/login'
// put to the side 
describe('login pending', () => {
  it('returns pending login on a successful login', () => {
    const initialState = { loading: false }
    const expected = { 
      loading: true,
      completed: false 
    }
    const action = {type: PENDING_LOGIN, action: {}}
    const actual = login(initialState, action)
    expect(actual).toEqual(expected)
  })
})


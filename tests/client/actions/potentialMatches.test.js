import '../mocks/api'
// import '../mocks/save-auth-token'

import {
  NEXT_POTENTIAL_MATCH,
  ADD_LIKE_ERROR,
  nextPotMatch,
  addLikeError

} from '../../../client/actions/potentialMatches'

describe('like potential match', () => {
  it('dispatch correct action', () => {
    const action = addLikeError()
    const expected = {
      type: ADD_LIKE_ERROR
    }
    expect(action).toEqual(expected)
  })
  it('sends post to api', () => {
    // expect(true).toBe(false)
  })
})

describe('next potential match', () => {
  it('dispatches the correct action', () => {
    const action = nextPotMatch()
    const expected = {
      type: NEXT_POTENTIAL_MATCH
    }
    expect(action).toEqual(expected)
  })
})

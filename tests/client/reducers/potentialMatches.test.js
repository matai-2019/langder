import { PENDING_POTENTIAL_MATCHES, POTENTIAL_MATCHES_SUCCESS, POTENTIAL_MATCHES_ERROR } from '../../../client/reducers/potentialMatches'
import { potentialMatches, potentialMatchesSuccess } from '../../../client/actions/potentialMatches'

// Need Mock store?

describe('potentialMatchesSuccess', () => {
  it('returns potential profileMatches on a successful profile get', () => {
    const initialState = { type: PENDING_POTENTIAL_MATCHES }
    const expected = {
      users: potentialMatchesSuccess
    }
    const action = { type: POTENTIAL_MATCHES_SUCCESS, action: {} }
    const actual = potentialMatchesSuccess(initialState, action)
    expect(actual).toEqual(expected)
  })
})

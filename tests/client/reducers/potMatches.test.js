import {
  potentialMatchesSuccess,
  addLikeError,
  nextPotMatch
} from '../../../client/actions/potMatches'

import potMatches from '../../../client/reducers/potMatches'

describe('next potential match', () => {
  it('removes one person from pot matches', () => {
    const initialState = {
      potMatches: [
        { name: 'keith' },
        { name: 'noel' },
        { name: 'ruslan' }
      ]
    }
    const expected = {
      potMatches: [
        { name: 'keith' },
        { name: 'noel' }
      ]
    }
    const actual = potMatches(initialState, nextPotMatch())
    expect(actual).toStrictEqual(expected)
    expect(actual.potMatches.length).toBe(2)
  })
})

// describe('potentialMatchesSuccess', () => {
//   it('returns potential profileMatches on a successful profile get', () => {
//     const initialState = { type: PENDING_POTENTIAL_MATCHES }
//     const expected = {
//       users: potentialMatchesSuccess
//     }
//     const action = { type: POTENTIAL_MATCHES_SUCCESS, action: {} }
//     const actual = potentialMatchesSuccess(initialState, action)
//     expect(actual).toEqual(expected)
//   })
// })

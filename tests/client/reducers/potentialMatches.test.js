import {
  potentialMatches,
  potentialMatchesSuccess,
  likePotentialMatch,
  rejectPotMatch
} from '../../../client/actions/potentialMatches'

// Need Mock store?

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

describe('like potential match', () => {
  it('returns potential profileMatches on a successful profile get', () => {
    const initialState = {
      potentialMatches: [
        { name: 'keith' },
        { name: 'noel' },
        { name: 'ruslan' }
      ]
    }
    const expected = {
      potentialMatches: [
        { name: 'keith' },
        { name: 'noel' }
      ]
    }
    const actual = potentialMatchesSuccess(initialState, likePotentialMatch())
    expect(actual).toStrictEqual(expected)
    expect(actual.potentialMatches.length).toBe(2)
  })
})

test('reject potential match removes a user from potentialMatches', () => {
  const initialState = {
    potentialMatches: [
      { name: 'keith' },
      { name: 'noel' },
      { name: 'ruslan' }
    ]
  }
  const expected = {
    potentialMatches: [
      { name: 'keith' },
      { name: 'noel' }
    ]
  }
  const actual = potMatches(initialState, rejectPotMatch())
  expect(actual).toStrictEqual(expected)
  expect(actual.potentialMatches.length).toBe(2)
})

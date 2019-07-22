import '../mocks/api'
// import '../mocks/save-auth-token'

import {
  PotentialMatchesSuccess,
  POTENTIAL_MATCHES_SUCCESS,
  rejectPotMatch,
  REJECT_POTENTIAL_MATCH,
  addlike,
  LIKE_POTENTIAL_MATCH
} from '../../../client/actions/potentialMatches'

describe('like potential match', () => {
  it('dispatch correct action', () => {
    const action = addlike()
    const expected = {
      type: LIKE_POTENTIAL_MATCH
    }
    expect(action).toEqual(expected)
  })
  it('sends post to api', () => {
    // expect(true).toBe(false)
  })
})

describe('reject potential match', () => {
  it('dispatches the correct action', () => {
    const action = rejectPotMatch()
    const expected = {
      type: REJECT_POTENTIAL_MATCH
    }
    expect(action).toEqual(expected)
  })
})

// describe('actioins', () => {
//   it.skip('create successful potentialMatches get action', () => {
//     const testMatches = { users:  users }
//     const action = updateProfileSuccess(testUpdate)
//     const expected = {
//       type: UPDATE_PROFILE_SUCCESS,
//       profile: { profileID: 'meow', language: 'english' }
//     }
//     expect(action).toEqual(expected)
//   })
// })

// Can't test matches without mocked apis and auth keys/tokens

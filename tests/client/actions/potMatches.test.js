import '../mocks/api'
// import '../mocks/save-auth-token'

import {
  PotentialMatchesSuccess,
  POTENTIAL_MATCHES_SUCCESS,
  rejectPotMatch,
  REJECT_POTENTIAL_MATCH
} from '../../../client/actions/potMatches'

test('Rejecting pot match dispatches the correct action', () => {
  const action = rejectPotMatch()
  const expected = {
    type: REJECT_POTENTIAL_MATCH
  }
  expect(action).toEqual(expected)
})

// describe('actioins', () => {
//   it.skip('create successful potMatches get action', () => {
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

// test.skip('registering for an event dispatches the correct actions', () => {
//   const dispatch = jest.fn()
//   const pendingPotentialMatches = {
//     profileId: 1,
//     users: 2,
//     profileId: 'test user'
//   }
//   return PotentialMatchesSuccess(true, registration)(dispatch)
//     .then(() => {
//       expect(dispatch.mock.calls[0][0].type).toBe(PENDING_POTENTIAL_MATCHES)
//       expect(dispatch.mock.calls[1][0].type).toBe(POTENTIAL_MATCHES_SUCCESS)
//       expect(dispatch.mock.calls[2][0].type).toBe(CLEAR_ERROR)
//     })
// })

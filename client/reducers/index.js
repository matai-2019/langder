import { combineReducers } from 'redux'

import info from './info'
import createProfile from './createProfile'
import user from './login'
import potMatches from './potMatches'
import signup from './signup'
import updateProfile from './updateProfile'
import profile from './getProfile'
import matches from './listMatches'
import logout from './logout'

export default combineReducers({
  info,
  createProfile,
  user,
  potMatches,
  signup,
  updateProfile,
  profile,
  matches
})

// const rootReducer = (state, action) => {
//   if (action.type === LOGOUT) {
//     state = undefined
//   }
//   return combineReducers(state, action)
// }

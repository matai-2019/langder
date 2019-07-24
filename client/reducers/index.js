import { combineReducers } from 'redux'

import info from './info'
import createProfile from './createProfile'
import user from './login'
import potMatches from './potMatches'
import signup from './signup'
import updateProfile from './updateProfile'
import profile from './getProfile'
import matches from './listMatches'

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

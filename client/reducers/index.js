import { combineReducers } from 'redux'

import info from './info'
import createProfile from './createProfile'
import login from './login'
import potentialMatches from './potentialMatches'
import signup from './signup'
import updateProfile from './updateProfile'

export default combineReducers({
  info,
  createProfile,
  login,
  potentialMatches,
  signup,
  updateProfile
})

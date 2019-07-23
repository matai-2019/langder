import { combineReducers } from 'redux'

import info from './info'
import createProfile from './createProfile'
import login from './login'
import potMatches from './potMatches'
import signup from './signup'
import updateProfile from './updateProfile'

export default combineReducers({
  info,
  createProfile,
  login,
  potMatches,
  signup,
  updateProfile
})

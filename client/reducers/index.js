import { combineReducers } from 'redux'

import info from './info'
import user from './login'
import potMatches from './potMatches'
import signup from './signup'
import profile from './profile'
import matches from './listMatches'
import languages from './languages'

export default combineReducers({
  info,
  user,
  potMatches,
  signup,
  matches,
  languages,
  profile
})

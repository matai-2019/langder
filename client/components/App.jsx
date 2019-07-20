import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import GetPotentialMatches from './GetPotentialMatches'
import Navbar from './Navbar'

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
        <Navbar />
          <Container >
            <Switch>
              {/* <Route exact path='/' component={welcome}/> */}
              <Route exact path='/GetPotentialMatches' component={GetPotentialMatches}/>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/profile' component={Profile} />
            </Switch>
          </Container>
        </>
      </Router>
    )
  }
}

export default App

import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Landing from './Landing'
import Profile from './Profile'
import PotMatches from './PotMatches'
import Navbar from './Navbar'

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
        <Navbar />
          <Container style={{ display: 'flex' }} >
            <Switch>
              <Route exact path='/landing' component={Landing} />
              <Route exact path='/pot' component={PotMatches}/>
              <Route exact path='/profile' component={Profile} />
            </Switch>
          </Container>
        </>
      </Router>
    )
  }
}

export default App

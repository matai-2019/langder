import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Login from './Login'
import SignUp from './SignUp'
import AddProfile from './AddProfile'

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          <AddProfile/>
          <Container >
            <Switch>
              {/* <Route exact path='/' component={welcome}/> */}
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
            </Switch>
          </Container>
        </>
      </Router>
    )
  }
}

export default App

import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Login from './Login'
import SignUp from './SignUp'

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Container style={{ marginTop: 75 }}>
            <Switch>
              <Route component={Login} />
            </Switch>
          </Container>
        </>
      </Router>
    )
  }
}

export default App

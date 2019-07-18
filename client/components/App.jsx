import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Login from './Login'

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          <Container style={{ marginTop: 75 }}>
            <Switch>
            </Switch>
          </Container>
        </>
      </Router>
    )
  }
}

export default App

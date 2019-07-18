import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          {/* //TODO add menu */}
          {/* <Container style={{ marginTop: 75 }}>
            <Switch>
            </Switch>
          </Container> */}
          <h1>TESTING</h1>
        </>
      </Router>
    )
  }
}

export default App

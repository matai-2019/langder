import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Grid } from 'semantic-ui-react'
import { login } from '../actions/login'
import { signup } from '../actions/signup'

import Toast from './Toast'

class Landing extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render () {
    const { email, password } = this.state
    const { dispatch, toastIsVisible } = this.props
    const theme = {
      grid: { alignSelf: 'center', marginTop: '10vh' }
    }
    return (
      <Grid textAlign="center" style={theme.grid} padded>
        <Grid.Row>
          <h1>Welcome to Langder</h1>
        </Grid.Row>
        <Grid.Row>
          <Form size="large" style={{ width: '80vw' }}>
            <Form.Input
              value={email}
              onChange={this.handleChange}
              label="Email"
              name="email"
              placeholder='eg. smarty@smartyface.com'
              required
            />
            <Form.Input
              onChange={this.handleChange}
              value={password}
              label="Password"
              name="password"
              type="password"
              placeholder='Password'
              required
            />
          </Form>
        </Grid.Row>
        <Grid.Row>
          <Button.Group size="huge" >
            <Button onClick={() => dispatch(login(this.state))}
              content="Login"
            />
            <Button.Or />
            <Button onClick={() => { dispatch(signup(this.state)) }}
              content="SignUp"
              positive
            />
          </Button.Group>
        </Grid.Row>
        { toastIsVisible && <Toast header="you man's anus" message="frick" type="warning"/>}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  console.log({ state })
  return {
    toastIsVisible: state.toastIsVisible
  }
}

export default connect(mapStateToProps)(Landing)

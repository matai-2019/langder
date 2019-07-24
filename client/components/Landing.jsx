import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Button, Grid } from 'semantic-ui-react'
import { login } from '../actions/login'
import { addUser } from '../actions/signup'

class Landing extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleLogin = () => {
    this.props.dispatch(login(this.state))
  }

  hanleSignUp = () => {
    this.props.dispatch(addUser(this.state)) // broken ************************** (has ticket)
  }

  renderRedirect = () => {
    if (this.props.user.auth) {
      return <Redirect to='/pot' />
    }
  }

  render () {
    const { email, password } = this.state
    const theme = {
      grid: { alignSelf: 'center', marginTop: '10vh' }
    }

    return (
      <>
      {this.renderRedirect()}
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
            <Button onClick={this.handleLogin}
              content="Login"
            />
            <Button.Or />
            <Button onClick={this.hanleSignUp}
              content="SignUp"
              positive
            />
          </Button.Group>
        </Grid.Row>
      </Grid>
      </>
    )
  }
}
const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(Landing)

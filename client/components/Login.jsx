import React, { Component } from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ email: '', password: '' })

  // handleSignUp
  
  render() {
    const { email, password } = this.state
    const inputStyle = { width: '60vw' }

    return (
      <Grid style={{ marginTop: '5vh' }} container centered columns={1}>
        <Grid.Row verticalAlign="middle" centered columns={1}>
          <h1>This can be a title for the App. With image of Trixie etc.</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              style={inputStyle}
              value={email}
              onChange={this.handleChange}
              placeholder='Email'
              name='email'
            />
            <Form.Input
              style={inputStyle}
              onChange={this.handleChange}
              value={password}
              placeholder='Password'
              name='password'
            />
          <div class="ui buttons">
            <Button onClick={this.signUp} class="ui button" type='submit' verticalAlign='middle' size="huge">Login</Button>
              <div class="or" size="massive"></div>
            <Button onClick={this.login} class="ui positive button" type='signup' size="huge">SignUp</Button>
          </div>
            {/* <Button type='submit'>Submit</Button> */}
          </Form>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Login
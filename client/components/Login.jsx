import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  inputStyle = { width: '60vw' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ email: '', password: '' })

  render() {
    const { email, password } = this.state

    return (
      <>
        <h1>Login</h1>
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
          <Button type='submit'>Submit</Button>
        </Form>
      </>
    )
  }
}

export default Login
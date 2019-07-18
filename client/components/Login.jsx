import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e,{ name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ email: '', password: '' })

  render() {
    const { email, password } = this.state

    return (
      <>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            fluid
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
            name='email'
          />
          <Form.Input
            fluid
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
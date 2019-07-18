import React, { Component } from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'

class SignUp extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ email: '', password: '' })

  render() {
    const { email, password } = this.state
    const inputStyle = { width: '60vw' }

    return (
      <Grid style={{ marginTop: '30vh' }} container centered columns={1}>
        <Grid.Row verticalAlign='middle' centered columns={1}>
          <h1>SignUp</h1>
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
        </Grid.Row>
      </Grid>
    )
  }
}

export default SignUp
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Form, Button, Grid } from 'semantic-ui-react'

class Landing extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  onClickHandler = (e) => this.setState({ email: '', password: '' })


  render() {
    const { email, password } = this.state
    const {dispatch} = this.props
    const inputStyle = { width: '60vw' }

    return (
      <Grid style={{ marginTop: '5vh' }} container centered columns={1}>
        <Grid.Row centered columns={1}>
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
          <div className="ui buttons">
            <Button onClick={()=> dispatch(this.login(email, password))} className="ui button" type='submit' size="huge">Login</Button>
              <div className="or" size="massive"></div>
            <Button onClick={()=>{dispatch(this.signUp(email, password))}} className="ui positive button" type='signup' size="huge">SignUp</Button>
          </div>
          </Form>
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect()(Landing)
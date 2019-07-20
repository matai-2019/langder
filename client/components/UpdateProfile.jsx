import React, { Component } from 'react'
import { Form, Button, Grid, Dropdown, Card, TextArea } from 'semantic-ui-react'

class UpdateProfile extends Component {
  state = {
    id: '',
    profileId: '',
    name: '',
    email: '',
    description: '',
    toKnow: [],
    know: []
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({
    id: '',
    profileId: '',
    name: '',
    email: '',
    description: '',
    toKnow: [],
    know: []
  })

  render () {
    const { name, email, toKnow, know, description } = this.state

    const languages = [{ key: 0, text: 'Japanese', value: 'jp' }, { key: 2, text: 'English', value: 'en' }, { key: 4, text: 'Clingon', value: 'cg' }]
    const langKnow = [{ key: 0, text: 'Chinese', value: 'ch' }]

    return (
      <Grid style={{ height: '100vh', width: '100%' }} columns={1}>
        <Grid.Row style={{ display: 'flex', alignContent: 'center' }}>
          <Card centered style={{ width: '75vw', maxHeight: '85vh' }}>
            <Card.Content>
              <h1>My profile</h1>
              <Form onSubmit={this.handleSubmit} style={{ height: '100%' }}>
                <Form.Input
                  onChange={this.handleChange}
                  value={name}
                  placeholder='Your name'
                  name='name'
                  label='Name'
                />
                <Form.Input
                  value={email}
                  onChange={this.handleChange}
                  placeholder='email@example.com'
                  name='email'
                  label='Email'
                />
                <Form.Input
                  placeholder='Tell us about yourself'
                  name='description'
                  label="Bio"
                  control={TextArea}
                  style={{ minHeight: 100 }}
                  value={description}
                  onChange={this.handleChange}
                />
                <Form.Field
                  placeholder="e.g English"
                  label='Languages I know'
                  name="know"
                  control={Dropdown}
                  selection
                  multiple
                  onChange={this.handleChange}
                  options={langKnow}
                  value={know}
                />
                <Form.Field
                  label='Languages I want to learn'
                  placeholder="e.g Chinese"
                  name="toKnow"
                  control={Dropdown}
                  selection
                  multiple
                  onChange={this.handleChange}
                  options={languages}
                  value={toKnow}
                />
                <Button type='submit'>Submit</Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    )
  }
}

export default UpdateProfile

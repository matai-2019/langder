import React, { Component } from 'react'
import { Form, Button, Grid, Dropdown, Card } from 'semantic-ui-react'

class AddProfile extends Component {
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
      <Grid verticalAlign={'middle'} style={{ height: '100vh', width: '100%' }} centered columns={3}>
        <Grid.Row style={{ display: 'flex', alignContent: 'center' }}>
          <Card style={{ width: '75vw', maxHeight: '55vh' }}>
            <Card.Content>
              <h1>My profile</h1>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  onChange={this.handleChange}
                  value={name}
                  placeholder='Name'
                  name='name'
                />
                <Form.Input
                  value={email}
                  onChange={this.handleChange}
                  placeholder='Email'
                  name='email'
                />
                <Form.Input
                  value={description}
                  onChange={this.handleChange}
                  placeholder='Description'
                  name='description'
                />
                <Form.Field
                  placeholder="Languages I know"
                  name="know"
                  control={Dropdown}
                  selection
                  multiple
                  onChange={this.handleChange}
                  options={langKnow}
                  value={know}
                />
                <Form.Field
                  placeholder="Languages I want to learn"
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

export default AddProfile

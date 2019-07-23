import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Button, Grid, Dropdown, Card, TextArea } from 'semantic-ui-react'
import { updateProfile } from '../actions/updateProfile'
import { getAllLanguages } from '../actions/languages'

class UpdateProfile extends Component {
  state = {
    userId: 1,
    profileId: 1,
    name: this.props.profile.name,
    description: this.props.profile.description,
    languages: this.props.languages.map((lang) => { // add user skill level => STRETCH
      return {
        key: lang.id,
        text: lang.name,
        value: lang.name
      }
    }),
    redirect: false
  }

  componentDidMount () {
    this.props.dispatch(getAllLanguages())
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, updated: true })

  handleSubmit = () => {
    this.props.dispatch(updateProfile(this.state))
    this.setState({ redirect: true })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/profile'/>
    }
  }

  render () {
    const { name, languages, description } = this.state
    const { allLanguages } = this.props
    console.log('render', languages)
    return (
      <>
      {this.renderRedirect()}
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
                  placeholder='Tell us about yourself'
                  name='description'
                  label="Bio"
                  control={TextArea}
                  style={{ minHeight: 100 }}
                  value={description}
                  onChange={this.handleChange}
                />
                {
                  allLanguages && <Form.Field
                    placeholder="e.g English"
                    label='Languages I want to learn / learning'
                    name="languages"
                    control={Dropdown}
                    selection
                    multiple
                    onChange={this.handleChange}
                    options={allLanguages.map(lang => {
                      return {
                        key: lang.id,
                        text: lang.name,
                        value: lang.name,
                        active: true,
                        selected: true
                      }
                    })}
                    value={languages}
                  />
                }

                <Button type='submit'>Submit</Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
      </>
    )
  }
}

const mapStateToProps = ({ getProfile: { profile, languages }, languages: { user } }) => {
  return {
    profile,
    languages,
    allLanguages: user
  }
}

export default connect(mapStateToProps)(UpdateProfile)

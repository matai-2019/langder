import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, Icon } from 'semantic-ui-react'
import Profile from './Profile'

import { potentialMatches } from '../actions/potentialMatches'
// import { getusers from the API when possible } from '../api/api'


class GetPotentialMatches extends React.Component {
  state = {
    profileId: '',
    name: '',
    description: '',
    toKnow: [],
    know: []
  }

  handleChange = (e, { id, user }) => this.setState({ [id]: user })

  handleSubmit = () => this.setState({
    profileId: '',
    name: '',
    description: '',
    toKnow: [],
    know: []
  })

  render() {
    const testarray = ['3', 'strings', 'another', '']
    const { name, description, toKnow, know } = this.state
    return (
      <>
        <Container className='matches'>
          <h1>Your Matches are all Trixie. sorry.</h1>
          {testarray.map(user =>
        <Profile key={user.id} user={potentialMatches} />)}
              <Button name='next' /><Icon name="pencil" />
        </Container>

      </>
        )
      }
    }
    
const mapStateToProps = state => {
  return {
          users: state.users
      }
    }
    
    export default connect(mapStateToProps)(GetPotentialMatches)

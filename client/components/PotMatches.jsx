import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, Icon } from 'semantic-ui-react'
import Profile from './Profile'

import { potentialMatches } from '../actions/potentialMatches'
// import { getusers from the API when possible } from '../api/api'

class PotMatches extends React.Component {
  state = {
    profileId: '',
    name: '',
    description: '',
    languages: []
  }

  handleChange = (e, { id, user }) => this.setState({ [id]: user })

  handleSubmit = () => this.setState({
    profileId: '',
    name: '',
    description: '',
    languages: []
  })

  render () {
    const testarray = ['4', 'strings', 'another', 'string']
    const { name, description, languages } = this.state
    const { dispatch } = this.props
    return (
      <>
        <Container className='matches'>
          <h1>Your Matches are all Trixie. sorry.</h1>
          {testarray.map(user =>
            <Profile key={user} user={potentialMatches} />)}
          <Button
            name='like'
            onClick={() => dispatch(likePotMatch(activeUser))}
          />
          <Icon name="pencil" />
          <Button
            name='reject'
            onClick={() => dispatch(nextPotMatch())}
          />
          <Icon name="pencil" />
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

export default connect(mapStateToProps)(PotMatches)

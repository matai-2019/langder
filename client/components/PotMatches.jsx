import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, Icon } from 'semantic-ui-react'
import Profile from './Profile'

import { potentialMatches } from '../actions/potentialMatches'

class PotMatches extends React.Component {
  state = {
    profileId: '',
    name: '',
    description: '',
    languages: []
  }

  componentDidMount () {
    this.props.dispatch(potentialMatches())
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
    return (
      <>
        <Container className='matches'>
          <h1>Your Matches are all Trixie. sorry.</h1>
          {testarray.map(user =>
            <Profile key={user} user={potentialMatches} />)}
          <Button name='next' /><Icon name="pencil" />
        </Container>

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    potMatches: state.potMatches
  }
}

export default connect(mapStateToProps)(PotMatches)

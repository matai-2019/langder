import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, Icon } from 'semantic-ui-react'
import Profile from './Profile'

import { likePotMatch, nextPotMatch, fetchPotMatches } from '../actions/potMatches'

class PotMatches extends React.Component {
  handleChange = (e, { id, user }) => this.setState({ [id]: user })

  componentDidMount () {
    this.props.dispatch(fetchPotMatches())
  }

  render () {
    const { activePot, nextPot, dispatch } = this.props
    return (
      <>
        <Container className='matches'>
          <h1>Your Matches are all Trixie. nice.</h1>
          {activePot && <Profile user={activePot} />}
          {nextPot && <Profile user={nextPot} />}
          {/* MEssage underneith that says we're all done */}
          <Button
            name='like'
            onClick={() => dispatch(likePotMatch(activePot))}
          >
            <Icon name='like'/>
          </Button>
          <Button
            name='reject'
            onClick={() => dispatch(nextPotMatch())}
          >
            <Icon name='close'/>
          </Button>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    potMatches: state.potMatches,
    activePot: state.potMatches[0],
    nextPot: state.potMatches[1]

  }
}

export default connect(mapStateToProps)(PotMatches)

import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, Icon } from 'semantic-ui-react'
import Profile from './Profile'
 
import { potMatches } from '../actions/potMatches'

class PotMatches extends React.Component {

  render () {
    const {activePot, nextPot} = this.props
    return (
      <>
        <Container className='matches'>
          <h1>Your Matches are all Trixie. nice.</h1>
          {activePot &&<Profile key={user} user={activePot} />}
          {nextPot && <Profile key={user} user={nextPot} />}
          {/* MEssage underneith that says we're all done */}
          <Button name='next' /><Icon name="pencil" />
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

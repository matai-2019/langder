import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, Icon } from 'semantic-ui-react'
import Profile from './Profile'

import { likePotMatch, nextPotMatch, fetchPotMatches } from '../actions/potMatches'

// consistant styles
const primary = '#b1f0ee'
const secondary = '#00ffd0'

const theme = {
  button: {
    position: 'flex',
    backgroundColor: primary,
    boxShadow: '2px 3px 14px -7px rgba(0,0,0,0.62)'
  }
}

class PotMatches extends React.Component {
  componentDidMount () {
    const userId = this.props.user.id
    this.props.dispatch(fetchPotMatches(userId))
  }

  render () {
    const { activePot, nextPot, dispatch } = this.props
    return (
      <>
        <Container className='matches'>
          <h1>Your Matches are all Trixie. nice.</h1>
          {activePot && <Profile user={activePot} />}
          {nextPot && <Profile user={nextPot} />}
          {<div className="ui fluid button" icon='cloud download'>
            <div className="cloud download" onClick={() => dispatch(fetchPotMatches())} />Nein. Refresh Matches is all you can do now.</div>}

          <Button floated='left' icon='like' size="huge" circular style={{ ...theme.button }}
            onClick={() => dispatch(likePotMatch(activePot))} />

          <Button floated='right' icon='close' size="huge" circular style={{ ...theme.button }}
            onClick={() => dispatch(nextPotMatch())} />

          {/* <Button fix='center' icon='cloud download' size="huge" circular style={{ ...theme.button }} onClick={() => dispatch(fetchPotMatches())} /> */}

        </Container>

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    potMatches: state.potMatches,
    activePot: state.potMatches[0],
    nextPot: state.potMatches[1]

  }
}

export default connect(mapStateToProps)(PotMatches)

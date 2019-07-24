import React from 'react'
import { connect } from 'react-redux'

import { Container, Button, Card, Header, Icon } from 'semantic-ui-react'

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
  },
  
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
        <Container className='matches' background-color='e0fff9'>
          <Header as='h2' textAlign='center'>Polyglota</Header>
          {activePot &&
          <Profile user={activePot} style={{ position: 'absolute' }}
          >
          </Profile>}
          {nextPot &&
          <Profile user={nextPot} style={{ position: 'absolute' }}
          />}
          <Card centered onClick={() => dispatch(fetchPotMatches())}
            href='#card-example-link-card'
            header='NonPolyGlotad'
            meta='Find more learning partners'
            description='Press here to refresh matches or live in a world where learning is no longer wanted.'
          />

          <Button floated='left' icon='like' size="huge" circular style={{ ...theme.button }}
            onClick={() => dispatch(likePotMatch(activePot))} />

          <Button floated='right' icon='close' size="huge" circular style={{ ...theme.button }}
            onClick={() => dispatch(nextPotMatch())} />

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

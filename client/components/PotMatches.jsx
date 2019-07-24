import React from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'semantic-ui-react'

import Profile from './Profile'
import LikeControls from './LikeControls'

import { likePotMatch, nextPotMatch, fetchPotMatches } from '../actions/potMatches'

import '../styles/pot.css'
import { listMatches } from '../actions/listMatches'
class PotMatches extends React.Component {
  state={
    // potMatches: this.props.potMatches.filter(potMatches)
  }

  componentDidMount () {
    const userId = this.props.user.id
    this.props.dispatch(listMatches(userId))
    this.props.dispatch(fetchPotMatches(userId))
  }

  render () {
    const { activePot, nextPot, dispatch, user: { id } } = this.props
    return (
    <>
      <div className="pot">
        {activePot && <Profile user={activePot} className='active-card'>
          <LikeControls>
            <Button icon='close' size="massive" circular
              color="red"
              className="dislike-button"
              onClick={() => dispatch(nextPotMatch())} />
            <Button icon='like' size="massive" circular
              color="pink"
              className="like-button"
              onClick={() => dispatch(likePotMatch(id, activePot.userId))} />
          </LikeControls>
        </Profile>}
        {nextPot && <Profile user={nextPot} className=' next-card' />}

        {this.props.potMatches.length > 0 &&
       <Card className="base-card" onClick={() => dispatch(fetchPotMatches())}>
         <Card.Header content="Sorry About that you can swipe another time!" />
       </Card>
        }
      </div>
    </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    potMatches: state.potMatches,
    activePot: state.potMatches[0],
    nextPot: state.potMatches[1],
    matches: state.matches
  }
}

export default connect(mapStateToProps)(PotMatches)

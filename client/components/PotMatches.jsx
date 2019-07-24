import React from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'semantic-ui-react'

import Profile from './Profile'
import LikeControls from './LikeControls'

import { likePotMatch, nextPotMatch, fetchPotMatches } from '../actions/potMatches'

import '../styles/pot.css'
import { listMatches } from '../actions/listMatches'
require('babel-polyfill')
class PotMatches extends React.Component {
  state={
    // pls: this.props.potMatches
  }

  componentDidMount () {
    const userId = this.props.user.id
    this.props.dispatch(listMatches(userId))
    this.props.dispatch(fetchPotMatches(userId))
  }

  filterPotMatches = (potMatches) => {
    const matches = this.props.matches
    if (!potMatches.pending && Array.isArray(potMatches) && matches) {
      const potFilter = matches.map(profile => profile.userId)
      console.log('asdfasdf', potFilter)
      return potMatches.filter(match => potFilter.includes(match.userId))
    }
    // if (!potMatches.pending && Array.isArray(potMatches)) {
    //   // console.log('filtering', potMatches)
    //   const filtered = potMatches.filter(potMatch => {
    //     // console.log('pot match', potMatch)
    //     this.props.matches.forEach(match => {
    //       // console.log('match', match)
    //       if (potMatch.userId !== match.userId) {
    //         console.log('passed', potMatch)
    //         return potMatch
    //       }
    //     })
    //   })
    //   console.log('filtered', filtered)
    //   return filtered
    // }
  }

  render () {
    const { activePot, nextPot, dispatch, user: { id } } = this.props
    // console.log('render', this.state, 'pot:', this.props.potMatches)
    console.log(this.filterPotMatches(this.props.potMatches))
    return (
    <>
    {/* {this.filterPotMatches(this.props.potMatches)} */}
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
// filter through pot matches
// return if potmatch.name !== match.name

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

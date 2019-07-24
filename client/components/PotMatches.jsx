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
    potMatches: this.props.potMatches
  }

  componentDidMount () {
    const userId = this.props.user.id
    this.props.dispatch(listMatches(userId))
    this.props.dispatch(fetchPotMatches(userId))
  }

  filterPotMatches = (potMatches) => {
    const matches = this.props.matches
    let filtered = []
    if (!potMatches.pending && Array.isArray(potMatches) && matches) {
      const potFilter = matches.map(profile => profile.userId)
      console.log('asdfasdf', potFilter)
      filtered = potMatches.filter(match => potFilter.includes(match.userId))
      this.setState({
        filtered
      })
      return filtered
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

  handleUpdate = () => {
    this.props.dispatch(nextPotMatch())
    // this.forceUpdate()
  }

  unbox = (state) => {
    if (!state.pending && typeof state.pot !== 'undefined') {
      console.log('not pending', state.pot)
      // const potFilter = this.props.matches.map(profile => profile.userId)
      // const filtered = state.pot.filter(match => potFilter.includes(match.userId))
      // console.log('filtered', filtered)

      if (state.pot.length < 0) {
        return false
      }
      return state.pot
    }
    return false
  }

  render () {
    const { dispatch, user: { id } } = this.props
    console.log('users', this.props.potMatches)
    const activePot = this.unbox(this.props.potMatches)
    console.log('unboxed activePot', activePot)

    return (
    <>
      <div className="pot">
        {activePot && <Profile user={activePot[0]} className='active-card'>
          <LikeControls>
            <Button icon='close' size="massive" circular
              color="red"
              className="dislike-button"
              onClick={this.handleUpdate}
            />
            <Button icon='like' size="massive" circular
              color="pink"
              className="like-button"
              onClick={() => dispatch(likePotMatch(id, activePot[0].userId))} />
          </LikeControls>
        </Profile>}
        {activePot && <Profile user={activePot[1]} className=' next-card' />}

        {activePot &&
       <Card className="base-card">
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
    matches: state.matches
  }
}

export default connect(mapStateToProps)(PotMatches)

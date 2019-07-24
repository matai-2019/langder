import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Profile from './Profile'
import LikeControls from './LikeControls'

import { likePotMatch, nextPotMatch, fetchPotMatches } from '../actions/potMatches'
import { getProfile } from '../actions/profile'

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
    this.props.dispatch(getProfile(userId))
  }

  filterPotMatches = (potMatches) => {
    // const matches = this.props.matches
    // console.log('about to filter', potMatches)
    // if (potMatches) {
    //   const potFilter = matches.map(profile => profile.userId)
    //   console.log('asdfasdf', potFilter)
    //   console.log('filtering', potMatches)
    //   return potMatches.filter(match => potFilter.includes(match.userId))
    // }
    // return false
  }

  handleUpdate = () => {
    this.props.dispatch(nextPotMatch())
  }

  unbox = (state) => {
    if (!state.pending && typeof state.pot !== 'undefined') {
      // const potFilter = this.props.matches.map(profile => profile.userId)
      // const filtered = state.pot.filter(match => potFilter.includes(match.userId))
      // console.log('filtered', filtered)

      if (state.pot.length < 0) {
        return false
      }
      const filteredOutMe = state.pot.filter(e => e.userId !== this.props.user.id)
      return filteredOutMe
    }
    return false
  }

  renderUpdateToast = () => {
    if (!this.props.profile.name) {
      return (
        <Link to='/update' >
          <Message floating warning style={{ margin: '2em' }}>
            <Message.Header style={{ textAlign: 'center' }}>Update your profile information to get more matches!</Message.Header>
          </Message>
        </Link>
      )
    }
  }

  render () {
    const { dispatch, user: { id } } = this.props
    const activePot = this.unbox(this.props.potMatches)

    return (
    <>
    {/* <div> */}
      {this.renderUpdateToast()}
    {/* </div> */}
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
        {/* {activePot && <Profile user={activePot[1]} className=' next-card' />} */}

        {
          // activePot &&
          //   <Card className="base-card">
          //     <Card.Header content="Sorry About that you can swipe another time!" />
          //   </Card>
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
    matches: state.matches,
    profile: state.profile
  }
}

export default connect(mapStateToProps)(PotMatches)

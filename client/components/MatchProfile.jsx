import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile } from '../actions/getProfile'

class MatchProfile extends Component {
  componentDidMount () {
    const userId = this.props.match.params.id
    this.props.dispatch(getProfile(userId))
  }

  render () {
    return (
      <>
         {this.props.profile.userId && <Profile user={ this.props.profile }/>}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(MatchProfile)

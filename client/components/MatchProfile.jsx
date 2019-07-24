import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'

class MatchProfile extends Component {
  render () {
    return (
      <>
        <Profile user={ this.props.match.params.id }/>
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

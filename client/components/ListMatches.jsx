import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getMatches } from '../actions/listMatches'

class ListMatches extends Component {
  state = {
    matches: []
  }

  componentDidMount () {
    const { match, dispatch } = this.props
    const matches = match.params.matches
    matches
      ? this.props.dispatch(getMatches( { ????.id })) // ??
      : dispatch(redirect()) //???
  }

  render () {
    const { matches } = this.props
    return (
      <>
        {matches.map(match =>
          <Profile key={match.user2id} match={match} />)}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect()(ListMatches)

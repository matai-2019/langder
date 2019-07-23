import React from 'react'
import { connect } from 'react-redux'

import { } from '../actions/pro'

import Profile from './Profile'
import EditControls from './EditControls'

class ProfilePage extends React.Component {
  componentDidMount () {
    const userId = this.props.user.id
  }

  render () {
    const { user } = this.props
    return (
      <>
        <Profile user={user}>
          <EditControls/>
        </Profile>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.props
  }
}

export default connect(mapStateToProps)(ProfilePage)

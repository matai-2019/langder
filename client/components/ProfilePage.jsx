import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getProfile } from '../actions/getProfile'
import { logout } from '../actions/logout'

import Profile from './Profile'
import EditControls from './EditControls'

class ProfilePage extends React.Component {
  state = {
    redirect: null
  }

  renderRedirect = () => {
    if (this.state.redirect === 'update') {
      return <Redirect to='/update' />
    } else if (this.state.redirect === 'logout' && this.props.user === 'logged out') {
      return <Redirect to='/landing' />
    }
  }

  componentDidMount () {
    const userId = this.props.user.id
    this.props.dispatch(getProfile(userId))
  }

  handleUpdate = () => {
    this.setState({
      redirect: 'update'
    })
  }

 handleLogout = () => {
   this.setState({
     redirect: 'logout'
   })
   this.props.dispatch(logout())
 }

 render () {
   const { profile } = this.props
   return (
      <>
        {this.renderRedirect()}
        <Profile redirect={false} user={profile}>
          <EditControls handleLogout={this.handleLogout} handleUpdate={this.handleUpdate}/>
        </Profile>
      </>
   )
 }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    profile: state.profile
  }
}

export default connect(mapStateToProps)(ProfilePage)

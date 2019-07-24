import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

class Navbar extends Component {
  render () {
    return this.props.location.pathname === '/landing' ? (<></>) : (
      <Menu fluid widths={3} compact icon='labeled'>
        <Menu.Item style={{ color: '#4abdac' }} as={Link} to="/profile">
          <Icon name='id card outline' />
          Profile
        </Menu.Item>
        <Menu.Item style={{ color: '#4abdac' }} as={Link} to="/pot">
          <Icon name='users' />
          Find Learning Partner
        </Menu.Item>
        <Menu.Item style={{ color: '#4abdac' }} as={Link} to="/matches">
          <Icon name='address book outline' />
          Matches
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Navbar)

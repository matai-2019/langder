import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  render () {
    return (
      <Menu fluid widths={3} compact icon='labeled'>
        <Menu.Item as={Link} to="/profile/">
          <Icon name='id card outline' />
          Profile
        </Menu.Item>
        <Menu.Item as={Link} to="/pot">
          <Icon name='users' />
          Find Learning Partner
        </Menu.Item>
        <Menu.Item as={Link} to="/matches">
          <Icon name='address book outline' />
          Matches
        </Menu.Item>
      </Menu>
    )
  }
}

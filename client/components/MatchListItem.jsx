import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function MatchListItem ({ id, name }) {
  return (
    <Card href='#'>
      <Card.Content>
        <Image floated='left' size='mini' src='https://www.placecage.com/100/100' />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Match</Card.Meta>
        <Card.Item as={Link} to='/:id/matchProfile'>Profile</Card.Item>
      </Card.Content>
    </Card>
  )
}

export default MatchListItem

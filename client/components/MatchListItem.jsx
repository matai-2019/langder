import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

function MatchListItem ({ id, name, img }) {
  return (
    <Card link as={Link} to={`/${id}/matchProfile`}>
      <Card.Content>
        <Image floated='left' size='mini' src='https://www.placecage.com/150/150' />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Match</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default MatchListItem

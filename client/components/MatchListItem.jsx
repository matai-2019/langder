import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function MatchListItem ({ id, name }) {
  return (
    <Card href='#'>
      <Card.Content>
        <Image floated='left' size='mini' src='https://www.placecage.com/100/100' />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Match</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default MatchListItem

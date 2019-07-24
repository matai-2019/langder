import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function MatchListItem ({ id, name, img }) {
  return (
    <Card href='#'>
      <Card.Content>
        <Image floated='left' size='mini' src={`/public/images/user_${id}.jpg`} />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Match</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default MatchListItem

import React from 'react'

import { Container, Grid, Card, Image, Rating } from 'semantic-ui-react'

const props = {
  id: 1,
  name: 'Benjamin',
  languages: {
    toKnow: [],
    know: []
  },
  description: 'asdfasdfffffffffffassdfgggggggggggggggggasdfasdfasdfasdfasdfgggdfasfaf',
  email: 'test@test.com',
  ratingLearner: 4,
  ratingTeacher: 5
}

function Profile () {
  return (
    <>
      <Container>
        <Grid>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header content={props.name}/>
              </Card.Content>
              <Card.Content content={props.description}/>
              <Card.Content extra>
                Learner: <Rating icon="star" defaultRating={props.ratingLearner} maxRating={5} clearable/>
              </Card.Content>
              <Card.Content extra>
                Teacher: <Rating icon="star" defaultRating={props.ratingTeacher} maxRating={5} clearable/>
              </Card.Content>
              <Image src="https://ohgodmywifeisgerman.files.wordpress.com/2016/10/donttrusttherabbit-photo-04.jpg?w=507&h=321"/>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default Profile

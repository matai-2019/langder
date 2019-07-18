import React from 'react'

import { Container, Label, Flag, Card, Image, Rating } from 'semantic-ui-react'

const props = {
  id: 1,
  name: 'Triexie',
  languages: {
    toKnow: [{ name: 'Japanese', country: 'jp' }],
    know: [{ name: 'Singhalise', country: 'lk' }]
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
        <Card fluid centered>
          <Card.Header content={props.name} as="h2" textAlign="center"/>
          <Card.Content>
            {
              props.languages.toKnow.map((lang, index) => (
                <Label key={index} color="green" size="large">
                  <Flag name={lang.country} />
                  {lang.name}
                </Label>
              ))
            }
          </Card.Content>
          <Card.Content>
            {
              props.languages.know.map((lang, index) => (
                <Label key={index} color="red" size="large">
                  <Flag name={lang.country} />
                  {lang.name}
                </Label>
              ))
            }
          </Card.Content>
          <Card.Content content={props.description} />
          <Card.Content extra>
            Learner: <Rating icon="star" defaultRating={props.ratingLearner} maxRating={5} clearable />
          </Card.Content>
          <Card.Content extra>
            Teacher: <Rating icon="star" defaultRating={props.ratingTeacher} maxRating={5} clearable />
          </Card.Content>
          <Image src="https://ohgodmywifeisgerman.files.wordpress.com/2016/10/donttrusttherabbit-photo-04.jpg?w=507&h=321" />
        </Card>
      </Container>
    </>
  )
}

export default Profile

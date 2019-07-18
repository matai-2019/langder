import React from 'react'

import { Label, Flag, Card, Image, Rating } from 'semantic-ui-react'

const props = {
  id: 1,
  name: 'Triexie',
  languages: {
    toKnow: [{ name: 'Japanese', country: 'jp' }],
    know: [{ name: 'Singhalise', country: 'lk' }]
  },
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus itaque commodi quibusdam magni. In velit, quisquam ipsa, doloremque recusandae voluptatem dolor veniam incidunt eos, dolores maxime facere quis ullam.',
  email: 'test@test.com',
  ratingLearner: 4,
  ratingTeacher: 5
}

function Profile () {
  return (
    <>
        <Card fluid centered style={{ borderRadius: '10px', maxWidth: '543px' }}>
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
          <Card.Content extra>
            Learner: <Rating icon="star" defaultRating={props.ratingLearner} maxRating={5} disabled/>
          </Card.Content>
          <Card.Content extra>
            Teacher: <Rating icon="star" defaultRating={props.ratingTeacher} maxRating={5} disabled/>
          </Card.Content>
          <Image src="https://ohgodmywifeisgerman.files.wordpress.com/2016/10/donttrusttherabbit-photo-04.jpg?w=507&h=321" />
          <Card.Content content={props.description} style={{ wordWrap: 'break-word', flex: 'inherit' }}/>
        </Card>
    </>
  )
}

export default Profile

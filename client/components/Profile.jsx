import React from 'react'

import { Label, Flag, Card, Image, Rating, Button } from 'semantic-ui-react'

const props = {
  id: 1,
  name: 'Trixie',
  languages: {
    toKnow: [{ name: 'Japanese', country: 'jp' }],
    know: [{ name: 'Singhalise', country: 'lk' }]
  },
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus itaque commodi quibusdam magni. In velit, quisquam ipsa, doloremque recusandae voluptatem dolor veniam incidunt eos, dolores maxime facere quis ullam.',
  email: 'test@test.com',
  ratingLearner: 4,
  ratingTeacher: 5
}
const primary = '#b1f0ee'
const secondary = '#00ffd0'

const theme = {
  card: {
    borderRadius: '10px',
    maxWidth: '543px',
    boxShadow: '2px 3px 14px -7px rgba(0,0,0,0.62)'
  },
  span: {
    fontSize: '1.25em',
    marginRight: '1em'
  },
  icon: {
    color: secondary
  },
  mainHeader: {
    padding: '5px',
    background: primary,
    marginBottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  button: {
    position: 'absolute',
    backgroundColor: primary,
    boxShadow: '2px 3px 14px -7px rgba(0,0,0,0.62)'
  },
  editButton: {
    left: '25%'
  },
  deleteButton: {

    right: '25%'
  },
  description: {
    wordWrap: 'break-word',
    flex: 'inherit'
  }
}

function Profile () {
  const mapLanguage = (languages, color) => {
    if (!color) color = 'grey'
    return languages.map((lang, index) => {
      if (index <= 10) {
        return (
          <Label key={index} color={color} size="large">
            <Flag name={lang.country} />
            {lang.name}
          </Label>
        )
      }
    })
  }

  return (
    <>
      <Card fluid centered style={theme.card}>
        <Card.Header
          as="h2"
          content={props.name}
          style={theme.mainHeader} />
        <Card.Content>
          <Card.Header style={{ padding: '10px 0px' }}>
            <span style={theme.span}>Teaching</span>
            <Rating icon="star" defaultRating={props.ratingTeacher} maxRating={5} size="huge" disabled style={theme.icon} />
          </Card.Header>
          {mapLanguage(props.languages.toKnow, 'teal')}
        </Card.Content>
        <Card.Content>
          <Card.Header style={{ padding: '10px 0px' }}>
            <span style={theme.span}>Learning</span>
            <Rating icon="star" defaultRating={props.ratingLearner} maxRating={5} size="huge" disabled style={theme.icon}/>
          </Card.Header>
          {mapLanguage(props.languages.know)}
        </Card.Content>
        <Image src="https://ohgodmywifeisgerman.files.wordpress.com/2016/10/donttrusttherabbit-photo-04.jpg?w=507&h=321" />
        <Card.Content content={props.description} style={theme.description} />
        <div className="buttonControls" style={{ display: 'flex', width: 'inherit', height: '30px' }}>
          <Button icon='edit' size="massive" circular style={{ ...theme.button, ...theme.editButton }} />
          <Button icon='log out' size="massive" circular style={{ ...theme.button, ...theme.deleteButton }} />
        </div>
      </Card>

    </>
  )
}

export default Profile

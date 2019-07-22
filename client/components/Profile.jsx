import React from 'react'
import UpdateProfile from './UpdateProfile'
import { Label, Flag, Card, Image, Rating, Button } from 'semantic-ui-react'

const props = {
  id: 1,
  name: 'Trixie',
  image: 'https://ohgodmywifeisgerman.files.wordpress.com/2016/10/donttrusttherabbit-photo-04.jpg?w=507&h=321',
  toKnow: [
    { name: 'Japanese', country: 'jp' },
    { name: 'Creole', country: 'jm' },
    { name: 'Chinese', country: 'cn' },
    { name: 'German', country: 'de' }
  ],
  know: [{ name: 'Singhalise', country: 'lk' }],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus itaque commodi quibusdam magni. In velit, quisquam ipsa, doloremque recusandae voluptatem dolor veniam incidunt eos, dolores maxime facere quis ullam.',
  email: 'test@test.com',
  ratingLearner: 4,
  ratingTeacher: 5
}
const primary = '#b1f0ee'
const secondary = '#00ffd0'

const theme = {
  header: {
    padding: '10px 0px'
  },
  image: {
    boxShadow: '1px 2px 9px -2px rgba(0,0,0,0.58)'
  },
  card: {
    borderRadius: '10px',
    maxWidth: '536px',
    boxShadow: '2px 3px 14px -7px rgba(0,0,0,0.62)'
  },
  tag: {
    marginBottom: '0.5em'
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
  controls: {
    display: 'flex',
    width: 'inherit',
    height: '35px',
    padding: '1em'
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

const handleUpdate = () => {
  UpdateProfile(this.props.id)
    .then(() => this.setState({
      redirect: true
    }))
    .catch(err => this.props.UpdateProfileError(err.message))
}

// This function doesn't exist at that time

/* handleLogout = () => {
//   Logout(this.props.id)
//     .then(() => this.setState({
//       redirect: true
//     }))
//     .catch(err => this.props.UpdateProfileError(err.message))
// }
*/

function Profile () {
  const mapLanguage = (languages, color) => {
    if (!color) color = 'grey'
    return languages.map((lang, index) => {
      return languages && index <= 10
        ? (
          <Label key={index} color={color} style={theme.tag} size="large">
            <Flag name={lang.country} />
            {lang.name}
          </Label>
        ) : null
    })
  }

  return (
    <>
      <Card fluid centered style={theme.card}>
        <Card.Header
          as="h2"
          content={props.name}
          style={theme.mainHeader} />
        <Image src={props.image} style={theme.image} />
        <Card.Content>
          <Card.Header style={theme.header}>
            <span style={theme.span}>Teaching</span>
            <Rating icon="star" defaultRating={props.ratingTeacher} maxRating={5} size="large" style={theme.icon} disabled />
          </Card.Header>
          {mapLanguage(props.toKnow, 'teal')}
        </Card.Content>
        <Card.Content>
          <Card.Header style={theme.header}>
            <span style={theme.span}>Learning</span>
            <Rating icon="star" defaultRating={props.ratingLearner} maxRating={5} size="large" style={theme.icon} disabled />
          </Card.Header>
          {mapLanguage(props.know)}
        </Card.Content>
        <Card.Content content={props.description} style={theme.description} />
        <div className="buttonControls" style={theme.controls}>
          <Button icon='edit' size="massive" circular style={{ ...theme.button, ...theme.editButton }} onClick={this.handleUpdate} />
          {<Button icon='log out' size="massive" circular style={{ ...theme.button, ...theme.deleteButton }} /* onClick={this.handleLogout} */ />}
        </div>
      </Card>

    </>
  )
}

export default Profile

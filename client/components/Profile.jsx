import React from 'react'
import { Redirect } from 'react-router-dom'
import UpdateProfile from './UpdateProfile'
// import Logout from './Logout'
import { Label, Flag, Card, Image, Rating, Button } from 'semantic-ui-react'


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

class Profile extends React.Component {
  state = {
    redirect: false
  }

  handleUpdate = () => {
    this.setState({
      redirect: 'update'
    })
  }

  renderRedirect = () => {
    if (this.state.redirect === 'update') {
      return <Redirect to='/update' />
    } else if (this.state.redirect === 'logout') {
      return <Redirect to='/Logout' />
    }
  }

  // This function doesn't exist at that time

  handleLogout = () => {
    this.setState({
      redirect: 'logout'
    })
    // this.props.dispatch(Logout())
  }

  render () {
    const { user: { name, id, profileId, languages, description }, children } = this.props

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
        {this.renderRedirect()}
        <Card fluid centered style={{ ...theme.card, ...this.props.style }}>
          <Card.Header
            as="h2"
            content={name}
            style={theme.mainHeader} />
          {/* <Image src={image} style={theme.image} /> */}
          <Card.Content>
            {mapLanguage(languages, 'teal')}
          </Card.Content>
          <Card.Content content={description} style={theme.description} />
          <Card.Header style={theme.header}>
            <Rating icon="star" defaultRating={5} maxRating={5} size="large" style={theme.icon} disabled />
          </Card.Header>
          {children}
        </Card>
      </>
    )
  }
}

export default Profile

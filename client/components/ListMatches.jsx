import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Card } from 'semantic-ui-react'
import MatchListItem from './MatchListItem'
import { listMatches } from '../actions/listMatches'

class ListMatches extends Component {
  componentDidMount () {
    const userId = this.props.user.id
    this.props.dispatch(listMatches(userId))
  }

  render () {
    return (
      <Grid centered style={{ marginTop: '75px' }}>
        {this.props.matches.length > 0 && this.props.matches.map((match, index) => (
          <Grid.Row key={index}>
            <MatchListItem name={match.name} id={match.userId}/>
          </Grid.Row>))}
        {
          this.props.matches.length === 0 &&
          <Card link as={Link} to={`/pot`}>
            <Card.Content>
              <Card.Header>{'No matches'}</Card.Header>
              <Card.Meta>Dont worry, keep swiping!!</Card.Meta>
            </Card.Content>
          </Card>
        }
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    matches: state.matches
  }
}

export default connect(mapStateToProps)(ListMatches)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import MatchListItem from './MatchListItem'

class ListMatches extends Component {
  state = {
    matches: [{ userId: '1', profileId: '1', name: 'A' }, { matchId: '2', profileId: '2', name: 'Noel' }, { matchId: '3', profileId: '3', name: 'Mankee' }]
  }

  render () {
    return (
      <Grid centered style={{ marginTop: '75px' }}>
        {this.state.matches.map((match, index) => (
          <Grid.Row key={index}>
            <MatchListItem name={match.name}/>
          </Grid.Row>))}
      </Grid>
    )
  }
}

export default connect()(ListMatches)

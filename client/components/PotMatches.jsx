import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Label, Flag, Card, Button } from 'semantic-ui-react'

import SwipeCard from './SwipeCard'
import SwipeCards from './SwipeCards'
import LikeControls from './LikeControls'
import { like, dislike } from './actions/swipe'
import { fetchPotMatches } from '../actions/potMatches'
const PotMatches = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const potMatches = useSelector(state => state.pots, shallowEqual)

  useEffect(() => {
    dispatch(fetchPotMatches(user.id))
  }, [])

  const displayEmpty = () => <p>Sorry no more cards</p>

  const mapLanguage = (languages, color) => {
    if (!color) color = 'grey'
    return languages.map(lang => {
      return languages.length > 0
        ? (
          <Label
            key={lang}
            color={color}
            style={{ marginBottom: '0.5em' }}
            size="large">
            <Flag name={lang.countryCode} />
            {lang.name}
          </Label>
        ) : null
    })
  }

  return (
    <div className="pot">
      <SwipeCards onEnd={displayEmpty}>
        {potMatches &&
          potMatches.map((pot, index) => {
            const data = { index, userId: user.id, subjectId: pot.id }
            const [name, email, description, languages] = pot
            return (
              <SwipeCard
                key={index}
                className={'ui card swipe-card'}
                onSwipeLeft={() => dispatch(dislike(data))}
                onSwipeRight={() => dispatch(like(data))}
              >
                <Card.Header as="h2" content={name} />
                <Card.Content style={{ wordWrap: 'break-word', flex: 'inherit' }}>
                  <Card.Header as="h4" content="Description" />
                  {description ? <p>{description.slice(0, 200)}...</p> : <p>No Description</p>}
                </Card.Content>
                <Card.Content>
                  <Card.Header as="h4" content="Languages" />
                  {languages && mapLanguage(languages, 'teal')}
                </Card.Content>
                {email && <Card.Content extra>Email: {email} </Card.Content>}
                <LikeControls>
                  <Button icon='close' size="massive" circular
                    color="red"
                    name="dislike-button"
                    className="dislike-button"
                    onClick={() => dispatch(dislike(data))} />
                  <Button icon='like' size="massive" circular
                    color="pink"
                    name="like-button"
                    className="like-button"
                    onClick={dispatch(like(data))} />
                </LikeControls>
              </SwipeCard>
            )
          }
          )}
      </SwipeCards>
    </div>
  )
}

export default PotMatches

// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Button, Card } from 'semantic-ui-react'

// import Profile from './Profile'
// import LikeControls from './LikeControls'

// import { likePotMatch, fetchPotMatches, nextPotMatch } from '../actions/potMatches'

// import '../styles/pot.css'

// const PotMatches = (props) => {
//   const dispatch = useDispatch()

//   const user = useSelector(state => state.user)
//   const pots = useSelector(state => state.potMatches)
//   // const [activePot, setActivePot] = useState(null)
//   // const [nextPot, setNextPot] = useState(null)
//   // const [interacted, setInteracted] = useState([])

//   useEffect(() => {
//     if (pots.length <= 0) {
//       dispatch(fetchPotMatches(user.id))
//     }
//   }, [])

//   // const cycleCards = (id) => (e) => {
//   //   console.log(e.target.name)
//   //   switch (e.target.name) {
//   //     case 'dislike-button':
//   //       dispatch(nextPotMatch())
//   //       break
//   //     case 'like-button':
//   //       dispatch(likePotMatch(id, activePot.userId))
//   //       break
//   //     default:
//   //       break
//   //   }

//   //   setInteracted([...interacted, activePot])
//   // }

//   return (
//     <>
//       <div className="pot">

//         {/* {activePot &&
//           <Profile user={activePot} className='active-card'>
//             <LikeControls>
//               <Button icon='close' size="massive" circular
//                 color="red"
//                 name="dislike-button"
//                 className="dislike-button"
//                 onClick={cycleCards()} />
//               <Button icon='like' size="massive" circular
//                 color="pink"
//                 name="like-button"
//                 className="like-button"
//                 onClick={cycleCards(user.id)} />
//             </LikeControls>
//           </Profile>}
//         {nextPot ? <Profile user={nextPot} className=' next-card' />
//           : (<Card className="base-card" onClick={() => dispatch(fetchPotMatches(user.id))}>
//             <Card.Header content="Sorry About that you can swipe another time!" />
//           </Card>)
//         } */}
//       </div>
//     </>
//   )
// }

// export default PotMatches

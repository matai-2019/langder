
import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Card } from 'semantic-ui-react'

import SwipeCard from './SwipeCard'
import SwipeCards from './SwipeCards'
import { swipeLeft, swipeRight } from './actions/swipe.actions'
import { getCardsSuccess } from './actions/pot.actions'

const PotMatches = () => {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.pots, shallowEqual)
  const displayEmpty = () => <p>Sorry no more cards</p>
  
  useEffect(() => {
    dispatch(getCardsSuccess())
  }, [])

  return (
    <div className="pot">
      <SwipeCards onEnd={displayEmpty}>
        {cards &&
          cards.length > 0 &&
          cards.map((card, index) => (
            <SwipeCard
              key={index}
              name={card.name}
              className={'ui card swipe-card'}
              onSwipeLeft={() => dispatch(swipeLeft(card.id))}
              onSwipeRight={() => dispatch(swipeRight(card.id))}
            >
              <Card.Header>
                <h1>{card.name}</h1>
              </Card.Header>
            </SwipeCard>
          ))}
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

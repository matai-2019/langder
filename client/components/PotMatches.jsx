import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import Cards, { Card as SwipeCard } from 'react-swipe-card'
// import { useSpring, animated } from 'react-spring'
// import Profile from './Profile'
import PotCard from './PotCard'
import LikeControls from './LikeControls'

import { likePotMatch, fetchPotMatches, nextPotMatch } from '../actions/potMatches'

import '../styles/pot.css'

const PotMatches = () => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const pots = useSelector(state => state.potMatches)
  console.log(user)
  // const [activePot, setActivePot] = useState(null)
  // const [nextPot, setNextPot] = useState(null)
  // const [interacted, setInteracted] = useState([])

  useEffect(() => {
    if (pots.length === 0) {
      console.log('fetchign pots', user.id)
      dispatch(fetchPotMatches(user.id))
    }
    if (!pots.pending) {
      console.log(pots.length, 'asdfsadfsad', pots)
    }
  })

  const cycleCards = (id) => (e) => {
    switch (e.target.name) {
      case 'dislike-button':
        dispatch(nextPotMatch())
        break
      case 'like-button':
        // dispatch(likePotMatch(id, activePot.userId))
        break
      default:
        break
    }

    // setInteracted([...interacted, activePot])
    // setActivePot(pots[0])
    // setNextPot(pots[1])
  }

  return (
    <>
      <div className="pot">
        <Cards onEnd={() => { }} className='master-root'>
          {
            pots && pots.length > 0 &&
            pots.map((pot, index) => (
              <PotCard key={index} user={pot} className='active-card' isAnimated={true} SwipeCard={SwipeCard}>
                <LikeControls>
                  <Button icon='close' size="massive" circular
                    color="red"
                    name="dislike-button"
                    className="dislike-button"
                    onClick={cycleCards()} />
                  <Button icon='like' size="massive" circular
                    color="pink"
                    name="like-button"
                    className="like-button"
                    onClick={cycleCards(user.id)} />
                </LikeControls>
              </PotCard>
            ))
          }
        </Cards>
      </div>
    </>
  )
}

export default PotMatches

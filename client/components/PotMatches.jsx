import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card } from 'semantic-ui-react'
import { useSpring, animated } from 'react-spring'
import Profile from './Profile'
import LikeControls from './LikeControls'

import { likePotMatch, fetchPotMatches, nextPotMatch } from '../actions/potMatches'

import '../styles/pot.css'

const PotMatches = (props) => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const pots = useSelector(state => state.potMatches)
  const [activePot, setActivePot] = useState(null)
  const [nextPot, setNextPot] = useState(null)
  const [interacted, setInteracted] = useState([])

  useEffect(() => {
    if (pots.length <= 0) {
      dispatch(fetchPotMatches(user.id))
    }
    if (!pots.pending) {
      setActivePot(pots[0])
      setNextPot(pots[1])
    }
  })

  const cycleCards = (id) => (e) => {
    console.log(e.target.name)
    switch (e.target.name) {
      case 'dislike-button':
        dispatch(nextPotMatch())
        break
      case 'like-button':
        dispatch(likePotMatch(id, activePot.userId))
        break
      default:
        break
    }

    setInteracted([...interacted, activePot])
    setActivePot(pots[0])
    setNextPot(pots[1])
  }

  const onDrag = (e) => {
    e.preventDefault()
    const bb = e.target.getBoundingClientRect()
    console.log('drag', bb, e.clientX)
  }

  const onDragEnd = e => {
    e.preventDefault()
    const bb = e.target.getBoundingClientRect()
    console.log('mouse Up', bb, e.clientX)
  }

  return (
    <>
      <div className="pot">
        {activePot &&
          <animated.div draggable className="wrapper" onDrag={onDrag} onDragEnd={onDragEnd}>
            <Profile user={activePot} className='active-card' isAnimated={true}>
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
            </Profile>
          </animated.div>
        }
        {nextPot ? <Profile user={nextPot} className=' next-card' />
          : (<Card className="base-card" onClick={() => dispatch(fetchPotMatches(user.id))}>
            <Card.Header content="Sorry About that you can swipe another time!" />
          </Card>)
        }
      </div>
    </>
  )
}

export default PotMatches

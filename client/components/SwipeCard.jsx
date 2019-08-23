import React, { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'

const transparentImage = new Image(0, 0)
transparentImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
const defaultOrigin = 'translate(0px,0px)'
const swipableCard = 'swipableCard'

function SwipeCard ({ children, as, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, className }) {
  const [coord, setCoord] = useState({})
  const [poo, setPoo] = useState()
  const [dragImage, setDrag] = useState(null)

  useEffect(() => {
    const element = document.querySelector('.swipe-card')
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = element.getBoundingClientRect()
    setCoord({
      x: elemRect.left - bodyRect.left,
      y: elemRect.top - bodyRect.top
    })
    setDrag(transparentImage)
  }, [])

  const calcDelta = (x, y, p) => p ? [x - coord.x - p.x, y - coord.y - p.y] : [x - coord.x, y - coord.y]

  const handleTouchStart = e => {
    const touchLocation = e.targetTouches[0]
    setPoo({
      x: touchLocation.clientX,
      y: touchLocation.clientY
    })
  }

  const handleDragStart = e => {
    e.dataTransfer.setData('text', '')
    e.dataTransfer.setDragImage(dragImage, 0, 0)
    const [deltaX, deltaY] = calcDelta(e.clientX, e.clientY)
    setPoo({ x: deltaX, y: deltaY })
  }

  const handleDrag = e => {
    const [deltaX, deltaY] = calcDelta(e.clientX, e.clientY, poo)
    e.target.style.transform = `translate(${deltaX}px,${deltaY}px)`
  }

  const handleTouchMove = e => {
    const isSwipable = e.target.classList.contains(swipableCard)
    if (isSwipable) {
      const touchLocation = e.targetTouches[0]
      const [deltaX, deltaY] = calcDelta(
        touchLocation.clientX,
        touchLocation.clientY,
        poo)
      e.target.style.transform = `translate(${deltaX}px,${deltaY}px)`
    }
  }

  const handleDragEnd = e => {
    const [deltaX, deltaY] = calcDelta(e.clientX, e.clientY, poo)
    e.target.style.transform = defaultOrigin
    delegateSwipe({ x: deltaX, y: deltaY })
  }

  const handleTouchEnd = e => {
    const touchLocation = e.changedTouches[0]
    const [deltaX, deltaY] = calcDelta(
      touchLocation.clientX,
      touchLocation.clientY,
      poo)
    e.target.style.transform = defaultOrigin
    delegateSwipe({ x: deltaX, y: deltaY })
  }

  const delegateSwipe = endCoords => {
    const deltaXPercent = endCoords.x / 330 * 100
    if (deltaXPercent > 50) {
      onSwipeRight()
    } else if (deltaXPercent < -50) {
      onSwipeLeft()
    }
  }

  const props = {
    className: className + ' ' + swipableCard,
    as: as,
    children: children,
    draggable: true,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd,
    onDragStart: handleDragStart,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }

  return (
    <animated.div {...props}/>
  )
}

export default SwipeCard

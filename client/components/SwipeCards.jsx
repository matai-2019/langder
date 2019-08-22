import React from 'react'

function SwipeCards ({ children, onEnd }) {
  return <>{children || onEnd()}</>
}

export default SwipeCards

import React from 'react'

import { Message } from 'semantic-ui-react'

export default function Toast ({ header, message, type, hidden }) {
  return (
    <Message className={type}>
      <Message.Header>{header}</Message.Header>
      <p>{ message && message}</p>
    </Message>
  )
}

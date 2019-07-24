import { Button } from 'semantic-ui-react'
import React from 'react'

const primary = '#b1f0ee'

const theme = {
  controls: {
    display: 'flex',
    width: 'inherit',
    height: '35px',
    padding: '1em'
  },
  button: {
    position: 'absolute',
    backgroundColor: primary,
    boxShadow: '2px 3px 14px -7px rgba(0,0,0,0.62)',
    color: 'black'
  },
  editButton: {
    left: '25%'
  },
  deleteButton: {
    right: '25%'
  }
}

export default function EditControls (props) {
  return (
    <div className="buttonControls" style={theme.controls}>
      <Button icon='edit' size="massive" circular style={{ ...theme.button, ...theme.editButton }} onClick={props.handleUpdate} />
      {<Button icon='log out' size="massive" circular style={{ ...theme.button, ...theme.deleteButton }} onClick={props.handleLogout} />}
    </div>
  )
}

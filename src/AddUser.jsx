import React from 'react'

import {
  TextField, Button
} from '@material-ui/core'

export default function AddUser() {
  return (
    <div id="addUser">
      <TextField
        placeholder='Nombre'/>
      <Button
        variant="contained"
        color="primary"
        disableElevation>Añadir
      </Button>
    </div>
  )
}
import React from 'react'

import {
  Card as MuiCard, CardActions, IconButton
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

export default function Card(props) {
  return (
    <MuiCard>
      <h2>{props.value}</h2>
      <CardActions>
        <IconButton
          color="secondary"
          aria-label="delete user"
          component="span">
          <DeleteIcon/>
        </IconButton>
      </CardActions>
    </MuiCard>
  )
}

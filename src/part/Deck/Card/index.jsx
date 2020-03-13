import React from 'react'
import {
  Card as MuiCard,
  CardActions,
  IconButton
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Avatar from './Avatar'

export default function Card(props) {
  const { user, deleteUser } = props
  const { id, name, email, avatar } = user
  return (
    <MuiCard className='Card'>
      <Avatar alt={email} url={avatar} />
      <div className="Info">
        <h4 className='Title'>{name}</h4>
        <p className='Email'>{email}</p>
      </div>
      <CardActions className='CardActions'>
        <IconButton
          aria-label="deleteUser"
          color="secondary"
          component="div"
          onClick={() => deleteUser(id)}>
          <DeleteIcon/>
        </IconButton>
      </CardActions>
    </MuiCard>
  )
}

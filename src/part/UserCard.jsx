import React from 'react'

import { Card, CardActions, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

import Avatar from './Avatar'

export default class UserCard extends React.Component {
  render() {
    const { user, deleteUser } = this.props
    const { id, name, email, avatar } = user
    return (
      <Card className='UserCard'>
        <Avatar url={avatar} />
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
      </Card>
    )
  }
}

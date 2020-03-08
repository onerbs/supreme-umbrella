import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { Card, CardActions, IconButton } from '@material-ui/core'
import Avatar from './Avatar'

export default class User extends React.Component {
  render() {
    const { user, deleteUser } = this.props
    const { avatar_url, name } = user
    return (
      <Card className='UserCard'>
        <Avatar url={avatar_url} />
        <h4>{name}</h4>
        <CardActions className='CardActions'>
          <IconButton
            aria-label="delete user"
            color="secondary"
            component="span"
            onClick={() => deleteUser(user)}>
            <DeleteIcon/>
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

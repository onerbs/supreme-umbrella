import React       from 'react'
import DeleteIcon  from '@material-ui/icons/Delete'
import {
  Card,
  CardActions,
  IconButton
} from '@material-ui/core'

export default function User(props) {
  return (
    <Card className='UserCard'>
      {/* avatar */}
      <h4>{ props.name }</h4>
      <CardActions className='CardActions'>
        <IconButton
          aria-label="delete user"
          color="secondary"
          component="span"
          onClick={ () => { props.deleteUser(props.name) } }>
          <DeleteIcon/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

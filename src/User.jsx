import React, { Component }  from 'react'
import DeleteIcon            from '@material-ui/icons/Delete'
import {
  Card,
  CardActions,
  IconButton
} from '@material-ui/core'

export default class User extends Component {
  render() {
    return (
      <Card className='Card'>
        {/* avatar */}
        <h4>{ this.props.name }</h4>
        <CardActions className='CardActions'>
          <IconButton
            aria-label="delete user"
            color="secondary"
            component="span"
            onClick={() => {this.props.deleteUser(this.props.name)}}>
            <DeleteIcon/>
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

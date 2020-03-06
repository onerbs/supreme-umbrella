import React, { Component } from 'react'

import { TextField, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default class AddUser extends Component {
  state = {
    value: ''
  }
  render() {
    return (
      <div id="AddUser">
        <TextField
          label='Nombre'
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}>
        </TextField>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {this.props.addUser(this.state.value)}}>
          Añadir
        </Button>
      </div>
    )
  }
}

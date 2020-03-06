import React, { Component } from 'react'

import { TextField, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default class AddUser extends Component {
  state = {
    value: ''
  }
  addUser = () => {
    this.props.addUser(this.state.value)
    this.setState({ value: '' })
  }
  render() {
    return (
      <div id="AddUser">
        <TextField
          label='Nombre'
          value={this.state.value}
          onChange={event => { this.setState({ value: event.target.value }) }}
          onKeyUp={event => { if (event.key === 'Enter') this.addUser() }}/>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={this.addUser}>
          Añadir
        </Button>
      </div>
    )
  }
}

import React from 'react'

import { TextField, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default class NewUser extends React.Component {
  state = {
    input: null
  }
  get input() {
    return this.state.input
  }
  componentDidMount() {
    this.setState({
      input: document.getElementsByTagName('input')[0]
    })
  }
  addUser = () => {
    this.props.addUser(this.input.value)
    this.input.value = ''
    this.input.focus()
  }
  render() {
    return (
      <div id="AddUser">
        <TextField
          label='Nombre'
          onKeyUp={event => { if (event.key === 'Enter') this.addUser() }}/>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => { this.addUser() }}>
          Añadir
        </Button>
      </div>
    )
  }
}

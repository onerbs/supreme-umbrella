import React from 'react'

import { TextField, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default class AddUser extends React.Component {
  state = {
    input: null
  }
  componentDidMount() {
    this.setState({
      input: document.getElementsByTagName('input')[0]
    })
  }
  addUser = () => {
    let inputElement = this.state.input
    this.props.addUser(inputElement.value)
    inputElement.value = ''
    inputElement.focus()
    this.setState({ input: inputElement })
  }
  render() {
    return (
      <div id="AddUser">
        <TextField
          label='Nombre'
          onChange={ev => { this.setState({ value: ev.target.value }) }}
          onKeyUp={ev => { if (ev.key === 'Enter') { this.addUser() } }}/>
        <Button
          className='Button'
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={_ => { this.addUser() }}>
          Añadir
        </Button>
      </div>
    )
  }
}

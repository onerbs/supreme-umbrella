import React, { Component } from 'react'

import { TextField } from "@material-ui/core"

export default class Search extends Component {
  render = () => {
    return (
      <TextField
        id='Search'
        label='Buscar'
        type='search'
        onChange={event => {this.props.findUser(event.target.value)}}>
      </TextField>
    )
  }
}

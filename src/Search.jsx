import React from 'react'

import { TextField } from "@material-ui/core"

export default function Search(props) {
  return (
    <TextField
      id='Search'
      label='Buscar'
      type='search'
      onChange={event => {props.findUser(event.target.value)}}>
    </TextField>
  )
}

import React from 'react'

import NewUser from './NewUser'
import Search  from './Search'

export default function Form(props) {
  return (
    <div id='Controls'>
      <NewUser addUser={props.addUser} />
      <Search findUser={props.findUser} />
    </div>
  )
}

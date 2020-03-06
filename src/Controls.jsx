import React from 'react'

import AddUser from './AddUser'
import Search  from './Search'

export default function Controls(props) {
  return (
    <div id='Controls'>
      <AddUser addUser={props.addUser} />
      <Search findUser={props.findUser} />
    </div>
  )
}

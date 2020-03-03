import React from 'react'

import AddUser from './AddUser'
import Search  from './Search.jsx'

// makeStyles?

export default function Controls(props) {
  return (
    <div id='controls'>
      <AddUser/>
      <Search/>
    </div>
  )
}

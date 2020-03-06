import React from 'react'

import User from './User'

export default function Deck(props) {
  const { view, deleteUser } = props
  return (
    <div id='Deck'>
      { view.map(name =>
        <User
           key={ name }
          name={ name }
          deleteUser={ deleteUser }/>) }
    </div>
  )
}

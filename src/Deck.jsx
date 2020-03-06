import React from 'react'

import UserCard from './UserCard'

export default function Deck(props) {
  const { view, deleteUser } = props
  return (
    <div id='Deck'>
      { view.map(user =>
        <UserCard
             key={ user.ID }
            name={ user.name }
           email={ user.email }
          avatar={ user.avatar }
          deleteUser={ deleteUser }/>) }
    </div>
  )
}

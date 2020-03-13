import React from 'react'
import Card from './Card'

export default function Deck(props) {
  const { view, deleteUser } = props
  return (
    <div id='Deck'>{
      view.map(user =>
        <Card
          deleteUser={deleteUser}
          key={user.id}
          user={user}/>)
    }</div>
  )
}

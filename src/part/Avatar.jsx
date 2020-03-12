import React from 'react'

export default function Avatar(props) {
  return(
    <img
      alt='avatar'
      className='Avatar'
      src={props.url}
    />
  )
}

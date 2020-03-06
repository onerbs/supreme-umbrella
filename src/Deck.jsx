import React, { Component } from 'react'

import User from './User'

export default class Deck extends Component {
  render() {
    const { view, deleteUser } = this.props
    return (
      <div id='Deck'>
        {view.map(name => <User key={name} name={name} deleteUser={deleteUser} />)}
      </div>
    )
  }

}

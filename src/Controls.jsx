import React from 'react'

import AddUser from './AddUser'
import Search  from './Search'

export default class Controls extends React.Component {
  render() {
    return (
      <div id='Controls'>
        <AddUser addUser={this.props.addUser} />
        <Search findUser={this.props.findUser} />
      </div>
    )
  }
}

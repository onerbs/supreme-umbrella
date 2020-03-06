import React from 'react'

import Controls from './Controls'
import Deck     from './Deck'
import Record   from './UserRecord'
import Records  from './RecordList'

import { createMuiTheme }    from '@material-ui/core/styles'
import { deepPurple, amber } from '@material-ui/core/colors'
import { ThemeProvider }     from '@material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  }
})

export default class App extends React.Component {

  state = {
    data: [],
    view: [],
  }

  get data() {
    return this.state.data
  }

  _isValidRecord = user => { console.log(`user: ${user}`) }
  _hasRecord = user => {
    for (let r of this.data)
      if (r.equals(user))
        return true
    return false
  }

  addUser = (user) => {
    if (this._isValidRecord(user)) {
      const  record  = makeRecord(user)
      console.log(`valid_record: ${record}`)
      let mut = this.data
      mut.push(record)
      this.setState({ data: mut, view: mut })
      console.log(`stateOf_data: ${this.data}`)
    }
  }

  deleteUser = user => {
    if (this._isValidRecord(user) && this._hasRecord(user)) {
      let to_remove = this._findRecord(user)
      console.log(`Will remove ${to_remove}`)
      let mut = this.data
      if (mut.includes(user)) {
        let index = mut.indexOf(user)
        mut.splice(index, 1)
        this.setState({ data: mut, view: mut })
        // console.log(this.data)
      }
    }
  }

  findUser = term => {
    const { data } = this.state
    if (term === '') {
      // console.log(`Restoring View`)
      this.setState({ view: data })
    } else {
      // console.log(`Searching: ${term}`)
      let edit = data
        // .map(name => name.toLowerCase())
        .filter(name => name.includes(term))
      this.setState({ view: edit })
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        // let raw = json.map(object => object.name)
        // this.setState({ data: raw, view: raw })
      })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div id='App'>
          <Controls addUser={this.addUser} findUser={this.findUser} />
          <Deck view={this.state.view} deleteUser={this.deleteUser} />
        </div>
      </ThemeProvider>
    )
  }

}

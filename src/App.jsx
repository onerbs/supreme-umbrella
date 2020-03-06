import React from 'react'

import Controls from './Controls'
import Deck     from './Deck'

import { ThemeProvider }  from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { deepPurple, amber }  from '@material-ui/core/colors'

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

  addUser = async name => {
    if (name !== null && name !== '') {
      // console.log(`Will add ${name}`)
      let edit = this.state.data
      edit.push(name)
      this.setState({ data: edit, view: edit })
      // console.log(this.state.data)
    }
  }

  deleteUser = async name => {
    if (name !== null && name !== '') {
      // console.log(`Will remove ${name}`)
      let edit = this.state.data
      if (edit.includes(name)) {
        let index = edit.indexOf(name)
        edit.splice(index, 1)
        this.setState({ data: edit, view: edit })
        // console.log(this.state.data)
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
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        let raw = json.map(object => object.name)
        this.setState({ data: raw, view: raw })
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

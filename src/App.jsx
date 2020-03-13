import React from 'react'

import Form   from './part/Form'
import Deck   from './part/Deck'
import Record from './lib/Record'

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

  tryAddNewUser = user => {
    if (this.data.map(user => user.email).includes(user.email))
      return console.error(`El usuario ${user.name} ya existe.`)
    let mut = [...this.data, user]
    this.setState({ data: mut, view: mut })
  }

  addUser = name => {
    let promise = name ? Record.named(name) : Record.random()
    promise.then(this.tryAddNewUser)
  }

  deleteUser = id => {
    let mut = this.data.filter(r => r.id !== id)
    this.setState({ data: mut, view: mut })
  }

  findUser = term => {
    if (term === '') this.setState({ view: this.data })
    else this.setState({ view: this.data.filter(r => r.name.includes(term)) })
  }

  componentDidMount() {
    // simulation
    let U = 10; while (U-- > 0) Record.random().then(this.tryAddNewUser)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div id='App'>
          <Form addUser={this.addUser} findUser={this.findUser} />
          <Deck view={this.state.view} deleteUser={this.deleteUser} />
        </div>
      </ThemeProvider>
    )
  }

}

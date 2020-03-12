import React from 'react'

import Controls from './part/Controls'
import Deck     from './part/Deck'
import Record   from './lib/UserRecord'

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

  addUser = name => {
    let promise = name ? Record.named(name) : Record.random()
    promise.then(record => {
      let mut = Array.from(this.data)
      mut.push(record)
      this.setState({ data: mut, view: mut })
    })
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
    let nof_users = 5
    while (nof_users-- > 0) {
      Record.random().then(record => {
        let data_ = Array.from(this.data)
        data_.push(record)
        this.setState({ data: data_, view: data_ })
      })
    }
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

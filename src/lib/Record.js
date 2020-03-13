
import R from './Random'

export default class Record {
  constructor(user) {
    this.id = R.getString(15)
    this.name = `${user.name.first} ${user.name.last}`
    this.email = user.email.split('@')[0]
    this.domain = user.email.split('@')[1]
    this.avatar = user.picture.medium
  }
  rename = name => {
    this.name = name
    return this
  }
  static from = raw_data => new Record(raw_data)
  static named = name => Record.random().then(r => r.rename(name))
  static random = () =>
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => Record.from(json.results[0]))
}

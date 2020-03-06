
import ID from './ID'

export default class Record {
  constructor(raw) {
    this.ID = ID.generate() // ! mandatory
    this.name = raw.name
    this.email = raw.email
    // ...
  }
  equals = raw => {
    return false
  }
}

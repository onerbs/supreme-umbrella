export default class R {

  /** The numeric ASCII codes range. [48, 57] */
  static NUMERIC = [48, 57]

  /** The uppercase ASCII codes range. [65, 90] */
  static UPPERCASE = [65, 90]

  /** The lowercase ASCII codes range. [97, 122] */
  static LOWERCASE = [97, 122]

  /**
    * Returns a randomly-generated boolean value.
    * @return {boolean} true or false
    */
  static getBool = () => ((Math.random() * 2) >= 1)

  /**
    * Returns a randomly-generated integer number.
    * @param {number} min - greater or equals than 0 (inclusive)
    * @param {number} max - greater than min (inclusive)
    * @return {number} Any number between min and max
    */
  static getInt = (max, min = 0) => Math.floor(R.generate(min, max))

  /**
    * Returns a randomly-generated character.
    * The returned character may be lowercase or uppercase.
    * @param {boolean} up - force uppercase?
    * @return {string} random char, random case. [a-zA-Z]
    */
  static getChar = (up = R.getBool()) => String.fromCharCode(R.getInt(
    up ? R.UPPERCASE[1] : R.LOWERCASE[1], up ? R.UPPERCASE[0] : R.LOWERCASE[0]))

  /**
    * Returns a randomly-generated {@code char} number.
    *
    * @return {string} random numeric character [0-9]
    */
  static getNumber = () => String.fromCharCode(R.getInt(R.NUMERIC[1], R.NUMERIC[0]))

  /**
    * Returns an array of randomly-generated {@code char}s.
    * The returned char will be uppercase if up is true
    * @param {number} len - the returned array length
    * @param {number} up - force uppercase?
    * @return {string[]} array of random characters
    */
  static getChars = (len, up = -1) => {
    if (len < 1) len = 1
    let ret = []; while (len-- > 0)
      ret.push(R.getBool()
        ? R.getChar(up === -1 ? R.getBool() : !!up)
        : R.getNumber())
    return ret
  }

  /**
    * Returns a randomly-generated {@code char} number.
    * @param len returned array length
    * @return {string[]} array of random numeric characters
    */
  static getNumbers = (len = 10) => {
    if (len < 10) len = 10
    let ret = []; while (len-- > 0) ret.push(R.getNumber())
    return ret
  }

  /**
    * Return a randomly-generated string.
    * @param {number} len - the minimum length
    * @return {string} random string
    */
  static getString = (len = 10, up = -1) => R.getChars(len, up).join('')

  /**
    * Returns a randomly-generated double value.
    * @param {number} min - greater or equals than 0 (inclusive)
    * @param {number} max - greater than min (inclusive)
    * @return {number} Any number between min and max
    */
  static generate = (min, max) => (Math.random() * ((max + 1) - min)) + min

}

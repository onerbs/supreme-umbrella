const error = msg => { console.error(msg); return 0 }

export default class R {

  /**
    * Returns a randomly-generated boolean value.
    * @return true or false
    */
  static getBool() {
    return ((Math.random() * 2) >= 1);
  }

  /**
    * Returns a randomly-generated integer number.
    * @param min - greater than   0 (<i>inclusive</i>)
    * @param max - greater than min (<i>inclusive</i>)
    * @return Any number between min and max
    */
  static getInt(min, max) {
    return Math.floor(R.generate(min, max));
  }

  /**
    * Returns a randomly-generated integer number.
    * @param max - A number greater than 0 (<i>inclusive</i>)
    * @return Any number between 0 and max
    */
  static getInt(max) {
    return R.getInt(0, max);
  }

  /**
    * Returns a randomly-generated double value.
    * @param min - greater than   0 (<i>inclusive</i>)
    * @param max - greater than min (<i>inclusive</i>)
    * @return Any number between min and max
    */
  static generate(min, max) {
    if (min < 0 || max < min) return error("IlegalNumberException");
    return (Math.random() * ((max + 1) - min)) + min;
  }

  /**
    * Returns a randomly-generated character.
    * The returned character may be lowercase or uppercase.
    * @param up - force uppercase?
    * @return random char, random case. [a-zA-Z]
    */
  static getChar(up = R.getBool()) {
    return R.getInt(up ? Tools.UPPERCASE : Tools.LOWERCASE);
  }

  /**
    * Returns an array of randomly-generated {@code char}s.
    *
    * <p>The returned {@code char} will be uppercase if
    * {@code uppercase == true}.</p>
    *
    * @param length returned array length
    * @param uppercase force uppercase?
    *
    * @return char[len] filled with random characters
    */
  static char[] getCharacters(
        final int length, final boolean uppercase) {
    if (length < 0) throw new IllegalArgumentException(
            "Unexpected length < 0. got: " + length);
    var ret = new char[length];
    for (int i = Z; i < length; i++)
      ret[i] = getBoolean() ? getCharacter() : getNumber();
    return ret;
  }

  /**
    * Returns an array of randomly-generated {@code char}s.
    *
    * <p>The returned {@code char} will be uppercase if
    * {@code uppercase == true}.</p>
    *
    * @param length returned array length
    *
    * @return char[len] filled with random characters
    */
  static char[] getCharacters(final int length) {
    return getCharacters(length, getBoolean());
  }


  /**
    * Returns a randomly-generated {@code char} number.
    *
    * @return random numeric character [0-9]
    */
  static char getNumber() {
    return (char) getInteger(Tools.NUMERIC);
  }

  /**
    * Returns a randomly-generated {@code char} number.
    *
    * @param length returned array length
    *
    * @return random numeric character [0-9]
    */
  static char[] getNumbers(final int length) {
    if (length < 0) throw new IllegalArgumentException(
            "Unexpected length < 0. got: " + length);
    var ret = new char[length];
    for (int i = 0; i < length; i++) ret[i] = getNumber();
    return ret;
  }


  /**
    * Return a randomly-generated {@code String}.
    *
    * @return random String of length {@code ID.MIN_LENGTH}
    *
    * @see aria.util.ID#MIN_LENGTH
    */
  static String getString() {
    return getString(ID.MIN_LENGTH);
  }

  /**
    * Return a randomly-generated {@code String}.
    *
    * @param length The length of the string
    *
    * @return random String of specified length
    */
  static String getString(final int length) {
    return new String(getCharacters(length));
  }

}
